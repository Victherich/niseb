
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import fellowsBg from "../Images/fellows.jpg"; // replace with your background image path

const PageWrapper = styled.div`
  font-family: Inter, ui-sans-serif, system-ui;
  background: #fffefc;
  color: #1a1a1a;
  min-height: 100vh;
`;
const Hero = styled.div`
  position: relative;
  background: url(${fellowsBg}) center/cover no-repeat;
  padding: 100px 20px;
  text-align: center;
  color: white;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55); /* overlay opacity */
    z-index: 1;
  }

  h1, p {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #f97316; /* orange */
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 1.2rem;
    color: #fefefe;
  }
`;


const Section = styled.div`
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const FellowCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(22, 163, 74, 0.2);
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
  transition: transform 220ms ease;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #16a34a; /* green */
  }
`;

const fellows = [
  "Prof. E. A. Bababunmi",
  "Prof. O. O. Olorunsogo",
  "Prof. B. L. Fetuga",
  "Prof. (Mrs.) Oyinade Elebute",
  "Prof. M. Iwu",
  "Prof. O. G. Oshodin",
  "Prof. C. O. Bewaji",
  "Prof. (Mrs.) V. A. Onwuliri",
  "Prof. V. A. Tenebe",
  "Prof. A. A. Odutuga",
  "Prof. H. O. B. Oloyede",
  "Prof. M. A. Akanji",
  "Prof. J. A. Morakinyo",
  "Prof. M. A. Belewu",
  "Prof. A. O. Soladoye",
  "Prof. J. A. Obaleye",
  "Prof. (Mrs.) E. A. Balogun",
  "Prof. (Mrs.) S. O. Malomo",
  "Prof. Akin Aboderin",
  "Prof. A. A. Adesokan",
  "Prof. O. O. Fafioye",
  "Prof. (Mrs.) Atim Bassey Antai",
  "Prof. Ekaette U. I. Etuk",
  "Prof. A. E. Udoh (Honorary)",
  "Prof. Eme Osim (Honorary)",
  "Prof. (Mrs.) Edisua H. Itam (Honorary)",
  "Chief Emmanuel Iwuanyanwu (Honorary)",
  "Otunba (Dr.) Oyin Jolayemi (Honorary)",
  "Dr. D. K. Olukoya (Honorary)",
];

export default function FellowsPage() {
  return (
    <PageWrapper>
      <Hero>
        <h1>Fellows of the Society</h1>
        <p>Celebrating our distinguished Fellows</p>
      </Hero>

      <Section>
        <Grid>
          {fellows.map((fellow, i) => (
            <FellowCard key={i}>
              <Fade duration={3000} triggerOnce={false}>
                <h3>{fellow}</h3>
              </Fade>
            </FellowCard>
          ))}
        </Grid>
      </Section>
    </PageWrapper>
  );
}
