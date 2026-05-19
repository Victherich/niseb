import React from "react";
import styled from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import conimg from '../Images/conimg.jpeg'
import convideo from '../Images/convideo.mp4'

const ConferenceSection = styled.section`
  background: #ffffff;
  padding: 80px 20px;
  font-family: "Poppins", sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Badge = styled.div`
  display: inline-block;
  background: #ff7a00;
  color: white;
  padding: 10px 22px;
  border-radius: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0b7a3d;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const VideoWrapper = styled.div`
  background: #f9f9f9;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
`;

const FlyerImage = styled.img`
  width: 100%;
  border-radius: 24px;
  margin-top: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const ContentCard = styled.div`
  background: #ffffff;
  border: 2px solid #e8f5ea;
  border-left: 8px solid #0b7a3d;
  border-radius: 24px;
  padding: 35px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
`;

const Text = styled.p`
  color: #333;
  font-size: 1.05rem;
  line-height: 1.9;
  margin-bottom: 18px;
`;

const Highlight = styled.span`
  color: #ff7a00;
  font-weight: 700;
`;

const Green = styled.span`
  color: #0b7a3d;
  font-weight: 700;
`;

const ConferenceComponent = () => {
  return (
    <ConferenceSection>
      <Container>
        <Fade triggerOnce>
          <Header>
            <Badge>NISEB UNIBEN 2026</Badge>
            <Title>Annual Conference Showcase</Title>
          </Header>
        </Fade>

        <MainContent>
          {/* LEFT SIDE */}
          <div>
            <Slide direction="left" triggerOnce>
              <VideoWrapper>
                <StyledVideo controls>
                  <source src={convideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </StyledVideo>
              </VideoWrapper>
            </Slide>

            <Zoom triggerOnce>
              <FlyerImage
                src={conimg}
                alt="Conference Flier"
              />
            </Zoom>
          </div>

          {/* RIGHT SIDE */}
          <Slide direction="right" triggerOnce>
            <ContentCard>
              <Text>
                📢<Highlight>NISEB UNIBEN 2026: Call for Abstracts</Highlight>
                🧬
              </Text>

              <Text>
                The <Green>University of Benin</Green> invites you to the
                25th Annual Conference of the Society for Experimental Biology
                of Nigeria (NISEB)!
              </Text>

              <Text>
                🗓<Green>Date:</Green> June 8 – 11, 2026
                <br />
                📍<Green>Location:</Green> UNIBEN, Benin City
                <br />
                🌾<Green>Theme:</Green> From Research Bench to Market
                Interfaces: Leveraging Experimental Biological Innovations
                towards a Climate-Smart, Food-Secure, and Healthy Nigeria.
              </Text>

              <Text>
                📝<Highlight>Abstract Submission</Highlight>
                <br />
                <Green>Deadline:</Green> May 15 2026
                <br />
                <Green>Email:</Green> niseb2026@uniben.edu
                <br />
                <Green>Specs:</Green> Max 250 words, MS Word, 12pt Times New
                Roman.
              </Text>

              <Text>
                💳<Highlight>Registration (Early Bird - ends April 30,
                2026)</Highlight>
                <br />
                <Green>Members:</Green> ₦35,000 |{" "}
                <Green>Non-Members:</Green> ₦40,000
                <br />
                <Green>PG Students:</Green> ₦15,000 |{" "}
                <Green>UG Students:</Green> ₦5,000
                <br />
                <Green>Bank:</Green> UNIBEN Microfinance Bank |{" "}
                <Green>Acc:</Green> 1100099589
                <br />
                <Green>Acc Name:</Green> Society for Experimental Biology of
                Nigeria-UNIBEN
              </Text>

              <Text>
                📞<Highlight>Quick Contact</Highlight>
                <br />
                <Green>LOC Chair:</Green> 08037094470
                <br />
                <Green>Abstracts:</Green> 08032015334
                <br />
                <Green>Registration:</Green> 08035685559
              </Text>

              <Text>
                <Highlight>See you in Benin City!*</Highlight>🚀
              </Text>
            </ContentCard>
          </Slide>
        </MainContent>
      </Container>
    </ConferenceSection>
  );
};

export default ConferenceComponent;