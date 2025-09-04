
import React from "react";
import styled from "styled-components";
import heroBg from "../Images/onf1.png"; // <-- replace with your background image

// ==== Styled Components ====
const PageWrapper = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  background: url(${heroBg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  &:after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 80, 0, 0.65); /* green overlay */
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 15px;
    color: #f5f5f5;
  }
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: green;
  text-align: center;
  text-transform: uppercase;
`;

const ThemeList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 30px;

  li {
    margin-bottom: 8px;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }

  th {
    background: green;
    color: white;
  }

  tr:nth-child(even) {
    background: #f9f9f9;
  }
`;

const ContactBox = styled.div`
  background: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

// ==== Component ====
const ConferencePage = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>BU-NISEB CONFERENCE - 2023</h1>
          <h2>Annual Scientific Conference and General Meeting</h2>
          <p>
            Theme: <b>Harnessing Diversity in Experimental Biology for Sustainable Development</b>
          </p>
        </HeroContent>
      </HeroSection>

      {/* Sub-themes */}
      <Section>
        <SectionTitle>Sub-Themes</SectionTitle>
        <ThemeList>
          <li>Translational Medicine</li>
          <li>Nutritional and Food Security</li>
          <li>Pharmacology and Toxicology</li>
          <li>Human Anatomy and Physiology</li>
          <li>Phytomedicine and Drug Discovery</li>
          <li>Sustainable Environment and National Development</li>
          <li>Current Trends in Biological System and Systematics</li>
          <li>Current Trends in Molecular Biology and Biotechnology</li>
          <li>Current Trends in Bioinformatics and Computational Biology</li>
        </ThemeList>
      </Section>

      {/* Abstract Submission */}
      <Section>
        <SectionTitle>Abstract Submission</SectionTitle>
        <Card>
          <p>
            Abstracts of not more than <b>250 words</b> should be submitted to any of the sub-themes via 
            <b> niseb.bu2023@gmail.com</b> on or before <b>April 30, 2023</b>.
          </p>
          <p>
            Each abstract should include: <i>title, authors name, institutional affiliation, email address, phone number and keywords</i>.
          </p>
          <p>Each accepted abstract attracts a fee of <b>₦2,000</b>.</p>
        </Card>
      </Section>

      {/* Date */}
      <Section>
        <SectionTitle>Conference Date</SectionTitle>
        <Card>
          <p><b>Monday August 7</b> to <b>Friday August 11, 2023</b></p>
        </Card>
      </Section>

      {/* Registration */}
      <Section>
        <SectionTitle>Conference Registration</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Early Bird (On or before 30th June, 2023)</th>
              <th>From 1st July, 2023</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Member</td>
              <td>₦25,000</td>
              <td>₦30,000</td>
            </tr>
            <tr>
              <td>Non-Member</td>
              <td>₦25,000</td>
              <td>₦35,000</td>
            </tr>
            <tr>
              <td>Student (Undergraduate)</td>
              <td>₦5,000</td>
              <td>₦5,000</td>
            </tr>
            <tr>
              <td>Student (Postgraduate)</td>
              <td>₦15,000</td>
              <td>₦20,000</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Bank Info */}
      <Section>
        <SectionTitle>Bank Account Information</SectionTitle>
        <Card>
          <p><b>Account Number:</b> 2300690358</p>
          <p><b>Account Name:</b> Babcock NISEB</p>
          <p><b>Bank:</b> UBA</p>
        </Card>
      </Section>

      {/* Contact */}
      <Section>
        <SectionTitle>For More Details</SectionTitle>
        <ContactBox>
          <p>📞 08038272670, 08063511132</p>
        </ContactBox>
      </Section>
    </PageWrapper>
  );
};

export default ConferencePage;





