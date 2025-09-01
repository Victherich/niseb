import React from "react";
import styled from "styled-components";
import { Slide, Zoom, Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

// Define the new color scheme
const lightBackground = '#f9f9f9';
const lightText = '#333333';
const primaryGreen = '#008000'; // Darker green for contrast
const primaryOrange = '#ff6600'; // Darker orange for contrast
const cardBackground = '#ffffff';
const cardShadow = 'rgba(0, 0, 0, 0.1)';

// Styled Components
const AboutContainer = styled.section`
  padding: 6rem 2rem;
  background-color: ${lightBackground};
  color: ${lightText};
  font-family: 'Roboto', sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: ${primaryGreen};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: ${primaryOrange};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${cardBackground};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px ${cardShadow};
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.5rem;
    color: ${primaryOrange};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${lightText};
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: ${primaryOrange};
  color: ${cardBackground};
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 3rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8c4d; // Lighter orange on hover
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Zoom duration={2000} triggerOnce={false}>
        <SectionTitle>About NISEB</SectionTitle>
      </Zoom>
      <Slide direction="down" duration={3000} triggerOnce={false}>
        <IntroText>
          We are the Society for Experimental Biology of Nigeria (NISEB). We help create extraordinary connections between scientists and disciplines!
        </IntroText>
      </Slide>

      <ContentGrid>
        {/* Our History Section */}
        <Card>
          <Flip direction="horizontal" duration={2500} triggerOnce={false}>
            <h3>Our History</h3>
          </Flip>
          <Zoom duration={3500} triggerOnce={false}>
            <p>
              NISEB was formed (as Bioscience Study Group) at a meeting held on Monday, April 3, 1989, in the Department of Biochemistry, University of Ilorin. There were three founding members: Dr. C. O. Bewaji, Dr. O. B. Oloyede and Dr. M. A. Akanji. It was resolved at that meeting that there would be a monthly...
            </p>
          </Zoom>
        </Card>

        {/* Our Mission Section */}
        <Card>
          <Slide direction="left" duration={3000} triggerOnce={false}>
            <h3>Our Mission</h3>
          </Slide>
          <Flip direction="vertical" duration={2000} triggerOnce={false}>
            <p>
              To afford members of the Society opportunities for the interchange of opinions and for discussion of matters relating to research connected with the Life Sciences and to the teaching of the component subjects. To establish and maintain contacts with organizations with similar objectives as the Society’s including Federation of American...
            </p>
          </Flip>
        </Card>

        {/* Our Vision Section */}
        <Card>
          <Zoom duration={4000} triggerOnce={false}>
            <h3>Our Vision</h3>
          </Zoom>
          <Slide direction="up" duration={2500} triggerOnce={false}>
            <p>
              To be the leading professional body for experimental biology in Nigeria, fostering a culture of scientific excellence and innovation. We envision a future where biological research drives sustainable development and improves the quality of life for all Nigerians.
            </p>
          </Slide>
        </Card>
      </ContentGrid>
      
      <Slide diretion="left" duration={3000} triggerOnce={false}>
        <Button to="/aboutus">
          Learn More
        </Button>
      </Slide>
    </AboutContainer>
  );
};

export default About;