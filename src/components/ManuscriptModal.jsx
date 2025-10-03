
import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  background: orange;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  float: right;
`;

export default function ManuscriptModal({ show, manuscript, onClose }) {
  if (!show || !manuscript) return null;

  return (
    <ModalBackground show={show} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3 style={{ color: "green" }}>
          Manuscript ID: {manuscript.manuscript_id}
        </h3>
         <p>
          <strong>Journal:</strong> {manuscript.journal}
        </p>
        <p>
          <strong>Author:</strong> {manuscript.name}
        </p>
        <p>
          <strong>Email:</strong> {manuscript.email}
        </p>
        <p>
          <strong>Phone:</strong> {manuscript.phone}
        </p>
        <p>
          <strong>Institution:</strong> {manuscript.institution}
        </p>
        <p>
          <strong>Title:</strong> {manuscript.title}
        </p>
         <p>
          <strong>Cover Letter:</strong> {manuscript.cover_letter}
        </p>
        <p>
          <strong>Abstract:</strong> {manuscript.abstract}
        </p>
        <p>
          <strong>Disclosure:</strong> {manuscript.disclosures}
        </p>
        {manuscript.manuscript_file && (
          <p>
            <a
              href={`https://nisebnigeria.com/api_niseb/${manuscript.manuscript_file}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "orange" }}
            >
              Download Manuscript
            </a>
          </p>
        )}
        {manuscript.figures_file && (
          <p>
            <a
              href={`https://nisebnigeria.com/api_niseb/${manuscript.figures_file}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "orange" }}
            >
              Download Figures
            </a>
          </p>
        )}
        {manuscript.tables_file && (
          <p>
            <a
              href={`https://nisebnigeria.com/api_niseb/${manuscript.tables_file}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "orange" }}
            >
              Download Tables
            </a>
          </p>
        )}
      </ModalContent>
    </ModalBackground>
  );
}
