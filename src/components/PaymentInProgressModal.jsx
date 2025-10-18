import React, { useEffect } from "react";
import Swal from "sweetalert2";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { clearPaymentSession } from "../Features/Slice";

// === Spinner Animation ===
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// === Styled Components ===
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 90%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const Spinner = styled.div`
  border: 4px solid #e0e0e0;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto 1.5rem;
  animation: ${spin} 1s linear infinite;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.8rem;
  line-height: 1.6;
`;

const CancelButton = styled.button`
  background-color: lightgray;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: lightgray;
  }
`;

// === Component ===
const PaymentInProgressModal = ({ onCancel }) => {
    const dispatch = useDispatch();
  // 🔁 Refresh page every 10 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       window.location.reload();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

  const handleCancel = () => {
    Swal.fire({
      title: "Cancel Payment?",
      text: "Are you sure you want to cancel this payment? Your progress will be lost. But you can contact our support if you encounter any issue",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it",
    }).then((result) => {
      if (result.isConfirmed) {
        // localStorage.removeItem("niseb_payment_session");
         dispatch(clearPaymentSession());
        Swal.fire("Cancelled", "Payment session cleared.", "success");
        if (onCancel) onCancel();
      }
    });
  };

  return (
    <Overlay>
      <ModalBox>
        <Spinner />
        <Title>Payment in Progress</Title>
        <Message>
          Please wait while we verify your payment.
          <br />
          If you have not paid yet or wish to cancel, click below.
        </Message>
        <CancelButton onClick={handleCancel}>Cancel Payment</CancelButton>
      </ModalBox>
    </Overlay>
  );
};

export default PaymentInProgressModal;
