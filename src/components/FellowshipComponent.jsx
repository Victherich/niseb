import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";

const FellowsSection = styled.section`
  background: #ffffff;
  padding: 90px 20px;
  font-family: "Poppins", sans-serif;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f7fff8 100%);
  border-radius: 30px;
  padding: 50px;
  border-top: 8px solid #ff7a00;
  border-bottom: 8px solid #0b7a3d;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 30px 22px;
  }
`;

const Badge = styled.div`
  display: inline-block;
  background: #0b7a3d;
  color: #fff;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff7a00;
  line-height: 1.3;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  color: #333;
  font-size: 1.08rem;
  line-height: 2;
  margin-bottom: 22px;
`;

const Highlight = styled.span`
  color: #0b7a3d;
  font-weight: 700;
`;

const Orange = styled.span`
  color: #ff7a00;
  font-weight: 700;
`;

const Footer = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px dashed #d9eadb;
`;

const Name = styled.h4`
  color: #0b7a3d;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const Role = styled.p`
  color: #666;
  font-size: 1rem;
`;

const FellowshipComponent = () => {
  return (
    <FellowsSection>
      <Container>
        <Fade triggerOnce>
          <Card>
            <Badge>NISEB Fellowship Announcement</Badge>

            <Slide direction="up" triggerOnce>
              <Title>
                Call for Applications: Fellows of the Society for Experimental
                Biology of Nigeria (NISEB)
              </Title>
            </Slide>

            <Text>
              The Society for the Experimental Biology of Nigeria (NISEB) hereby
              invites applications for admission as fellows of our prestigious
              Society.
            </Text>

            <Text>
              Applications are welcomed from suitably qualified and distinguished
              members of NISEB.
            </Text>

            <Text>
              Please find below, the application form to that effect.
            </Text>

            <Text>
              <Orange>
                Kindly note that duly completed forms should be submitted to:
              </Orange>
              <br />
              <Highlight>president@nisebnigeria.com</Highlight>
              <br />
              on or before 12 noon of Monday, 15th May, 2026.
            </Text>

            <Text>
              Thank you for your usual cooperation.
            </Text>

            <Footer>
              <Name>Prof. Risikat N. Ahmed</Name>
              <Role>National PRO</Role>
            </Footer>
          </Card>
        </Fade>
      </Container>
    </FellowsSection>
  );
};

export default FellowshipComponent;