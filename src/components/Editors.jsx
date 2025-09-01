import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaUserCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

// Import local or placeholder images
import HeroImage from '../Images/p2.jpg'; // Replace with a real image of scientists/editors
import JournalImage from '../Images/nisebLogo.png'; // A placeholder image for a journal cover

// --- Styled Components for the full page layout ---
const PageContainer = styled.div`
  background-color: #f0fdf4; /* A very light green for the background */
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

// --- Hero Section Styled Components ---
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;


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
  filter: brightness(0.6); /* Darken the background image */
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 165, 0, 0.4); /* Pure orange overlay with transparency */
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  color: #f0fdf4; /* Light green text */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// --- Editors Section Styled Components ---
const EditorsSection = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #008000; /* Pure green */
  border-bottom: 2px solid #ffa500; /* Pure orange underline */
  padding-bottom: 0.5rem;
  display: inline-block;
  margin-bottom: 2rem;
`;

const SectionDescription = styled.p`
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const EditorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;


  @media(max-width:320px){
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const EditorCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-align: center;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const JournalImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0fdf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 2px solid #008000;
  overflow: hidden;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const EditorName = styled.h3`
  font-size: 1.5rem;
  color: #ffa500;
  margin-bottom: 0.5rem;
`;

const JournalTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  color: #008000;
  margin-bottom: 0.5rem;
`;

const EditorInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  color: #555;
`;

const SocialLink = styled.a`
  color: #008000;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffa500;
  }
`;

// Data for the editors
const editors = [
  {
    journal: 'BIOKEMISTRI',
    issn: 'ISSN 0795-8080',
    name: 'Dr. Kudirat Oluwatosin Shittu',
    phone: '+2348033883658',
    email: 'biokemistri.journal@gmail.com',
  },
  {
    journal: 'AFRICAN SCIENTIST',
    issn: 'ISSN 1595-4881',
    name: 'Prof. Daniel Olorunfemi',
    phone: '+234 802 337 2455',
    email: 'nisebpublications@gmail.com',
  },
  {
    journal: 'BIOSCIENCE RESEARCH JOURNAL',
    issn: 'ISSN 0795-8072',
    name: 'Prof. M. A. Belewu',
    phone: '+2348035817941',
    email: 'milkyinka@yahoo.com',
    alternateEmail: 'mabel@unilorin.edu.ng',
  },
  {
    journal: 'NISEB JOURNAL',
    issn: 'ISSN 1595-6938',
    name: 'Prof. C. C. Osubor',
    phone: '+2348023697783',
    email: 'ccosubor@uniben.edu.ng',
  },
  {
    journal: 'African Journal of General Agriculture',
    name: 'Prof. O. O. Fafioye',
    phone: '+234 803 717 2255',
    email: 'fafioye.oyebamiji@oouagoiwoye.edu.ng',
  },
  {
    name: 'Dr. Petu-Ibikunle',
    phone: '+2347032693482',
    email: 'pibikunle@noun.edu.ng',
    alternateEmail: 'kunlepetu@gmail.com',
  },
];

const EditorsPage = () => {
  return (
    <PageContainer>
      {/* --- Hero Section --- */}
      <HeroContainer>
        <BackgroundImage />
        <Overlay />
        <HeroContent>
          {/* Apply Fade to the Title */}
          <Slide direction='right' duration={2000} triggerOnce={false}>
            <HeroTitle>Meet Our Grand Editors</HeroTitle>
          </Slide>
          {/* Apply Slide to the Subtitle */}
          <Slide direction="left" duration={1500} delay={500} triggerOnce={false}>
            <HeroSubtitle>
              Leading the publication of groundbreaking research in the Life Sciences.
            </HeroSubtitle>
          </Slide>
        </HeroContent>
      </HeroContainer>

      <ContentWrapper>
        {/* --- Editors Grid Section --- */}
        <EditorsSection>
          {/* Apply Fade to the Section Title */}
          <Fade duration={1500} triggerOnce={false}>
            <SectionTitle>Our Editorial Board</SectionTitle>
          </Fade>
          <Fade duration={1500} delay={200} triggerOnce={false}>
            <SectionDescription>
              The success of our publications is driven by a distinguished team of editors who ensure the highest standards of quality and integrity.
            </SectionDescription>
          </Fade>
          <EditorsGrid>
            {editors.map((editor, index) => (
              // The main container doesn't have a direct animation,
              // but its children will be animated.
              <EditorCard key={index}>
                <Slide direction="up" duration={1000} delay={index * 150} triggerOnce={false}>
                  <JournalImageWrapper>
                    <img src={JournalImage} alt="Journal Cover" />
                  </JournalImageWrapper>
                </Slide>
                {editor.journal && (
                  <Fade duration={1000} delay={index * 150 + 200} triggerOnce={false}>
                    <JournalTitle>{editor.journal}</JournalTitle>
                  </Fade>
                )}
                {editor.issn && (
                  <Fade duration={1000} delay={index * 150 + 400} triggerOnce={false}>
                    <p>({editor.issn})</p>
                  </Fade>
                )}
                <Fade duration={1000} delay={index * 150 + 600} triggerOnce={false}>
                  <EditorName>{editor.name}</EditorName>
                </Fade>
                {editor.phone && (
                  <Fade duration={1000} delay={index * 150 + 800} triggerOnce={false}>
                    <EditorInfo>
                      <FaPhone /> {editor.phone}
                    </EditorInfo>
                  </Fade>
                )}
                {editor.email && (
                  <Fade duration={1000} delay={index * 150 + 1000} triggerOnce={false}>
                    <EditorInfo>
                      <FaEnvelope /> <SocialLink href={`mailto:${editor.email}`}>{editor.email}</SocialLink>
                    </EditorInfo>
                  </Fade>
                )}
                {editor.alternateEmail && (
                  <Fade duration={1000} delay={index * 150 + 1200} triggerOnce={false}>
                    <EditorInfo>
                      <FaEnvelope /> <SocialLink href={`mailto:${editor.alternateEmail}`}>{editor.alternateEmail}</SocialLink>
                    </EditorInfo>
                  </Fade>
                )}
              </EditorCard>
            ))}
          </EditorsGrid>
        </EditorsSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default EditorsPage;