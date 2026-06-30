import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

// --- Image Imports (1 to 14) ---
import cc1 from '../Images/cc1.jpeg';
import cc2 from '../Images/cc2.jpeg';
import cc3 from '../Images/cc3.jpeg';
import cc4 from '../Images/cc4.jpeg';
import cc5 from '../Images/cc5.jpeg';
import cc6 from '../Images/cc6.jpeg';
import cc7 from '../Images/cc7.jpeg';
import cc8 from '../Images/cc8.jpeg';
import cc9 from '../Images/cc9.jpeg';
import cc10 from '../Images/cc10.jpeg';
import cc11 from '../Images/cc11.jpeg';
import cc12 from '../Images/cc12.jpeg';
import cc13 from '../Images/cc13.jpeg';
import cc14 from '../Images/cc14.jpeg';

// --- Theme Colors ---
const COLORS = {
  primaryGreen: '#0A5C36',
  accentOrange: '#E67E22',
  lightBg: '#F9FBF9',
  white: '#FFFFFF',
  textDark: '#2C3E50',
};

// --- Styled Components ---
const GallerySection = styled.section`
  padding: 60px 20px;
  background-color: ${COLORS.lightBg};
  max-width: 1200px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
`;

const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 45px;
`;

const Badge = styled.span`
  background-color: rgba(10, 92, 54, 0.1);
  color: ${COLORS.primaryGreen};
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(10, 92, 54, 0.2);
`;

const Title = styled.h2`
  color: ${COLORS.primaryGreen};
  font-size: 2.5rem;
  margin: 15px 0 10px 0;
  font-weight: 700;
  
  span {
    color: ${COLORS.accentOrange};
  }
`;

const Subtitle = styled.p`
  color: ${COLORS.textDark};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 240px;
  gap: 20px;
  grid-auto-flow: dense;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  background-color: ${COLORS.white};
  border-bottom: 4px solid transparent;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  &.span-2w {
    @media (min-width: 768px) {
      grid-column: span 2;
    }
  }

  &:hover {
    transform: translateY(-5px);
    border-bottom-color: ${COLORS.accentOrange};
    box-shadow: 0 12px 24px rgba(10, 92, 54, 0.15);
    
    img {
      transform: scale(1.06);
    }
    
    .overlay {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top, 
    rgba(10, 92, 54, 0.85) 0%, 
    rgba(0, 0, 0, 0.2) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const OverlayText = styled.p`
  color: ${COLORS.white};
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

// --- Component Definition ---
const ConferenceGallery = () => {
  // Mapping the imported images into a structured array
  const conferenceImages = [
    { id: 1, src: cc1, alt: "NISEB 2026 Conference" },
    { id: 2, src: cc2, alt: "NISEB 2026 Conference" },
    { id: 3, src: cc3, alt: "NISEB 2026 Conference" },
    { id: 4, src: cc4, alt:"NISEB 2026 Conference"  },
    { id: 5, src: cc5, alt: "NISEB 2026 Conference" },
    { id: 6, src: cc6, alt: "NISEB 2026 Conference" },
    { id: 7, src: cc7, alt: "NISEB 2026 Conference" },
    { id: 8, src: cc8, alt:"NISEB 2026 Conference" },
    { id: 9, src: cc9, alt: "NISEB 2026 Conference" },
    { id: 10, src: cc10, alt: "NISEB 2026 Conference" },
    { id: 11, src: cc11, alt: "NISEB 2026 Conference" },
    { id: 12, src: cc12, alt: "NISEB 2026 Conference"},
    { id: 13, src: cc13, alt: "NISEB 2026 Conference" },
    { id: 14, src: cc14, alt: "NISEB 2026 Conference" },
  ];

  return (
    <GallerySection>
      <HeaderArea>
        <Fade triggerOnce direction="down">
          <Badge>Event Gallery</Badge>
          <Title>NISEB <span>2026</span> Conference</Title>
          <Subtitle>
            Advancing knowledge, fostering innovation, and building a sustainable future for biological sciences.
          </Subtitle>
        </Fade>
      </HeaderArea>

      <Grid>
        <Fade triggerOnce cascade damping={0.06} direction="up">
          {conferenceImages.map((img, idx) => {
            // Distinct column spans to break grid monotony beautifully
            const isWide = idx === 0 || idx === 5 || idx === 10;
            
            return (
              <Card key={img.id} className={isWide ? 'span-2w' : ''}>
                <Image src={img.src} alt={img.alt} loading="lazy" />
                <Overlay className="overlay">
                  <OverlayText>{img.alt}</OverlayText>
                </Overlay>
              </Card>
            );
          })}
        </Fade>
      </Grid>
    </GallerySection>
  );
};

export default ConferenceGallery;