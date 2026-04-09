// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { Context } from "./Context";

// const ManualCertificateButton = () => {
//     const { generateAndSendCertificate} = useContext(Context)
// const navigate = useNavigate;

//   const handleGenerate = () => {
//     generateAndSendCertificate({
//       membershipCategory: "2",
//       title: "Mr",
//       surname: "Victor",
//       othername: "E",
//       institution: "test",
//       id: "12345",
//       membership_expiry: null,
//       email: "victherich@gmail.com",
//       navigate,
//       maxRetries: 3,
//       retryDelay: 2000,
//     });
//   };

//   return (
//     <button onClick={handleGenerate}>
//       Generate Certificate
//     </button>
//   );
// };

// export default ManualCertificateButton;






import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "./Context";
import Swal from "sweetalert2";

const ManualCertificateButton = ({ user }) => {
  const { generateAndSendCertificate } = useContext(Context);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    membershipCategory: user?.membershipCategory || "2",
    title: user?.title || "",
    surname: user?.surname || "",
    othername: user?.othername || "",
    institution: user?.institution || "",
    id: user?.id || "",
    membership_expiry: "",
    email: user?.email || "",
  });

  const years = Array.from({ length: 31 }, (_, i) => 2020 + i);

  useEffect(() => {
    if (user) {
      setFormData({
        membershipCategory: user.membershipCategory || "2",
        title: user.title || "",
        surname: user.surname || "",
        othername: user.othername || "",
        institution: user.institution || "",
        id: user.id || "",
        membership_expiry: "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if(!formData.membership_expiry){
    Swal.fire({text:"Please select the year for which you want to send the certificate"});
      return;
    }
    generateAndSendCertificate({
      ...formData,
      navigate,
      maxRetries: 3,
      retryDelay: 2000,
    });

    setIsOpen(false);
  };

  return (
    <>
      <PrimaryButton onClick={() => setIsOpen(true)}>
        Send Cert
      </PrimaryButton>

      {isOpen && (
        <Overlay>
          <Modal>
            <Header>Generate Certificate</Header>

            <Form>
              <Input name="title" placeholder="Title" value={formData.title} onChange={handleChange} disabled/>
              <Input name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} disabled/>
              <Input name="othername" placeholder="Other Name" value={formData.othername} onChange={handleChange} disabled/>
              <Input name="institution" placeholder="Institution" value={formData.institution} onChange={handleChange} disabled/>
              <Input name="id" placeholder="ID" value={formData.id} onChange={handleChange} disabled/>
              <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

              <Select name="membership_expiry" value={formData.membership_expiry} onChange={handleChange}>
                <option value="">Select Expiry Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </Select>
            </Form>

            <Actions>
              <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
              <CancelButton onClick={() => setIsOpen(false)}>Cancel</CancelButton>
            </Actions>
          </Modal>
        </Overlay>
      )}
    </>
  );
};

export default ManualCertificateButton;

/* ================= STYLES ================= */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index:400;
`;

const Modal = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 16px;
  width: 360px;
  box-shadow: 0 10px 40px rgba(0, 128, 0, 0.2);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Header = styled.h2`
  color: #0a7d2c;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  outline: none;

  &:focus {
    border-color: #0a7d2c;
    box-shadow: 0 0 0 2px rgba(10, 125, 44, 0.1);
  }
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  outline: none;

  &:focus {
    border-color: #0a7d2c;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PrimaryButton = styled.button`
  background: #0a7d2c;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #095f22;
  }
`;

const SubmitButton = styled(PrimaryButton)`
  flex: 1;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  flex: 1;
  background: white;
  color: #0a7d2c;
  border: 2px solid #0a7d2c;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f3fff6;
  }
`;
