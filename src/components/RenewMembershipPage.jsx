
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import membershipBg from "../Images/renewmembership.jpg"; // reuse same bg

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
    background: rgba(0, 0, 0, 0.55);
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
    color: #f97316;
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

   @media(max-width:428px){
overflow-x: scroll;
width:300px;
  }

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

  @media(max-width:428px){
overflow-x: scroll;
width:300px;
  }

  th {
    background: #16a34a;
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

export default function RenewMembershipPage() {
  return (
    <PageWrapper>
      <Hero>
        <Fade duration={1000} cascade triggerOnce>
          <h1>Renew Your Membership</h1>
          <p>Keep your membership active with NISEB</p>
        </Fade>
      </Hero>

      <Section>
        <Fade duration={1000} cascade triggerOnce>
          <h2>Membership Annual Due</h2>
          <FeesTable>
            <thead>
              <tr>
                <th>Membership Status</th>
                <th>One (1) Year</th>
                <th>Three (3) Years</th>
                <th>Five (5) Years</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Student Member</td><td>N5,000</td><td>N14,500</td><td>N23,000</td></tr>
              <tr><td>Full Member</td><td>N10,000</td><td>N29,500</td><td>N46,000</td></tr>
              <tr><td>Fellows</td><td>N20,000</td><td>N59,000</td><td>N95,000</td></tr>
              <tr><td>Foreign Membership (Full Member)</td><td>$50 (USD)</td><td>$148</td><td>$245</td></tr>
              <tr><td>Foreign Membership (Graduate)</td><td>$20 (USD)</td><td>$58</td><td>$95</td></tr>
              <tr><td>Foreign Membership (Undergraduate)</td><td>$10 (USD)</td><td>$29</td><td>$46</td></tr>
            </tbody>
          </FeesTable>
          <p><b>Note:</b> The annual due fee is non-refundable.</p>
        </Fade>
      </Section>

      <Section>
        <Fade duration={1000} cascade triggerOnce>
          <h2>Bank Account Details</h2>
          <p><b>SOCIETY FOR EXPERIMENTAL BIOLOGY OF NIGERIA</b><br />
          United Bank for Africa (UBA)<br />
          Acct.: <b>2213930226</b></p>
          <p>
            After payment, Teller or Bank transfer transactions should be sent to 
            <b> 08037802662 (WhatsApp)</b>, Dr. Omowumi Kayode for issuance of receipts.
          </p>
        </Fade>
      </Section>

      <Section>
        <Fade duration={1000} cascade triggerOnce>
          <h2>Important Reminders</h2>
          <ul>
            <li>Members who have not paid their annual dues backlog from 2020 till date are reminded to pay up.</li>
            <li>NISEB Financial Year started in January 2023.</li>
            <li>Members are encouraged to pay their annual dues as at when due.</li>
          </ul>
        </Fade>
      </Section>

      <Section>
        <Fade duration={1000} cascade triggerOnce>
          <h2>Annual Dues Breakdown</h2>
          <ul>
            <li>Fellows of NISEB: <b>N20,000</b></li>
            <li>Full Members: <b>N10,000</b></li>
            <li>Certified Students: <b>N5,000</b></li>
            <li>Foreign Members: <b>$10 (USD)</b></li>
          </ul>
        </Fade>
      </Section>

      <Section style={{ textAlign: "center" }}>
        <Fade duration={1000} cascade triggerOnce>
          <h2>Become a NISEB Member Today</h2>
          <CTAButton href="/applicationform">Application Form</CTAButton>
          <CTAButton secondary href="/userlogin">Membership Area</CTAButton>
        </Fade>
      </Section>
    </PageWrapper>
  );
}
