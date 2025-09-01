
import React from "react";
import styled from "styled-components";
import heroBg from "../Images/terms.jpg"; // replace with your background image
import termsPDF from "../Images/Draft NISEB Constitution Final Copy-1.pdf"; // place your PDF inside src/docs/terms.pdf

/* Wrapper */
const PageWrapper = styled.div`
  font-family: Inter, ui-sans-serif, system-ui;
  background: #fffefc;
  color: #1a1a1a;
  min-height: 100vh;
`;

/* Hero Section */
const Hero = styled.div`
  position: relative;
  background: url(${heroBg}) center/cover no-repeat;
  padding: 120px 20px;
  text-align: center;
  color: white;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55); /* overlay */
    z-index: 0;
  }

  h1, p {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: #f97316; /* orange */
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 1.3rem;
    color: #fefefe;
  }
`;

/* Section */
const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #374151;
  }
`;

/* Button */
const DownloadButton = styled.a`
  display: inline-block;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  background: #f97316;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #ea580c;
    transform: translateY(-2px);
  }
`;

export default function TermsPage() {
  return (
    <PageWrapper>
      <Hero>
        <h1>Terms and Conditions</h1>
        <p>Read our terms and conditions carefully before proceeding.</p>
      </Hero>

      <Section>
        <p>
          Click the button below to download and view our official Terms and Conditions.
        </p>
        <DownloadButton href={termsPDF} target="_blank" rel="noopener noreferrer">
          📄 Download Terms & Conditions
        </DownloadButton>
      </Section>
    </PageWrapper>
  );
}
