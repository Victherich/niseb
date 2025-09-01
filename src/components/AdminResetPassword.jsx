// StudentResetPassword.jsx
import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Context } from './Context';
import BgImage from '../Images/equipments.png'

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color:white;

  /* Background image */
  background: url(${BgImage}) center/cover no-repeat;

  /* Overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55); /* adjust opacity */
    z-index: 0;
  }

  /* Ensure children are above overlay */
  > * {
    position: relative;
    z-index: 1;
  }
`;


const FormWrapper = styled.div`
  padding: 2.5rem;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  // color: green;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    border-color: green;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: green;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: lightgreen;
  }
`;

const AdminResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
   const {domain} =useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match',
      });
      return;
    }

    Swal.fire({
      title: 'Please wait...',
      text: 'Resetting your password...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch(`${domain}/admin_reset_password.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: data.message || 'Password reset successfully!',
        }).then(() => {
          navigate('/adminlogin');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: data.message || 'Failed to reset password.',
        });
      }
    } catch (err) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
      });
    }
  };


  
  return (
    <Container>
      <FormWrapper>
        <Title>Reset Your Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="password"
            placeholder="New password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm new password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Reset Password</Button>
        </Form>
        <p onClick={() => navigate("/adminlogin")} style={{  cursor: "pointer" }}>Back to Login</p>
      </FormWrapper>
    </Container>
  );
};

export default AdminResetPassword;

