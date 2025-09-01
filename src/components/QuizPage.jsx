
import React from "react";
import styled from "styled-components";
import { Slide, Zoom, Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Placeholder images - Please replace with your actual images
import quizHero from "../Images/quiz.jpg";
import equipmentImage from "../Images/equipments.png";

// Define the color scheme for a stunning, clean look
const primaryGreen = '#008000';
const primaryOrange = '#ff6600';
// const lightGray = '#f8f8f8';
const lightGray = 'rgba(0,0,0,0.1)';
const darkText = '#333333';
const white = '#ffffff';

// Page-level container
const QuizPageContainer = styled.div`
  background-color: ${lightGray};
  color: ${darkText};
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden; // Prevents horizontal scroll from animations
`;

// Section wrapper
const Section = styled.section`
  padding: 6rem 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${primaryGreen};
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    width: 80px;
    height: 5px;
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

const SectionText = styled.p`
  font-size: 1rem;
  max-width: 900px;
  margin: 0 auto 3rem;
  line-height: 1.8;
  font-weight: 300;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentBlock = styled.div`
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: ${primaryOrange};
  color: ${white};
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  margin-top: 2rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(255, 102, 0, 0.4);

  &:hover {
    background-color: ${primaryGreen};
    box-shadow: 0 4px 20px rgba(0, 128, 0, 0.5);
    transform: translateY(-3px);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  text-align: left;
`;

const Card = styled.div`
  background-color: ${white};
  padding: 2.5rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: none; /* As per previous request */
  border: none;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${primaryOrange};
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${darkText};
  font-weight: 300;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: ${primaryGreen};
  margin-bottom: 1rem;
`;

const EquipmentList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;

  li {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
    position: relative;
    padding-left: 25px;

    &::before {
      content: '✅';
      position: absolute;
      left: 0;
    }
  }
`;

// Main Component
const QuizPage = () => {
  const secondaryContent = [
    {
      title: "Publications",
      icon: "📚",
      description: "Our publications advance the frontiers of biological science, providing a platform for groundbreaking research and scholarly discourse. Explore our peer-reviewed journals, insightful articles, and impactful studies that are shaping the future of biology.",
    },
    {
      title: "Peer-Review",
      icon: "🔬",
      description: "Upholding the highest standards of scientific integrity, our rigorous peer-review process ensures the credibility and excellence of all published work. We foster an environment of constructive feedback and scholarly collaboration, guaranteeing the quality of research shared within our community.",
    },
    {
      title: "Affiliations",
      icon: "🤝",
      description: "We are proud to partner with leading academic institutions, research centers, and global organizations. Our affiliations strengthen our network, enabling cross-disciplinary collaboration and expanding our reach to drive innovation on a global scale.",
    },
  ];

  const equipment = [
    "Safety apparatus", 
    "Microscope", 
    "Test tubes and test tube racks", 
    "Dissecting tool kit", 
    "Hot plate", 
    "Funnels", 
    "Electronic balance", 
    "Forceps", 
    "Beakers", 
    "Conical flasks", 
    "Graduated cylinders",
  ];

  return (
    <QuizPageContainer>
      {/* The Quiz Competition Section */}
      <Section>
        <Grid>
          <ContentBlock>
            <Zoom duration={2000} triggerOnce={false}>
              <SectionTitle>The Competition</SectionTitle>
            </Zoom>
            <Slide direction="down" duration={3000} triggerOnce={false}>
              <SectionText>
                The second edition of this prestigious competition, organized by the Society for Experimental Biology of Nigeria (NISEB), will feature participants from higher institutions across all six geopolitical zones in Nigeria.
              </SectionText>
            </Slide>
            <Flip duration={2500} delay={500} triggerOnce={false}>
              <SectionText>
                Two undergraduate students from 300-400L in Biochemistry, Microbiology, Cell Biology, Food Science, Zoology, Animal Science, Physiology, Plant/Crop Science, and all other related Experimental Biology departments will represent their institutions.
              </SectionText>
            </Flip>
            <Slide direction="right" duration={3500} delay={1000} triggerOnce={false}>
              <SectionText>
                The competition, scheduled for January 2025, will be held virtually, led by Dr. Omowumi Kayode and her team. The top six winners, representing three institutions, will proceed to the final on-site competition at Delta State University, Ozoro, during the 24th NISEB conference in April 2025. The first, second, and third place winners will be awarded prestigious trophies by distinguished dignitaries during the conference.
              </SectionText>
            </Slide>
            <Slide duration={3000} delay={1500} triggerOnce={false} direction="right">
              <Button to="/quizform">
                Quiz Application Form
              </Button>
            </Slide>
          </ContentBlock>
          <Zoom duration={4000} delay={200} triggerOnce={false}>
            <Image src={quizHero} alt="Students in a quiz competition" />
          </Zoom>
        </Grid>
      </Section>

      {/* Publications, Peer-Review, and Affiliations Section */}
      <Section style={{ backgroundColor: white }}>
        <Zoom duration={2000} triggerOnce={false}>
          <SectionTitle style={{marginBottom:"-100px"}}>Our Commitment</SectionTitle>
        </Zoom>
        <CardGrid>
          {secondaryContent.map((item, index) => (
            <Card key={index}>
              <Slide direction="up" duration={2500} delay={100} triggerOnce={false}>
                <Icon>{item.icon}</Icon>
                <CardTitle>{item.title}</CardTitle>
              </Slide>
              <Zoom duration={3000} delay={200} triggerOnce={false}>
                <CardText>{item.description}</CardText>
              </Zoom>
            </Card>
          ))}
        </CardGrid>
      </Section>

      {/* Best Equipment Section */}
      <Section>
        <Grid>
          <Zoom duration={4000} delay={200} triggerOnce={false}>
            <Image src={equipmentImage} alt="Best Equipment" />
          </Zoom>
          <ContentBlock>
            <Zoom duration={2000} triggerOnce={false}>
              <SectionTitle>Best Equipment</SectionTitle>
            </Zoom>
            <Slide direction="up" duration={3000} triggerOnce={false}>
              <SectionText>
                At NISEB, we ensure our members have access to a wide array of high-quality scientific apparatus and tools to facilitate groundbreaking research and hands-on learning. Our state-of-the-art labs are equipped with:
              </SectionText>
            </Slide>
            <Slide direction="left" duration={3500} delay={500} triggerOnce={false}>
              <EquipmentList>
                {equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </EquipmentList>
            </Slide>
          </ContentBlock>
        </Grid>
      </Section>
    </QuizPageContainer>
  );
};

export default QuizPage;
