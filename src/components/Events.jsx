import React from "react";
import styled from "styled-components";
import { Slide, Zoom, Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import quizImage from "../Images/test.jpg"; // Replace with your image paths
import confImage1 from "../Images/onf1.png";
import confImage2 from "../Images/onf2.png";
import foodImage from "../Images/test.jpg";
import quizHero from "../Images/quiz.jpg";
import onfpage2 from '../Images/onfpage2.pdf'

// Define the color scheme
const lightBackground = '#f9f9f9';
const darkText = '#333333';
const primaryGreen = '#008000';
const primaryOrange = '#ff6600';
const cardBackground = '#ffffff';

// Styled Components
const EventsContainer = styled.section`
  padding: 6rem 2rem;
  background-color:rgba(0, 255, 0, 0.15);
  color: ${darkText};
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
  // margin-bottom: 50px;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  text-align: left;
`;

const Card = styled.div`
//   background-color: ${cardBackground};
  padding: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${primaryOrange};
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 0.6rem;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 10;
`;

const CardTitle = styled.h3`
  font-size: 0.8rem;
  color: ${primaryGreen};
  margin-bottom: 0.5rem;
`;

const CardDate = styled.p`
  font-size: 0.7rem;
  color: #777;
//   margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 0.8rem;
  color: ${darkText};
  flex-grow: 1;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  background-color: ${primaryOrange};
  color: ${cardBackground};
  padding: 3px 10px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1.5rem;
  align-self: flex-start;
  transition: background-color 0.3s ease;
  font-size:0.8rem;

  &:hover {
    background-color: #ff8c4d;
  }
`;


// Events Component
const Events = () => {
  const eventsData = [
    {
      id: 1,
      image: quizHero,
      category: "QUIZ COMPETITION",
      title: "Enrollment Form for Quiz Competition (2025)",
      date: "November 6th, 2024",
      description: "The third edition of the prestigious competition, organized by the Society for Experimental Biology of Nigeria (NISEB) will feature...",
    link:'/quizform'
    },
    {
      id: 2,
      image: confImage1,
      category: "CONFERENCE",
      title: "22ND ANNUAL SCIENTIFIC CONFERENCE AND GENERAL MEETING",
      date: "April 21, 2023",
      description: "Theme: Harnessing Diversity in Experimental Biology for Sustainable Development. August 7 - August 11, 2023.",
    link:'/conferencepage'
    },
    {
      id: 3,
      image: confImage2,
      category: "CONFERENCE",
      title: "23rd ANNUAL SCIENTIFIC CONFERENCE AND GENERAL MEETING",
      date: "April 21, 2024",
      description: "Theme: Emerging Technologies in Experimental Biology: Catalysts for Food Security, Well-being and Sustainable Development",
    link:onfpage2
    },
    // {
    //   id: 4,
    //   image: confImage2,
    //   category: "CONFERENCE",
    //   title: "23rd ANNUAL SCIENTIFIC CONFERENCE AND GENERAL MEETING",
    //   date: "April 21, 2024",
    //   description: "Theme: Emerging Technologies in Experimental Biology: Catalysts for Food Security, Well-being and Sustainable Development",
    // },
    // {
    //   id: 5,
    //   image: foodImage,
    //   category: "FOOD",
    //   title: "Make your website with best visual web designer.",
    //   date: "March 09, 2023",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
    // },
  ];

  return (
    <EventsContainer>
      <Zoom duration={2000} triggerOnce={false}>
        <SectionTitle>Latest Updates</SectionTitle>
      </Zoom>
      <CardGrid>
        {eventsData.map((event) => (
  <Card key={event.id}>
    <ImageWrapper>
      <img src={event.image} alt={event.title} />
      <CategoryBadge>{event.category}</CategoryBadge>
    </ImageWrapper>

    {/* Title animation */}
    <Slide direction="up" duration={2000} delay={100} triggerOnce={false}>
      <CardTitle>{event.title}</CardTitle>
    </Slide>

    {/* Description animation */}
    <Zoom duration={2500} delay={200} triggerOnce={false}>
      <CardText>
        <CardDate>Posted on {event.date}</CardDate>
        <br />
        {event.description}
      </CardText>
    </Zoom>

    {/* Button animation */}
    <Slide direction="left" duration={3000} delay={300} triggerOnce={false}>
      {event.link.endsWith(".pdf") ? (
        <ReadMoreButton
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          READ MORE
        </ReadMoreButton>
      ) : (
        <ReadMoreButton as={Link} to={event.link}>
          READ MORE
        </ReadMoreButton>
      )}
    </Slide>
  </Card>
))}

      </CardGrid>
    </EventsContainer>
  );
};

export default Events;