
import React, { useState, useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Context } from "./Context";

/* --- Styles --- */
const Overlay = styled.div`
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white; border-radius: 12px;
  padding: 2rem; max-width: 600px; width: 90%;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
`;

const Title = styled.h2`
  font-size: 1.3rem; margin-bottom: 1rem; color: #008000;
`;

const Input = styled.input`
  width: 100%; padding: 0.6rem;
  border: 1px solid #ddd; border-radius: 6px;
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

/* --- Component --- */
const UpdateProfileModal = ({ user, onClose, onUpdated }) => {
  const { domain } = useContext(Context);
  const [formData, setFormData] = useState({
    surname: user.surname || "",
    othername: user.othername || "",
    email: user.email || "",
    mobile: user.mobile || "",
    address: user?.address,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    Swal.fire({ title: "Updating...", allowOutsideClick: false });
    Swal.showLoading();

    try {
      const res = await fetch(`${domain}/update_profile.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id, ...formData })
      });
      const data = await res.json();

      if (data.success) {
        Swal.fire("Success", "Profile updated successfully!", "success");
        onUpdated(formData);
        onClose();
      } else {
        Swal.fire("Error", data.error || "Failed to update profile", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Network error: " + err.message, "error");
    }
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>Update Profile</Title>

        <Input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="othername"
          placeholder="Other Name"
          value={formData.othername}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          disabled
        />
        <Input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <ButtonRow>
          <Button bg="gray" onClick={onClose}>Cancel</Button>
          <Button bg="#008000" onClick={handleSubmit}>Save Changes</Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
};

export default UpdateProfileModal;
