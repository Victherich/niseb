
// import React, { useState, useContext } from "react";
// import styled from "styled-components";
// import PaystackPop from "@paystack/inline-js";
// import Swal from "sweetalert2";
// import { Context } from "./Context";

// /* -------- Styles -------- */
// const Overlay = styled.div`
//   position: fixed; top: 0; left: 0;
//   width: 100%; height: 100%;
//   background: rgba(0,0,0,0.6);
//   display: flex; justify-content: center; align-items: center;
//   z-index: 1000;
// `;

// const ModalBox = styled.div`
//   background: white; border-radius: 12px;
//   padding: 2rem; max-width: 500px; width: 90%;
//   box-shadow: 0 8px 24px rgba(0,0,0,0.2);
// `;

// const Title = styled.h2`
//   font-size: 1.3rem; margin-bottom: 1rem; color: #008000;
// `;

// const Select = styled.select`
//   width: 100%; padding: 0.6rem;
//   border: 1px solid #ddd; border-radius: 8px;
//   margin-bottom: 1rem;
// `;

// const ButtonRow = styled.div`
//   display: flex; justify-content: flex-end; gap: 1rem;
// `;

// const Button = styled.button`
//   background: ${p => p.bg || "#008000"};
//   color: white; border: none; border-radius: 6px;
//   padding: 0.6rem 1.2rem; font-weight: bold;
//   cursor: pointer; &:hover { opacity: 0.9; }
// `;

// /* -------- Component -------- */
// const PaymentModal = ({ user, onClose }) => {
//   const { domain, payStackTestKey, payStackLiveKey, dollarRate, membershipFees} = useContext(Context);
//   const [membership, setMembership] = useState("");



//   const handlePayment = () => {
//     if (!membership) {
//       Swal.fire("Error", "Please select a membership type", "error");
//       return;
//     }

//     const amount = membershipFees[membership];
//     const paystack = new PaystackPop();

//     Swal.fire({
//       title: "Processing Payment...",
//       text: "Please wait",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading()
//     });

//     paystack.newTransaction({
//       // key: payStackTestKey,
//       key: payStackLiveKey,
//       amount: Number(amount) * 100,
//       email: user.email,
//       firstname: user.surname,
//       phone: user.mobile,
//       onSuccess: async (transaction) => {
//         Swal.fire({ text: "Saving payment..." });
//         Swal.showLoading();

//         try {
//           const res = await fetch(`${domain}/save_payment.php`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               user_id: user.id,
//               reference: transaction.reference,
//               amount,
//               membership,
//             })
//           });
//           const data = await res.json();

//           if (data.success) {
//             Swal.fire("Success", "Payment successful and membership updated!", "success");
//             onClose();
//           } else {
//             Swal.fire("Error", data.error || "Failed to save payment", "error");
//           }
//         } catch (err) {
//           Swal.fire("Error", "Network error: " + err.message, "error");
//         }
//       },
//       onCancel: () => {
//         Swal.fire("Cancelled", "Payment was cancelled", "info");
//       }
//     });
//   };

//   return (
//     <Overlay>
//       <ModalBox>
//         <Title>Pay Annual Due</Title>
//         <Select value={membership} onChange={e => setMembership(e.target.value)}>
//           <option value="">-- Select Membership --</option>
//           {Object.keys(membershipFees).map(key => (
//             <option key={key} value={key}>
//               {key.toUpperCase()} - NGN {membershipFees[key].toLocaleString()}
//             </option>
//           ))}
//         </Select>

//         <ButtonRow>
//           <Button bg="gray" onClick={onClose}>Cancel</Button>
//           <Button bg="#008000" onClick={handlePayment}>Pay Now</Button>
//         </ButtonRow>
//       </ModalBox>
//     </Overlay>
//   );
// };

// export default PaymentModal;










import React, { useState, useContext } from "react";
import styled from "styled-components";
import PaystackPop from "@paystack/inline-js";
import Swal from "sweetalert2";
import { Context } from "./Context";

/* ===============================
   Styled Components
================================*/
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

