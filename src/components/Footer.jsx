
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// Define the color scheme
const primaryGreen = '#00ff00';
const primaryOrange = '#ff9900';
const darkBackground = '#1a1a1a';
const lightText = '#cccccc';

const FooterContainer = styled.footer`
  background-color: ${darkBackground};
  color: ${lightText};
  padding: 4rem 2rem;
  font-family: 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h4 {
    color: ${primaryGreen};
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    position: relative;

    &::after {
      content: '';
      width: 50px;
      height: 3px;
      background-color: ${primaryOrange};
      position: absolute;
      bottom: -8px;
      left: 0;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: ${lightText};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${primaryGreen};
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 0.95rem;
//   line-height: 1.6;
  p {
    margin: 0 0 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    color: ${lightText};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${primaryGreen};
    }
  }
`;

const NewsletterForm = styled.div`
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${lightText};
    background-color: transparent;
    color: #fff;
    border-radius: 5px;
    margin-top: 1rem;
  }

  button {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${primaryOrange};
    color: ${darkBackground};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ffb84d; // Lighter orange on hover
    }
  }
`;

const CopyrightBar = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        {/* Contact Section */}
        <FooterSection>
          <h4>Secretariat</h4>
          <ContactInfo>
            <p>Department of Biochemistry</p>
            <p>University of Ilorin,</p>
            <p>Ilorin, Nigeria. 240003</p>
            <p>TEL: +2348036910988</p>
            <p>Email: <a href="mailto:info@nisebnigeria.com">info@nisebnigeria.com</a></p>
          </ContactInfo>
          <SocialIcons>
            <a href="https://web.facebook.com/groups/1840033292958200?_rdc=1&_rdr#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://x.com/NISEBpro" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/society-for-experimental-biology-of-nigeria-niseb-09b469249/" aria-label="LinkedIn"><FaLinkedinIn /></a>
            {/* <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a> */}
          </SocialIcons>
        </FooterSection>

        {/* NISEB Links Section */}
        <FooterSection>
          <h4>NISEB</h4>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/bot">Board of Trustees (BOT)</a></li>
            <li><a href="/ne">National Executive (NEC)</a></li>
            <li><a href="/bulletin">Bulletin</a></li>
            <li><a href="/fellow">Fellow</a></li>
          </ul>
        </FooterSection>

        {/* Support Links Section */}
        <FooterSection>
          <h4>Support</h4>
          <ul>
            <li><a href="/contactus">Help & Contact Us / FAQ</a></li>
            {/* <li><a href="/faq">FAQ</a></li> */}
            <li><a href="/termsandconditions">Terms & Conditions</a></li>
          </ul>
        </FooterSection>

        {/* Newsletter Section */}
        <FooterSection>
          <h4>Stay Up to Date</h4>
          <p>Subscribe to our mailing list to receive updates on news, special offers, and other information.</p>
          <NewsletterForm>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </NewsletterForm>
        </FooterSection>
      </FooterGrid>

      {/* Copyright Bar */}
      <CopyrightBar>
        <p>Copyright ©2025 NISEB. All Rights Reserved</p>
      </CopyrightBar>
    </FooterContainer>
  );
};

export default Footer;