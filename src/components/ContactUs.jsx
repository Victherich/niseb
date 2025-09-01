
import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import p1 from '../Images/p1.jpg'

// Styled Components for the page layout and elements
const PageContainer = styled.div`
  background-color: #f0fdf4; /* Very light green background */
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

// --- Hero Section for Contact Info ---
const HeroSection = styled.section`
  background: 
    linear-gradient(rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5)), 
    url(${p1});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;


const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContactInfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ContactCard = styled.div`
  background-color: #ffa500; /* Pure orange */
  color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width:300px;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media(max-width:320px){
    width:250px;
  }
`;

const ContactCardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ContactCardText = styled.p`
  margin: 0;
`;

// --- Contact Form Section ---
const FormSection = styled.section`
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #008000;
  border-bottom: 2px solid #ffa500;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #008000;
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #ffa500;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-height: 150px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #ffa500;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: #ffa500;
  color: #fff;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #ff8c00; /* Darker orange on hover */
  }
`;

const Message = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
  color: ${props => (props.success ? '#008000' : '#dc2626')};
`;

// --- FAQ Section ---
const FaqSection = styled.section`
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const FaqTitle = styled.h2`
  font-size: 2rem;
  color: #008000;
  border-bottom: 2px solid #ffa500;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;

const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #333;
`;

const FaqAnswer = styled.div`
  color: #555;
  padding-top: 0.5rem;
  max-height: ${props => (props.isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const faqs = [
  {
    question: "How do I know if my membership application has been accepted?",
    answer:
      "Once we accept your application, you receive an email confirmation from the NISEB team. We welcome you to NISEB Membership and provide your membership details (including your login details for the members’ area).",
  },
  {
    question: "How long does it take to process my membership application?",
    answer:
      "Membership will commence after payment by bank payment or transfer. If you apply for membership and we don't process your application before a deadline, email supports@nisebnigeria.org and be assured that your email will be responded to.",
  },
  {
    question: "When will my membership start / end?",
    answer:
      "Your membership begins on the day that you make your membership payment. Your expiry date can be found on your membership welcome email.",
  },
  {
    question: "I cannot register as a new member because my email address is already in use.",
    answer:
      "If your email is already in use, you already have a non-member account with us, which we created when you registered for one of our meetings or services. Please don’t create a new profile, but email supports@nisebnigeria.org and we will provide you with your login details. You can then log in and continue your application.",
  },
  {
    question:
      "I submitted my membership application but I need to amend/add some information to it. How can I do this?",
    answer:
      "Go to the members area on our website and log in. Click on edit your membership application and edit or add information to your application.",
  },
  {
    question: "I can’t log into my member profile as my username or password is not recognised. What can I do?",
    answer:
      "If you copy and paste your username and password from an email that we sent, be careful not to select any blank spaces before or after as these count as characters and so your login details will be incorrect. If you still have problems logging in, contact supports@nisebnigeria.org and we will help you.",
  },
  {
    question: "How do I apply for membership?",
    answer:
      "To apply to join the NISEB, you need to complete an application form and pay the membership fee.",
  },
  {
    question: "How much does membership cost?",
    answer: "Take a look at our annual membership fees.",
  },
];


const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setSubmissionMessage('Thank you for your message! We will get back to you shortly.');
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmissionMessage('');
      setIsSuccess(false);
    }, 5000);
  };

  const handleFaqClick = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PageContainer>
  {/* --- Hero Section with Contact Info --- */}
        <Fade duration={2000} triggerOnce={false}>
          <HeroSection>
            <HeroTitle>Get In Touch</HeroTitle>
            <ContactInfoGrid>
              <Slide direction="left" duration={1500} triggerOnce={false}>
                <ContactCard>
                  <FaMapMarkerAlt />
                  <ContactCardTitle>Address</ContactCardTitle>
                  <ContactCardText>Department of Biochemistry, University of Ilorin, Ilorin, Nigeria.</ContactCardText>
                </ContactCard>
              </Slide>
              <Fade duration={1500} delay={200} triggerOnce={false}>
                <ContactCard>
                  <FaPhone />
                  <ContactCardTitle>Phone Numbers</ContactCardTitle>
                  <ContactCardText>+2348036910988</ContactCardText>
                  <ContactCardText>+2348035065190</ContactCardText>
                </ContactCard>
              </Fade>
              <Slide direction="right" duration={1500} triggerOnce={false}>
                <ContactCard>
                  <FaEnvelope />
                  <ContactCardTitle>E-mail</ContactCardTitle>
                  <ContactCardText>supports@nisebnigeria.org</ContactCardText>
                  <ContactCardText>nisebpresident@gmail.com</ContactCardText>
                  <ContactCardText>nisebsec@gmail.com</ContactCardText>
                </ContactCard>
              </Slide>
            </ContactInfoGrid>
          </HeroSection>
        </Fade>


      <ContentWrapper>
      

        {/* --- Contact Form Section --- */}
        <Fade duration={1500} delay={500} triggerOnce={false}>
          <FormSection>
             <Slide direction="right" duration={1500} triggerOnce={false}>
<FormTitle>Send Us a Message</FormTitle>
             </Slide>
            
            
            <StyledForm onSubmit={handleSubmit}>
              <FormGroup>
 <Slide direction="right" duration={1500} triggerOnce={false}>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                </Slide>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              <FormGroup>
                 <Slide direction="right" duration={1500} triggerOnce={false}>
                <FormLabel htmlFor="email">Your E-mail</FormLabel>
                </Slide>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              <FormGroup>
 <Slide direction="right" duration={1500} triggerOnce={false}>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                </Slide>
                <FormInput 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              <FormGroup>

                 <Slide direction="right" duration={1500} triggerOnce={false}>
                <FormLabel htmlFor="message">Message</FormLabel>
                </Slide>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              <Fade duration={1500} delay={500} triggerOnce={false}>
              <SubmitButton type="submit">Send Message</SubmitButton>
              </Fade>
            </StyledForm>
            {submissionMessage && <Message success={isSuccess}>{submissionMessage}</Message>}
          </FormSection>
        </Fade>

        {/* --- FAQ Section --- */}
        <Fade duration={1500} delay={700} triggerOnce={false}>
          <FaqSection>
            <FaqTitle>Frequently Asked Questions</FaqTitle>
            {faqs.map((faq, index) => (
              <FaqItem key={index} onClick={() => handleFaqClick(index)}>
                <FaqQuestion>
                  {faq.question}
                  <span>{openFaq === index ? '▲' : '▼'}</span>
                </FaqQuestion>
                <FaqAnswer isOpen={openFaq === index}>
                  {faq.answer}
                </FaqAnswer>
              </FaqItem>
            ))}
          </FaqSection>
        </Fade>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ContactUsPage;