const ModalBox = styled.div`
  background: #fff;
  width: 95%;
  max-width: 420px;
  border-radius: 15px;
  padding: 25px 30px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color:green;
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 10px 0 20px;
  font-size: 1rem;
  background: #f9f9f9;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #1b5e20;
    background: #fff;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.bg || "#ccc"};
  color: white;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ===============================
   Component
================================*/
const PaymentModal = ({ user, onClose }) => {
  const {
    domain,
    payStackTestKey,
    payStackLiveKey,
    dollarRate,
    membershipFees,
    generateAndSendCertificate, // make sure this exists in Context
  } = useContext(Context);

  const [selectedYear, setSelectedYear] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);


  const currentYear = 2050;
  // const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = 1990; y <= currentYear; y++) years.push(y);

  const getAmountForUserMembership = () => {
    if (!user?.membershipCategory) return 0;

    if (Array.isArray(membershipFees)) {
      const found = membershipFees.find(
        (m) => Number(m.id) === Number(user.membershipCategory)
      );
      return found ? found.amount : 0;
    }

    return membershipFees[user.membershipCategory] ?? 0;
  };

  const amount = getAmountForUserMembership();
  const displayAmount = amount ? Number(amount).toLocaleString() : "0";

  const handlePayment = () => {
    if (!selectedYear) {
      Swal.fire("Error", "Please select a year to pay for.", "error");
      return;
    }
    if (!amount || amount <= 0) {
      Swal.fire("Error", "Invalid membership amount. Please contact support.", "error");
      return;
    }

    const paystack = new PaystackPop();
    setIsProcessing(true);

    Swal.fire({
      title: "Processing Payment...",
      text: `You will be charged ₦${displayAmount}`,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    paystack.newTransaction({
      // key: payStackTestKey,
      key: payStackLiveKey,
      amount: Number(amount) * 100,
      email: user.email,
      firstname: user.surname,
      phone: user.mobile,
      onSuccess: async (transaction) => {
        Swal.fire({ text: "Verifying payment with server..." });
        Swal.showLoading();

        try {
          // 1️⃣ Verify payment
          const verifyRes = await fetch(`${domain}/verify_payment.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: transaction.reference }),
          });
          const verifyData = await verifyRes.json();

          if (!verifyData.success) {
            Swal.fire("Error", verifyData.message || "Payment verification failed", "error");
            setIsProcessing(false);
            return;
          }

          // 2️⃣ Save payment
          const saveRes = await fetch(`${domain}/save_payment.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user.id,
              reference: transaction.reference,
              amount,
              membership: user.membershipCategory,
              description: `Annual Due Payment for ${selectedYear}`,
              
            }),
          });
          const saveData = await saveRes.json();

          if (!saveData.success) {
            Swal.fire("Error", saveData.error || "Failed to save payment", "error");
            setIsProcessing(false);
            return;
          }

          // 3️⃣ Generate and send certificate
          const membership_expiry = `${selectedYear}`;

          try {
            await generateAndSendCertificate({
              surname: user.surname,
              othername: user.othername,
              institution: user.institution,
              id: user.id,
              membership_expiry,
              email: user.email,
            });
          } catch (err) {
            console.error("Certificate generation/send failed:", err);
            Swal.fire(
              "Warning",
              "Payment succeeded and was saved, but sending certificate failed. We will retry sending the certificate.",
              "warning"
            );
            setIsProcessing(false);
            onClose();
            return;
          }

          Swal.fire("Success", "Payment successful. Certificate sent to your email!", "success");
          setIsProcessing(false);
          onClose();
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Network/server error: " + (err.message || err), "error");
          setIsProcessing(false);
        }
      },
      onCancel: () => {
        Swal.fire("Cancelled", "Payment was cancelled", "info");
        setIsProcessing(false);
      },
      onError: (err) => {
        Swal.fire("Payment Error", err.message || "Payment failed", "error");
        setIsProcessing(false);
      },
    });
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>Pay Annual Due</Title>

        <label>
          Select year to pay for:
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            disabled={isProcessing}
          >
            <option value="">-- Select Year --</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </Select>
        </label>

        <p>
          Amount (based on your membership): <strong>₦{displayAmount}</strong>
        </p>

        <ButtonRow>
          <Button bg="gray" onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
          <Button bg="#2e7d32" onClick={handlePayment} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Pay Now"}
          </Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
};

export default PaymentModal;
