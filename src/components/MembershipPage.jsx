import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import membershipBg from "../Images/membershipbg.jpg"; // replace with your image

const PageWrapper = styled.div`
  font-family: Inter, ui-sans-serif, system-ui;
  background: #fffefc;
  color: #1a1a1a;
  min-height: 100vh;
`;

const Hero = styled.div`
  position: relative;
  background: url(${membershipBg}) center/cover no-repeat;
  padding: 120px 20px;
  text-align: center;
  color: white;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55); /* dark overlay */
    z-index: 0;
  }

  h1, p {
    position: relative;
    z-index: 3;
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

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #f97316;
    margin-bottom: 20px;
    text-align: center;
  }

  p, li {
    font-size: 1rem;
    line-height: 1.7;
    color: #374151;
  }

  ul, ol {
    margin-top: 10px;
    margin-left: 20px;
  }
`;

const FeesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.05);

  th {
    background: #16a34a; /* green */
    color: white;
    text-align: left;
    padding: 14px;
    font-size: 1rem;
  }

  td {
    padding: 12px 14px;
    border-bottom: 1px solid #e5e7eb;
  }

  tr:nth-child(even) {
    background: #f9fafb;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin: 15px 10px 0 0;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  background: ${({ secondary }) => (secondary ? "#16a34a" : "#f97316")};
  color: white;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ secondary }) => (secondary ? "#15803d" : "#ea580c")};
  }
`;

export default function MembershipPage() {
  return (
    <PageWrapper>
      <Hero>
        <Fade duration={1000} cascade triggerOnce={false}>
          <h1>Membership</h1>
          <p>Join the Society for Experimental Biology of Nigeria</p>
        </Fade>
      </Hero>

      <Section>
        <Fade duration={1000} cascade triggerOnce={false}>
          <h2>Membership Categories</h2>
          <p>NISEB have three (3) categories of membership:</p>
          <ul>
            <li>Student Membership</li>
            <li>Full Membership</li>
            <li>Fellow Membership</li>
          </ul>
        </Fade>
      </Section>

      <Section>
        <Fade duration={1000} cascade triggerOnce={false}>
          <h2>Membership Fees</h2>
          <p><b>ONE TIME MEMBERSHIP FEES (NEW MEMBER)</b></p>
          <FeesTable>
            <thead>
              <tr>
                <th>Membership Status</th>
                <th>One (1) Year</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Student Membership</td><td>N5,000</td></tr>
              <tr><td>Full Membership</td><td>N10,000</td></tr>
              <tr><td>Fellows</td><td>N20,000</td></tr>
              <tr><td>Corporate Bodies Membership</td><td>N50,000</td></tr>
              <tr><td>Foreign Membership (Full Member)</td><td>$50 (USD)</td></tr>
              <tr><td>Foreign Membership (Graduate Student)</td><td>$20 (USD)</td></tr>
              <tr><td>Foreign Membership (Undergraduate)</td><td>$10 (USD)</td></tr>
            </tbody>
          </FeesTable>
          <p><b>Note:</b> Membership fees are non-refundable.</p>
        </Fade>
      </Section>

      <Section>
        <Fade duration={1000} cascade triggerOnce={false}>
          <h2>Application Procedure</h2>
          <ol>
            <li>Click the "Application Form" link below and fill the form.</li>
            <li>After successful application, make a bank payment to the account below:</li>
          </ol>
          <p><b>Account Details</b></p>
          <p>
            Society for Experimental Biology of Nigeria (BOT)<br />
            United Bank for Africa<br />
            <b>2199353266</b>
          </p>
          <p>Send your evidence of payment to:</p>
          <ul>
            <li>Professor M.T. Yakub (BOT) – 08037544437</li>
            <li>Dr. Adetitun – 08036910988 / adetitun.do@gmail.com</li>
            <li>Dr. Kayode (NEC) – 08037802662</li>
          </ul>
          <p>Verification usually takes 0 - 48hrs. After verification, a unique number will be sent to your email (your pass code).</p>
        </Fade>
      </Section>

      <Section>
        <Fade duration={1000} cascade triggerOnce={false}>
          <h2>Benefits of Membership</h2>
          <p><b>Aim:</b> To afford members opportunities for interchange of opinions and discussions on Life Sciences research and teaching.</p>
          <p><b>Objectives include:</b></p>
          <ul>
            <li>Organizing scientific meetings (seminars, webinars, symposia, conferences).</li>
            <li>Fostering collaborative research networks.</li>
            <li>Capacity building workshops.</li>
            <li>Identifying funding opportunities for postgraduate and postdoctoral training.</li>
            <li>Maintaining contacts with related organizations worldwide (FASEB, SEB, EB, RSB, SEBM, etc).</li>
          </ul>
        </Fade>
      </Section>

      <Section style={{ textAlign: "center" }}>
        <Fade duration={1000} cascade triggerOnce={false}>
          <h2>Become a NISEB Member Today</h2>
          <CTAButton href="/applicationform">Application Form</CTAButton>
          <CTAButton secondary href="/userlogin">Membership Area</CTAButton>
        </Fade>
      </Section>
    </PageWrapper>
  );
}
