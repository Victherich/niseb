import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import bot from  '../Images/bot.jpg'
import nisebLogo from '../Images/nisebLogo.png'
import chairman from '../Images2/chairman.jpg'
import member7 from '../Images2/member 7.jpg'
import sec from '../Images2/Sec.jpg'
import member1 from '../Images2/member 1.jpg'
import member3 from '../Images2/member 3.jpg'
import member4 from '../Images2/member 4.jpg'
import proftiaga from '../Images2/Prof. Taiga, Akpovughaye.jpg'
import member5 from '../Images2/member 5.jpg'
import member6 from '../Images2/member 6.jpg'
import member2 from '../Images2/member 2.jpg'


const Hero = styled.section`
  position: relative;
  height: 50vh;
  min-height: 320px;
  background: url(${bot}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
  }

  > div {
    position: relative;
    z-index: 1;
    padding: 0 20px;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 12px;
      color: #f97316; /* orange */
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
    }

    p {
      font-size: 1.2rem;
      font-weight: 500;
      color: #86efac; /* light green */
    }
  }
`;

const PageWrapper = styled.div`
  font-family: Inter, ui-sans-serif, system-ui;
  background: #fffefc;
  color: #1a1a1a;
  min-height: 100vh;
  padding: 60px 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #f97316; /* orange */
    margin-bottom: 8px;
  }

  p {
    font-size: 1.1rem;
    color: #16a34a; /* green */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;

const Grid1 = styled.div`
  display: flex;
justify-content:center;
align-items:center;
  gap: 24px;
  margin-bottom:50px;
  flex-wrap:wrap;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(22, 163, 74, 0.1);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 9999px;
    margin-bottom: 16px;
    border: 3px solid #f97316;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 4px;
    color: #f97316;
  }

  h4 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #16a34a;
  }

  p {
    font-size: 0.85rem;
    color: #374151;
  }
`;

const members1 = [
  {
    name: "Prof. H.O.B Oloyede",
    role: "CHAIRMAN, BOT",
    desc: "...",
    img: chairman,
  },
  {
    name: "Prof. Clement Bewaji",
    role: "MEMBER",
    desc: "...",
    img: member7,
  },

]



const members = [

  {
    name: "Prof. M.T Yakubu",
    role: "SECRETARY, BOT",
    desc: "FNSBMB, FNISEB, FAS",
    img: sec,
  },
  {
    name: "Prof. Evelyn Uwa Edosomwan",
    role: "MEMBER",
    desc: "JP, FNISEB",
    img: member1,
  },
  {
    name: "Prof. Joy E. Okpuzor",
    role: "MEMBER",
    desc: "...",
    img: member3,
  },
  {
    name: "Prof S.M.C Ezeugwu",
    role: "MEMBER",
    desc: "...",
    img: member4,
  },
  {
    name: "Prof. Taiga Akpovughaye",
    role: "MEMBER",
    desc: "Department of Biological Sciences, Delta State University of Science and Technology, Ozoro, Delta State.",
    img: proftiaga,
  },
  {
    name: "Prof E.U Balogun",
    role: "MEMBER",
    desc: "...",
    img: member5,
  },
  {
    name: "Prof. Kunle Petu",
    role: "MEMBER",
    desc: "...",
    img: member6,
  },
  {
    name: "Prof. Oyebamiji O. Fafioye",
    role: "MEMBER",
    desc: "...",
    img: member2,
  },
];

export default function BoardOfTrusteesPage() {
  return (
    <>
      <Hero>
        <div>
            <Slide cascade damping={0.2} duration={3000} triggerOnce={false} direction="down">
          <h1>Board of Trustees</h1>
          <p>Guiding with wisdom and leadership</p>
          </Slide>
        </div>
      </Hero>

      <PageWrapper>
        <Header>
            <Slide cascade damping={0.2} duration={3000} triggerOnce={false} direction="right">
          <h2>Our Amazing Team</h2>
          <p>Meet the minds behind our vision</p>
          </Slide>
        </Header>

  <Grid1>
          {members1.map((m, i) => (
            <Card key={i}>
              <img src={m.img} alt={m.name}  style={{width:"300px", height:"300px"}}/>
              <Slide cascade damping={0.2} duration={3000} triggerOnce={false} direction="down">
                <h3>{m.name}</h3>
                <h4>{m.role}</h4>
                <p>{m.desc}</p>
              </Slide>
            </Card>
          ))}
        </Grid1>

        <Grid>
          {members.map((m, i) => (
            <Card key={i}>
              <img src={m.img} alt={m.name} />
              <Slide cascade damping={0.2} duration={3000} triggerOnce={false} direction="down">
                <h3>{m.name}</h3>
                <h4>{m.role}</h4>
                <p>{m.desc}</p>
              </Slide>
            </Card>
          ))}
        </Grid>
      </PageWrapper>
    </>
  );
}
