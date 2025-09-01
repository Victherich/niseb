
import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import bot from  '../Images/ne.png'
import nisebLogo from '../Images/nisebLogo.png'
import president from '../Images2/President.jpg'
import vp from '../Images2/Vice President.jpg'
import ns from '../Images2/National Sec.jpg'
import tresurer from '../Images2/Tresur.jpg'
import finse from '../Images2/fin sec.jpg'
import pro from '../Images2/PRO.jpg'
import proftiaga from '../Images2/Prof. Taiga, Akpovughaye.jpg'
import ruk from '../Images2/Dr.  Rukayat Abiodun.jpg'
import p1 from '../Images2/p1.jpeg'
import p2 from '../Images2/p2.png'
import p3 from '../Images2/p3.jpeg'
import p4 from '../Images2/p4.jpeg'
import p5 from '../Images2/p5.jpeg'
import p6 from '../Images2/p6.jpeg'

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

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(22, 163, 74, 0.1);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
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

const members = [
  {
    name: "Prof. Bamidele Victor Owoyele",
    role: "PRESIDENT",
    desc: "University of Ilorin, Nigeria | Physiology (Neuroscience)",
    img: president,
  },
  {
    name: "Prof. E.S Omoreghie",
    role: "VICE PRESIDENT",
    desc: "University of Benin, Nigeria",
    img: p3,
  },
  {
    name: "Dr. David O. Adetitun",
    role: "SECRETARY GENERAL",
    desc: "University of Ilorin, Nigeria | Environmental Microbiology",
    img: ns,
  },
  {
    name: "Dr. Omowunmi T. Kayode",
    role: "TREASURER",
    desc: "Mountain Top University, Prayer City, Ogun State, Nigeria | Medicinal, Nutritional and Reproductive Biochemistry",
    img: p4,
  },
  {
    name: "Prof. Olarewaju Oluba",
    role: "FINANCIAL SECRETARY",
    desc: "Landmark University, Omu-Aran, Kwara State, Nigeria | Nutritional Biochemistry and Agricultural Biotechnology",
    img: p1,
  },
  {
    name: "Dr. Faoziyah Adenike Sulaiman",
    role: "PUBLIC RELATION OFFICER",
    desc: "University of Ilorin, Nigeria",
    img: p5,
  },
  {
    name: "Prof. Taiga Akpovughaye",
    role: "EX-OFFICIO",
    desc: "Delta State University, Ozoro, Nigeria",
    img: p6,
  },
  {
    name: "Dr. Rukayat Abiodun Oyegoke",
    role: "ASSISTANT SECRETARY",
    desc: "Department of Biochemistry, Faculty of Life Sciences, University of Ilorin, Nigeria",
    img: p2,
  },
];


export default function NationalExecutives() {
  return (
    <>
      <Hero>
        <div>
            <Slide cascade damping={0.2} duration={3000} triggerOnce={false} direction="down">
          <h1>National Executives</h1>
          <p>Productive Executives</p>
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
