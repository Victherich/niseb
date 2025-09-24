
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const primaryGreen = "#008000";
const primaryOrange = "#ff6600";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  color: ${primaryGreen};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  color: ${primaryOrange};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  font-size: 1.1rem;

  &::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: ${primaryGreen};
    font-weight: bold;
  }
`;

const FeeBox = styled.div`
  background: whitesmoke;
  color: ${primaryGreen};
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const FeeItem = styled.p`
  margin: 0.5rem 0;
  font-size: 1.05rem;

  span {
    color: ${primaryOrange};
    font-weight: bold;
  }
`;

export default function MembershipInfo() {
  return (
    <Container>
      <Fade cascade triggerOnce={false} damping={0.2}>
        <Title>Become a Member of NISEB</Title>

        <Section>
          <Subtitle>Steps to Join</Subtitle>
          <List>
            <ListItem>Complete the Application Form Below.</ListItem>
            <ListItem>Pay Membership Fees (see details below).</ListItem>
          </List>

          <FeeBox>
            <h3>Membership Fees</h3>
            <FeeItem><span>Fellows:</span> N20,000</FeeItem>
            <FeeItem><span>Full Members:</span> N10,000</FeeItem>
            <FeeItem><span>Certified Students:</span> N5,000</FeeItem>
            <FeeItem><span>Foreign Members:</span> $10</FeeItem>
          </FeeBox>
        </Section>

        <Section>
          <Subtitle>Who Can Join?</Subtitle>
          <List>
            <ListItem>Lecturers</ListItem>
            <ListItem>Students (undergraduates and postgraduates)</ListItem>
            <ListItem>Postdoctoral candidates</ListItem>
            <ListItem>Researchers</ListItem>
            <ListItem>Health professionals</ListItem>
            <ListItem>Industry professionals</ListItem>
            <ListItem>Public and private entrepreneurs</ListItem>
            <ListItem>Life science enthusiasts</ListItem>
          </List>
        </Section>
      </Fade>
    </Container>
  );
}
