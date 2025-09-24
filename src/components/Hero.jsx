// import React, { useRef } from "react";
// import styled from "styled-components";
// import heroVideo from "../Images/media1.mp4";
// import heroPoster from "../Images/test.jpg";
// import { Fade, Slide } from "react-awesome-reveal"; // Import the necessary animation components

// // Styled Components
// const HeroContainer = styled.section`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   overflow: hidden;
//   background-color: #000;

//   video {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const VideoOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 1;
// `;

// const HeroText = styled.div`
//   position: relative;
//   z-index: 2;
//   text-align: center;
//   padding: 1rem;
//   width: 90%;
//   max-width: 800px;
// `;

// const HeroTitle = styled.h1`
//   font-size: 8rem;
//   font-weight: bold;
//   color: white;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
//   @media (max-width: 428px) {
//     font-size: 2rem;
//   }
// `;

// const HeroTitle2 = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   color: white;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
//   @media (max-width: 428px) {
//     font-size: 1.2rem;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1rem;
//   color: white;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
//   @media (max-width: 428px) {
//     font-size: 1rem;
//   }
// `;

// // Hero Component
// const Hero = () => {
//   const heroRef = useRef(null);

//   return (
//     <HeroContainer ref={heroRef}>
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         poster={heroPoster}
//       >
//         <source src={heroVideo} type="video/mp4" />
//         <p>Your browser does not support the video tag.</p>
//       </video>
//       <VideoOverlay />
//       <HeroText>
//         {/* Fly in from bottom */}
//         <Slide direction="up" triggerOnce={false} duration={3000}>
//           <HeroTitle>NISEB</HeroTitle>
//         </Slide>
//         {/* Fly in from side with a delay */}
//         <Slide direction="right" triggerOnce={false} delay={500} duration={3000}>
//           <HeroTitle2>Society for Experimental Biology of Nigeria (NISEB)</HeroTitle2>
//         </Slide>
//         {/* Fly in from top with a delay */}
//         <Slide direction="left" triggerOnce={false} delay={1000} duration={3000}>
//           <HeroSubtitle>Advancing knowledge, fostering innovation, and building a sustainable future for biological sciences.</HeroSubtitle>
//         </Slide>
//       </HeroText>
//     </HeroContainer>
//   );
// };

// export default Hero;





import React, { useContext, useRef } from "react";
import styled from "styled-components";
import heroVideo from "../Images/media1.mp4";
import heroPoster from "../Images/onf2.png";
import { Fade, Slide, Zoom, Flip } from "react-awesome-reveal"; // Import all animation components
import { Context } from "./Context";

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  background-color: #000;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 1rem;
  width: 90%;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;

const HeroTitle2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 428px) {
    font-size: 1.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 428px) {
    font-size: 1rem;
  }
`;

// Hero Component
const Hero = () => {
  const heroRef = useRef(null);

  const {state} = useContext(Context);

  console.log(state)

  return (
    <HeroContainer ref={heroRef}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <VideoOverlay />
      <HeroText>
        {/* Using a Flip animation for a dramatic entrance */}
        <Flip triggerOnce={false} duration={2000}>
          <HeroTitle>NISEB</HeroTitle>
        </Flip>
        {/* Using a Fade animation for a smooth, subtle effect */}
        <Zoom triggerOnce={false} delay={500} duration={3000}>
          <HeroTitle2>Society for Experimental Biology of Nigeria (NISEB)</HeroTitle2>
        </Zoom>
        {/* Using a Zoom animation for a strong, impactful effect */}
        <Zoom triggerOnce={false} delay={1000} duration={3000}>
          <HeroSubtitle>Advancing knowledge, fostering innovation, and building a sustainable future for biological sciences.</HeroSubtitle>
        </Zoom>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;