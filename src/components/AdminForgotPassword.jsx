import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import BgImage from '../Images/equipments.png'
import { Context } from './Context';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

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
  color: white;
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
  background-color:green;
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

const Message = styled.p`
  margin-top: 1rem;
  color: ${({ success }) => (success ? 'green' : 'red')};
  text-align: center;
  font-size: 0.95rem;
`;

const AdminForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [buttonText, setButtonText]=useState("Send Reset Link")
  const {domain} =useContext(Context);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Show loading alert
    Swal.fire({
      title: 'Please wait...',
      text: 'Sending password reset link...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    try {
      const res = await fetch(`${domain}/admin_forgot_password.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
  
      Swal.close();
  
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: data.message || 'Reset link sent successfully Please check your email inbox or spam folder!',
        });
        setButtonText("Resend Reset Link");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
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
        <Title>Admin Forgot Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">{buttonText}</Button>

        </Form>
        <p onClick={()=>navigate("/adminlogin")} style={{color:"white", cursor:"pointer"}}>Back to Login</p>
        {message && <Message success={success}>{message}</Message>}
      </FormWrapper>
    </Container>
  );
};

export default AdminForgotPassword;

