import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";

const ManualCertificateButton = () => {
    const { generateAndSendCertificate} = useContext(Context)
const navigate = useNavigate;

  const handleGenerate = () => {
    generateAndSendCertificate({
      membershipCategory: "2",
      title: "mrs",
      surname: "Akpangene",
      othername: "Chineme Mayfair",
      institution: "",
      id: "",
      membership_expiry: null,
      email: "",
      navigate,
      maxRetries: 3,
      retryDelay: 2000,
    });
  };

  return (
    <button onClick={handleGenerate}>
      Generate Certificate
    </button>
  );
};

export default ManualCertificateButton;
