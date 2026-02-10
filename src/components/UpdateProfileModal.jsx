
import React, { useState, useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Context } from "./Context";

// --- Styled Components (same as before) ---
const Overlay = styled.div`
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex; justify-content: center; align-items: center;
  z-index: 500;
`;

const ModalBox = styled.div`
  background: white; border-radius: 12px;
  padding: 2rem; max-width: 600px; width: 90%;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  max-height: 80vh; /* Add this to prevent overflow */
  overflow-y: auto; /* Add this to allow scrolling for many fields */
`;

const Title = styled.h2`
  font-size: 1.3rem; margin-bottom: 1rem; color: #008000;
`;

const Input = styled.input`
  width: 100%; padding: 0.6rem;
  border: 1px solid #ddd; border-radius: 6px;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  width: 100%; padding: 0.6rem;
  border: 1px solid #ddd; border-radius: 6px;
  margin-bottom: 1rem;
`;

const ButtonRow = styled.div`
  display: flex; justify-content: flex-end; gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background: ${p => p.bg || "#008000"};
  color: white; border: none; border-radius: 6px;
  padding: 0.6rem 1.2rem; font-weight: bold;
  cursor: pointer; &:hover { opacity: 0.9; }
`;

// --- Updated Component ---
const UpdateProfileModal = ({ user, onClose, onUpdated }) => {

  console.log(user);
  const { domain } = useContext(Context);
  const [formData, setFormData] = useState({
    membershipCategory: user.membershipCategory || "",
    title: user.title || "",
    surname: user.surname || "",
    othername: user.othername || "",
    gender: user.gender || "",
    dob: user.dob || "",
    qualifications: user.qualifications || "",
    occupation: user.occupation || "",
    address: user.address || "",
    mobile: user.mobile || "",
    city: user.city || "",
    state: user.state || "",
    country: user.country || "",
    mailbag: user.mailbag || "",
    postcode: user.postcode || "",
    email: user.email || "", // Keep email disabled as it's often a unique identifier
    institution: user.institution || "",
    department: user.department || "",
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
        body: JSON.stringify({ id: user.id, ...formData }),
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
        <Title style={{color:'red', fontSize:"0.8rem"}}>NB: DOB must be entered in this format (yyyy-mm-dd)</Title>
        {/* Render all input fields dynamically or individually */}
        {Object.keys(formData).map((key) => {
          // Exclude certain fields like `id` or `created_at` from form
          if ( key === 'id' || key === 'created_at' || key === 'password' || key === 'membership_start' || key === 'membership_expiry'|| key === 'membershipCategory'
            // || key === 'mailbag' || key === 'postcode'
          ) {
            return null; // Don't render these fields
          }

          // Use a text area for fields like 'qualifications' and 'address'
          const isTextarea = ['qualifications', 'address'].includes(key);

          // Return the appropriate input type
          return isTextarea ? (
            <textarea
              key={key}
              name={key}
              placeholder={key.replace(/([A-Z])/g, ' $1').trim().toLowerCase()}
              value={formData[key]}
              onChange={handleChange}
              rows="4"
              style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', marginBottom: '1rem' }}
            />
          ) : (
            <Input
              key={key}
              type={key.includes('date') ? 'date' : 'text'}
              name={key}
              placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
              value={formData[key]}
              onChange={handleChange}
            />
          );
        })}

        <ButtonRow>
          <Button bg="gray" onClick={onClose}>Cancel</Button>
          <Button bg="#008000" onClick={handleSubmit}>Save Changes</Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
};

export default UpdateProfileModal;
