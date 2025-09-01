
import React, { useState, useContext } from "react";
import styled from "styled-components";
import PaystackPop from "@paystack/inline-js";
import Swal from "sweetalert2";
import { Context } from "./Context";

/* -------- Styles -------- */
const Overlay = styled.div`
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white; border-radius: 12px;
  padding: 2rem; max-width: 500px; width: 90%;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
`;

const Title = styled.h2`
  font-size: 1.3rem; margin-bottom: 1rem; color: #008000;
`;

const Select = styled.select`
  width: 100%; padding: 0.6rem;
  border: 1px solid #ddd; border-radius: 8px;
  margin-bottom: 1rem;
`;

const ButtonRow = styled.div`
  display: flex; justify-content: flex-end; gap: 1rem;
`;

const Button = styled.button`
  background: ${p => p.bg || "#008000"};
  color: white; border: none; border-radius: 6px;
  padding: 0.6rem 1.2rem; font-weight: bold;
  cursor: pointer; &:hover { opacity: 0.9; }
`;

/* -------- Component -------- */
const PaymentModal = ({ user, onClose }) => {
  const { domain, payStackTestKey, payStackLiveKey, dollarRate} = useContext(Context);
  const [membership, setMembership] = useState("");

  const membershipFees = {
    student: 5000,
    fullmember: 10000,
    fellow: 20000,
    corporate: 50000,
    "foreign (undergraduate)": 10 * dollarRate,
    "foreign (graduate)": 20 * dollarRate,
    "foreign (fullmember)": 50 * dollarRate,
  };

  const handlePayment = () => {
    if (!membership) {
      Swal.fire("Error", "Please select a membership type", "error");
      return;
    }

    const amount = membershipFees[membership];
    const paystack = new PaystackPop();

    Swal.fire({
      title: "Processing Payment...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    paystack.newTransaction({
      key: payStackTestKey,
    //   key: payStackLiveKey,
      amount: Number(amount) * 100,
      email: user.email,
      firstname: user.surname,
      phone: user.mobile,
      onSuccess: async (transaction) => {
        Swal.fire({ text: "Saving payment..." });
        Swal.showLoading();

        try {
          const res = await fetch(`${domain}/save_payment.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user.id,
              reference: transaction.reference,
              amount,
              membership,
            })
          });
          const data = await res.json();

          if (data.success) {
            Swal.fire("Success", "Payment successful and membership updated!", "success");
            onClose();
          } else {
            Swal.fire("Error", data.error || "Failed to save payment", "error");
          }
        } catch (err) {
          Swal.fire("Error", "Network error: " + err.message, "error");
        }
      },
      onCancel: () => {
        Swal.fire("Cancelled", "Payment was cancelled", "info");
      }
    });
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>Renew Membership</Title>
        <Select value={membership} onChange={e => setMembership(e.target.value)}>
          <option value="">-- Select Membership --</option>
          {Object.keys(membershipFees).map(key => (
            <option key={key} value={key}>
              {key.toUpperCase()} - NGN {membershipFees[key].toLocaleString()}
            </option>
          ))}
        </Select>

        <ButtonRow>
          <Button bg="gray" onClick={onClose}>Cancel</Button>
          <Button bg="#008000" onClick={handlePayment}>Pay Now</Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
};

export default PaymentModal;
