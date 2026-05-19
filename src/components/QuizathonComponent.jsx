import React from "react";
import styled from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const QuizathonSection = styled.section`
  background: #ffffff;
  padding: 100px 5px;
  font-family: "Poppins", sans-serif;
`;

const Container = styled.div`
  max-width: 1150px;
  margin: auto;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LeftCard = styled.div`
  background: linear-gradient(135deg, #0b7a3d 0%, #13a054 100%);
  border-radius: 30px;
  padding: 50px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    top: -80px;
    right: -80px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    background: rgba(255, 122, 0, 0.15);
    border-radius: 50%;
    bottom: -60px;
    left: -60px;
  }
`;

const Badge = styled.div`
  display: inline-block;
  background: #ff7a00;
  color: white;
  padding: 10px 22px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  line-height: 1.3;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const Intro = styled.p`
  font-size: 1.08rem;
  line-height: 2;
  position: relative;
  z-index: 1;
`;

const RightCard = styled.div`
  background: #ffffff;
  border-radius: 30px;
  padding: 45px;
  border: 2px solid #eef7f0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
`;

const SectionTitle = styled.h3`
  color: #ff7a00;
  font-size: 1.5rem;
  margin-bottom: 18px;
`;

const Text = styled.p`
  color: #333;
  font-size: 1.04rem;
  line-height: 2;
  margin-bottom: 18px;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 28px;
`;

const ListItem = styled.li`
  color: #444;
  margin-bottom: 12px;
  line-height: 1.8;

  &::marker {
    color: #0b7a3d;
  }
`;

const Highlight = styled.span`
  color: #0b7a3d;
  font-weight: 700;
`;

const EmailBox = styled.div`
  background: #fff6ef;
  border-left: 5px solid #ff7a00;
  padding: 18px 20px;
  border-radius: 16px;
  margin-top: 15px;
`;

const Footer = styled.div`
  margin-top: 35px;
  padding-top: 20px;
  border-top: 2px dashed #d8eedd;
`;

const Signed = styled.h4`
  color: #0b7a3d;
  font-size: 1.15rem;
`;

const QuizathonComponent = () => {
  return (
    <QuizathonSection>
      <Container>
        <Wrapper>
          {/* LEFT SIDE */}
          <Fade triggerOnce>
            <LeftCard>
              <Badge>NISEB QUIZATHON 2026</Badge>

              <Slide direction="up" triggerOnce>
                <Title>
                  🌟 CALL FOR PARTICIPATION: NISEB QUIZATHON 2026 🌟
                </Title>
              </Slide>

              <Intro>
                The Society for Experimental Biology of Nigeria (NISEB) is
                pleased to invite undergraduate students from Nigerian higher
                institutions to participate in the exciting NISEB Quizathon
                2026.
              </Intro>

              <Intro>
                This prestigious competition will take place during the Annual
                Conference and General Meeting of the Society, scheduled for
                June 8-11th, 2026 at the University of Benin.
              </Intro>
            </LeftCard>
          </Fade>

          {/* RIGHT SIDE */}
          <Zoom triggerOnce>
            <RightCard>
              <SectionTitle>Who Can Participate?</SectionTitle>

              <List>
                <ListItem>
                  Two representatives from each institution
                </ListItem>

                <ListItem>
                  Preferably students in their final or penultimate year
                </ListItem>

                <ListItem>
                  Students must be from departments affiliated with Experimental
                  Biology
                </ListItem>
              </List>

              <SectionTitle>
                What to Expect at the NISEB Quizathon 2026?
              </SectionTitle>

              <List>
                <ListItem>Preliminary rounds</ListItem>

                <ListItem>
                  Live quiz rounds including multiple-choice and rapid-fire
                  sessions
                </ListItem>

                <ListItem>
                  Themed rounds on Experimental Biology and Current Affairs
                </ListItem>

                <ListItem>
                  Team challenges and presentations on selected topics
                </ListItem>

                <ListItem>
                  Discovery of NextGen leaders in Experimental Biology
                </ListItem>

                <ListItem>
                  Exciting prizes and awards for outstanding participants
                </ListItem>
              </List>

              <Text>
                All NISEB Chapter Coordinators are encouraged to mobilize and
                nominate representatives from their respective institutions.
              </Text>

              <SectionTitle>Registration:</SectionTitle>

              <Text>
                Submit representatives’ details via email to:
              </Text>

              <EmailBox>
                <Highlight>nisebquizcompetition@gmail.com</Highlight>
              </EmailBox>

              <Text style={{ marginTop: "25px" }}>
                Get ready to showcase your knowledge, creativity, teamwork, and
                leadership at the NISEB Quizathon 2026.
              </Text>

              <Footer>
                <Signed>
                  Signed:
                  <br />
                  Dr Omowumi Kayode
                </Signed>
              </Footer>
            </RightCard>
          </Zoom>
        </Wrapper>
      </Container>
    </QuizathonSection>
  );
};

export default QuizathonComponent;