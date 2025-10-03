
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// Import webinar images
import wa from "../Images/wa.jpg";
import wb from "../Images/wb.jpg";
import wc from "../Images/wc.jpg";
import wd from "../Images/wd.jpg";
import we from "../Images/we.jpg";
import wf from "../Images/wf.jpg";
import wh from "../Images/wh.jpg";

// Optional: background image for hero
import gl from "../Images/gl2.png";

// Hero Colors
const primaryGreen = "#008000";
const primaryOrange = "#ff6600";

const Hero = styled.section`
  width: 100%;
  height: 400px;
  background: url(${gl}) center/cover no-repeat;
  border-radius: 16px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const HeroText = styled.h1`
  position: relative;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  color: ${primaryGreen};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  background-color: #f8f8f8;
  display: block;
`;

export default function WebinarPage() {
  const webinars = [
    { src: wa, title: "Webinar A" },
    { src: wb, title: "Webinar B" },
    { src: wc, title: "Webinar C" },
    { src: wd, title: "Webinar D" },
    { src: we, title: "Webinar E" },
    { src: wf, title: "Webinar F" },
    { src: wh, title: "Webinar H" },
  ];

  return (
    <>
      <Hero>
        <HeroOverlay />
        <Fade triggerOnce>
          <HeroText>Our Webinars</HeroText>
        </Fade>
      </Hero>

      <Container>
        <Fade cascade triggerOnce damping={0.05}>
          <Title>Explore Our Webinars</Title>
          <GalleryGrid>
            {webinars.map((webinar, idx) => (
              <Card key={idx}>
                <Image src={webinar.src} alt={webinar.title} />
              </Card>
            ))}
          </GalleryGrid>
        </Fade>
      </Container>
    </>
  );
}
