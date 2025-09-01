
import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  color: #555;
`;

const UserDetailRow = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;

  strong {
    color: #008000;
  }
`;

const UserDetailModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <h2 style={{ color: "#008000", marginBottom: "1rem" }}>
          User Details
        </h2>

        {Object.entries(user).map(([key, value]) => (
          <UserDetailRow key={key}>
            <strong>{key.toLocaleUpperCase()}: </strong> {value || "—"}
          </UserDetailRow>
        ))}
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserDetailModal;
