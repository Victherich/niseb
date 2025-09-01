
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React Icons
import ab1 from '../Images/h1.jpg'
import ab2 from '../Images/h2.jpg'
import ab3 from '../Images/h3.jpg'
import ab4 from '../Images/h4.jpg'
import ab5 from '../Images/h3.jpg'

// --- Placeholder Background Images (REPLACE WITH YOUR ACTUAL IMAGES) ---
// Example: import carouselBg1 from '../Images/carouselBg1.jpg';
const backgroundImages = [
ab1, ab2, ab3, ab4, ab5
];

// --- Carousel Content Data ---
const carouselContent = [
  {
    title: "Advancing Science, Building a Sustainable Future",
    description: "NISEB is a community of dedicated researchers and innovators committed to pushing the boundaries of biological sciences. Our work is driven by a shared vision to create solutions that address today’s most pressing challenges, from food security to global health. Join us in building a more sustainable and prosperous future.",
  },
  {
    title: "Ignite Your Passion for Discovery",
    description: "Are you ready to explore the unseen world? At NISEB, we believe in the power of curiosity and the thrill of discovery. We provide a platform for young and experienced scientists alike to collaborate, share knowledge, and turn ground-breaking ideas into real-world impact. Your next great breakthrough starts here.",
  },
  {
    title: "From the Lab to the Community",
    description: "Our research extends beyond the laboratory. NISEB is dedicated to translating scientific knowledge into tangible benefits for society. Through our conferences, workshops, and outreach programs, we connect with communities to foster a deeper understanding of biology and inspire the next generation of scientific leaders.",
  },
  {
    title: "A Network of Innovators",
    description: "Become part of Nigeria's leading network for experimental biology. NISEB brings together diverse minds from academia, industry, and government to foster collaboration and innovation. We offer unparalleled opportunities for mentorship, professional growth, and partnerships that can accelerate your career and research.",
  },
  {
    title: "Empowering Tomorrow's Biological Leaders",
    description: "At NISEB, we are not just studying biology—we are shaping its future. Our programs are designed to empower students and early-career professionals with the skills, knowledge, and connections they need to succeed. Take the first step toward a rewarding career in biological sciences and make a lasting impact on the world.",
  }
];

// --- Keyframe Animations ---

// Slide content entrance animation
const slideContentIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Slide background fade/scale animation
const slideBackgroundTransition = keyframes`
  0% { opacity: 0; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
`;

// Dot pulse animation
const dotPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;

// --- Styled Components ---

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  overflow: hidden;
  border-radius: 0px; /* Soft rounded corners for the carousel itself */
  // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin: 0px auto; /* Center the carousel on the page */
  max-width: 1400px; /* Max width for larger screens */
  

  @media (max-width: 768px) {
    // height: 60vh;
    margin: 30px auto;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    // height: 50vh;
    margin: 20px auto;
    border-radius: 5px;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: top;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 1s ease-in-out; /* Smooth fade transition for background */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${props => props.$active ? css`${slideBackgroundTransition} 1.5s ease-out forwards` : 'none'};
  
  &::before { /* Dark overlay for text readability */
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6); /* Darker overlay */
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2; /* Above the overlay */
  max-width: 800px;
  padding: 20px;
  color: #fff;
  opacity: ${props => (props.$active ? 1 : 0)};
  transform: ${props => (props.$active ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: 0.5s; /* Delay content animation slightly after slide appears */

  ${props => props.$active && css`
    h2 {
      animation: ${slideContentIn} 0.8s ease-out forwards;
      animation-delay: 0.7s; /* Stagger title */
    }
    p {
      animation: ${slideContentIn} 0.8s ease-out forwards;
      animation-delay: 1s; /* Stagger description */
    }
  `}
`;

const SlideTitle = styled.h2`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  color: #00C9FF; /* Vibrant blue for titles */
  color:white;
`;

const SlideDescription = styled.p`
  font-size: clamp(0.9rem, 1.8vw, 1.2rem);
  line-height: 1.6;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  color: #E0E0E0;
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => props.$direction === 'left' && css`
    left: 15px;
  `}

  ${props => props.$direction === 'right' && css`
    right: 15px;
  `}

  @media (max-width: 768px) {
    padding: 10px 8px;
    font-size: 1.5rem;
    border-radius: 5px;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 10px;
    gap: 8px;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => (props.$active ? 'orange' : 'rgba(255, 255, 255, 0.5)')};
  border: 1px solid ${props => (props.$active ? 'orange' : 'rgba(255, 255, 255, 0.3)')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => (props.$active ? '#00C9FF' : 'rgba(255, 255, 255, 0.7)')};
    transform: scale(1.1);
  }

  ${props => props.$active && css`
    animation: ${dotPulse} 1.5s infinite alternate;
  `}

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

// --- Main Carousel Component ---

const Carousel = ({ interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To prevent rapid clicks
  const autoPlayRef = useRef();

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  // Function to go to a specific slide (for dots)
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  // Reset animation state after slide transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Match or slightly exceed slide transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-play logic
  useEffect(() => {
    autoPlayRef.current = goToNextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const timer = setInterval(play, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <CarouselContainer>
      {carouselContent.map((slide, index) => (
        <Slide
          key={index}
          $active={index === currentSlide}
          $bgImage={backgroundImages[index]}
        >
          <SlideContent $active={index === currentSlide}>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideDescription>{slide.description}</SlideDescription>
          </SlideContent>
        </Slide>
      ))}

      <ControlButton $direction="left" onClick={goToPrevSlide} disabled={isAnimating}>
        <FaChevronLeft />
      </ControlButton>
      <ControlButton $direction="right" onClick={goToNextSlide} disabled={isAnimating}>
        <FaChevronRight />
      </ControlButton>

      <DotsContainer>
        {carouselContent.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentSlide}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;