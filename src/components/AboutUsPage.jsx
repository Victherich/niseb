import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';

// Import local or placeholder images
import HeroImage from '../Images/ab1.jpg'; // Replace with your hero image path
import FoundersImage from '../Images/ab2.jpg'; // Replace with a real image of founders
import CollaborationImage from '../Images/ab3.jpg'; // Replace with a real image of collaboration
import WorkshopImage from '../Images/ab4.jpg'; // Replace with a real image of a workshop

// --- Styled Components for the full page layout ---
const PageContainer = styled.div`
  background-color: #f0fdf4; /* A very light green for the background */
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media(max-width:420px){
    padding:4rem 1rem;
  }
`;

// --- Hero Section Styled Components ---
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
  padding-top:50px;

   @media (max-width: 428px) {
    height: 100vh;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.7); /* Darken the background image for readability */
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 0, 0.4); /* Pure green overlay with transparency */
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adds a nice shadow for contrast */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// --- Main Content Styled Components ---
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SectionContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #008000; /* Pure green */
  border-bottom: 2px solid #ffa500; /* Pure orange underline */
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  
  &::before {
    content: '🌱'; /* Leaf emoji for a nice touch */
    position: absolute;
    left: 0;
    color: #008000; /* Green */
  }
`;

const Emphasis = styled.span`
  color: #ffa500; /* Pure orange for emphasis */
  font-weight: bold;
`;

// --- About Us Page Component ---
const AboutUsPage = () => {
  return (
    <PageContainer>
      {/* --- Hero Section --- */}
      <HeroContainer>
        <BackgroundImage />
        <Overlay />
        <HeroContent>
          <Slide duration={2000} triggerOnce={false} direction='left'>
            <HeroTitle>
              Discover More About NISEB
            </HeroTitle>
          </Slide>
          <Slide direction="right" duration={1500} delay={500} triggerOnce={false}>
            <HeroSubtitle>
              A community of researchers and innovators dedicated to advancing scientific discovery and nurturing the next generation of scientists.
            </HeroSubtitle>
          </Slide>
        </HeroContent>
      </HeroContainer>

      <ContentWrapper>
        {/* --- Our History Section --- */}
        <Section>
          <Slide direction="left" duration={1500} triggerOnce={false}>
            <ImageContainer>
              <StyledImage src={FoundersImage} alt="Image of NISEB founders" />
            </ImageContainer>
          </Slide>
          <Slide direction="right" duration={1500} triggerOnce={false}>
            <SectionContent>
              <SectionTitle>Our History</SectionTitle>
              <p>
                The **Society for Experimental Biology of Nigeria (NISEB)** was formed as the **Bioscience Study Group** at a meeting on Monday, April 3, 1989, in the Department of Biochemistry, University of Ilorin. It was founded by three members: Dr. C. O. Bewaji, Dr. O. B. Oloyede, and Dr. M. A. Akanji.
              </p>
              <p>
                The group initially met on a monthly basis, then at two-week intervals to prepare for the publication of **Bioscience Research Communications**. We expanded on June 5, 1989, with the addition of Dr. F. A. Oladele, Dr. T. S. Emudianughe, and Dr. A. O. Olukoga, and grew to 19 members by December 12, 1994.
              </p>
              <p>
                Our transformation into NISEB occurred on June 6, 2000, as a first step towards becoming a truly national body. Professor Clement Bewaji became the first President, a position later ratified at the first biennial meeting held in Ilorin in September 2000.
              </p>
              <p>
                From our inception, NISEB has been designed to be a "six-storey building, each floor representing 1,000 members." We believe the technological development of a nation rests in the hands of its scientists and their societies, and the strength of these societies will determine Nigeria's technological future.
              </p>
            </SectionContent>
          </Slide>
        </Section>
        
        {/* --- Aim Section --- */}
        <Section>
          <Slide direction="right" duration={1500} triggerOnce={false}>
            <SectionContent>
              <SectionTitle>Our Aim</SectionTitle>
              <p>
                To provide members with opportunities for the interchange of opinions and the discussion of matters related to research in the Life Sciences and the teaching of their component subjects.
              </p>
            </SectionContent>
          </Slide>
          <Slide direction="left" duration={1500} triggerOnce={false}>
            <ImageContainer>
              <StyledImage src={CollaborationImage} alt="Image of scientists collaborating" />
            </ImageContainer>
          </Slide>
        </Section>

        {/* --- Objectives Section --- */}
        <Section>
          <Slide direction="left" duration={1500} triggerOnce={false}>
            <ImageContainer>
              <StyledImage src={WorkshopImage} alt="Image of a scientist mentoring students" />
            </ImageContainer>
          </Slide>
          <Slide direction="right" duration={1500} triggerOnce={false}>
            <SectionContent>
              <SectionTitle>Our Objectives</SectionTitle>
              <List>
                <ListItem>
                  <Emphasis>Scientific Meetings:</Emphasis> Organize seminars, webinars, symposia, and conferences to foster collaborative research and share knowledge.
                </ListItem>
                <ListItem>
                  <Emphasis>Capacity Building:</Emphasis> Encourage growth in various Life Sciences disciplines by organizing workshops and identifying funding opportunities for postgraduate and postdoctoral training.
                </ListItem>
                <ListItem>
                  <Emphasis>International Contacts:</Emphasis> Establish and maintain relationships with similar international organizations like FASEB, SEB, and RSB to promote global scientific exchange.
                </ListItem>
                <ListItem>
                  <Emphasis>Support & Infrastructure:</Emphasis> Acquire and maintain properties and assets necessary for the promotion of our objectives.
                </ListItem>
                <ListItem>
                  <Emphasis>Charitable Undertakings:</Emphasis> Execute charitable trusts and support other charitable associations that align with our mission.
                </ListItem>
                <ListItem>
                  <Emphasis>Financial Management:</Emphasis> Manage and invest society funds to ensure the long-term sustainability and growth of our programs.
                </ListItem>
                <ListItem>
                  <Emphasis>Holistic Support:</Emphasis> Establish pension and superannuation funds, and provide gratuities to support our employees.
                </ListItem>
                <ListItem>
                  <Emphasis>Incidental Acts:</Emphasis> Do all things incidental or necessary to achieve our stated objectives.
                </ListItem>
              </List>
            </SectionContent>
          </Slide>
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AboutUsPage;