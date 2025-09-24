// import React from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";



// // Import images 1–79
// import p1 from "../Images3/p (1).jpeg";
// import p2 from "../Images3/p (2).jpeg";
// import p3 from "../Images3/p (3).jpeg";
// import p4 from "../Images3/p (4).jpeg";
// import p5 from "../Images3/p (5).jpeg";
// import p6 from "../Images3/p (6).jpeg";
// import p7 from "../Images3/p (7).jpeg";
// import p8 from "../Images3/p (8).jpeg";
// import p9 from "../Images3/p (9).jpeg";
// import p10 from "../Images3/p (10).jpeg";
// import p11 from "../Images3/p (11).jpeg";
// import p12 from "../Images3/p (12).jpeg";
// import p13 from "../Images3/p (13).jpeg";
// import p14 from "../Images3/p (14).jpeg";
// import p15 from "../Images3/p (15).jpeg";
// import p16 from "../Images3/p (16).jpeg";
// import p17 from "../Images3/p (17).jpeg";
// import p18 from "../Images3/p (18).jpeg";
// import p19 from "../Images3/p (19).jpeg";
// import p20 from "../Images3/p (20).jpeg";
// import p21 from "../Images3/p (21).jpeg";
// import p22 from "../Images3/p (22).jpeg";
// import p23 from "../Images3/p (23).jpeg";
// import p24 from "../Images3/p (24).jpeg";
// import p25 from "../Images3/p (25).jpeg";
// import p26 from "../Images3/p (26).jpeg";
// import p27 from "../Images3/p (27).jpeg";
// import p28 from "../Images3/p (28).jpeg";
// import p29 from "../Images3/p (29).jpeg";
// import p30 from "../Images3/p (30).jpeg";
// import p31 from "../Images3/p (31).jpeg";
// import p32 from "../Images3/p (32).jpeg";
// import p33 from "../Images3/p (33).jpeg";
// import p34 from "../Images3/p (34).jpeg";
// import p35 from "../Images3/p (35).jpeg";
// import p36 from "../Images3/p (36).jpeg";
// import p37 from "../Images3/p (37).jpeg";
// import p38 from "../Images3/p (38).jpeg";
// import p39 from "../Images3/p (39).jpeg";
// import p40 from "../Images3/p (40).jpeg";
// import p41 from "../Images3/p (41).jpeg";
// import p42 from "../Images3/p (42).jpeg";
// import p43 from "../Images3/p (43).jpeg";
// import p44 from "../Images3/p (44).jpeg";
// import p45 from "../Images3/p (45).jpeg";
// import p46 from "../Images3/p (46).jpeg";
// import p47 from "../Images3/p (47).jpeg";
// import p48 from "../Images3/p (48).jpeg";
// import p49 from "../Images3/p (49).jpeg";
// import p50 from "../Images3/p (50).jpeg";
// import p51 from "../Images3/p (51).jpeg";
// import p52 from "../Images3/p (52).jpeg";
// import p53 from "../Images3/p (53).jpeg";
// import p54 from "../Images3/p (54).jpeg";
// import p55 from "../Images3/p (55).jpeg";
// import p56 from "../Images3/p (56).jpeg";
// import p57 from "../Images3/p (57).jpeg";
// import p58 from "../Images3/p (58).jpeg";
// import p59 from "../Images3/p (59).jpeg";
// import p60 from "../Images3/p (60).jpeg";
// import p61 from "../Images3/p (61).jpeg";
// import p62 from "../Images3/p (62).jpeg";
// import p63 from "../Images3/p (63).jpeg";
// import p64 from "../Images3/p (64).jpeg";
// import p65 from "../Images3/p (65).jpeg";
// import p66 from "../Images3/p (66).jpeg";
// import p67 from "../Images3/p (67).jpeg";
// import p68 from "../Images3/p (68).jpeg";
// import p69 from "../Images3/p (69).jpeg";
// import p70 from "../Images3/p (70).jpeg";
// import p71 from "../Images3/p (71).jpeg";
// import p72 from "../Images3/p (72).jpeg";
// import p73 from "../Images3/p (73).jpeg";
// import p74 from "../Images3/p (74).jpeg";
// import p75 from "../Images3/p (75).jpeg";
// import p76 from "../Images3/p (76).jpeg";
// import p77 from "../Images3/p (77).jpeg";
// import p78 from "../Images3/p (78).jpeg";
// import p79 from "../Images3/p (79).jpeg";




// // Hero Colors
// const primaryGreen = "#008000";
// const primaryOrange = "#ff6600";



// const Hero = styled.section`
//   width: 100%;
//   height: 400px;
//   background: url("https://picsum.photos/1200/400") center/cover no-repeat;
//   border-radius: 16px;
//   margin-bottom: 3rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   overflow: hidden;
// `;

// const HeroOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.4);
// `;

// const HeroText = styled.h1`
//   position: relative;
//   color: #fff;
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   z-index: 1;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 3rem 1.5rem;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// `;

// const Title = styled.h2`
//   color: ${primaryGreen};
//   text-align: center;
//   margin-bottom: 2rem;
//   font-size: 2.2rem;
// `;

// const GalleryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 1.5rem;
// `;

// const Card = styled.div`
//   background: #fff;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
//   object-position:top;
// `;

// const Caption = styled.div`
//   padding: 0.75rem;
//   text-align: center;
//   font-size: 1rem;
//   font-weight: 500;
//   color: ${primaryOrange};
// `;

// export default function GalleryPage() {
//   // Array of imported images
//   const pictures = [
//     p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
//     p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
//     p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
//     p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
//     p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,
//     p51, p52, p53, p54, p55, p56, p57, p58, p59, p60,
//     p61, p62, p63, p64, p65, p66, p67, p68, p69, p70,
//     p71, p72, p73, p74, p75, p76, p77, p78, p79
//   ].map((src, idx) => ({
//     src,
//     title: `Picture ${idx + 1}`,
//   }));

//   return (
//     <>
//       <Hero>
//         <HeroOverlay />
//         <Fade triggerOnce={false}>
//           <HeroText>Explore Our Gallery</HeroText>
//         </Fade>
//       </Hero>

//       <Container>
//         <Fade cascade triggerOnce={false} damping={0.05}>
//           <Title>Gallery Collection</Title>
//           <GalleryGrid>
//             {pictures.map((pic, idx) => (
//               <Card key={idx}>
//                 <Image src={pic.src} alt={pic.title} />
//                 {/* <Caption>{pic.title}</Caption> */}
//               </Card>
//             ))}
//           </GalleryGrid>
//         </Fade>
//       </Container>
//     </>
//   );
// }





import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// Import images 1–79
import p1 from "../Images3/p (1).jpeg";
import p2 from "../Images3/p (2).jpeg";
import p3 from "../Images3/p (3).jpeg";
import p4 from "../Images3/p (4).jpeg";
import p5 from "../Images3/p (5).jpeg";
import p6 from "../Images3/p (6).jpeg";
import p7 from "../Images3/p (7).jpeg";
import p8 from "../Images3/p (8).jpeg";
import p9 from "../Images3/p (9).jpeg";
import p10 from "../Images3/p (10).jpeg";
import p11 from "../Images3/p (11).jpeg";
import p12 from "../Images3/p (12).jpeg";
import p13 from "../Images3/p (13).jpeg";
import p14 from "../Images3/p (14).jpeg";
import p15 from "../Images3/p (15).jpeg";
import p16 from "../Images3/p (16).jpeg";
import p17 from "../Images3/p (17).jpeg";
import p18 from "../Images3/p (18).jpeg";
import p19 from "../Images3/p (19).jpeg";
import p20 from "../Images3/p (20).jpeg";
import p21 from "../Images3/p (21).jpeg";
import p22 from "../Images3/p (22).jpeg";
import p23 from "../Images3/p (23).jpeg";
import p24 from "../Images3/p (24).jpeg";
import p25 from "../Images3/p (25).jpeg";
import p26 from "../Images3/p (26).jpeg";
import p27 from "../Images3/p (27).jpeg";
import p28 from "../Images3/p (28).jpeg";
import p29 from "../Images3/p (29).jpeg";
import p30 from "../Images3/p (30).jpeg";
import p31 from "../Images3/p (31).jpeg";
import p32 from "../Images3/p (32).jpeg";
import p33 from "../Images3/p (33).jpeg";
import p34 from "../Images3/p (34).jpeg";
import p35 from "../Images3/p (35).jpeg";
import p36 from "../Images3/p (36).jpeg";
import p37 from "../Images3/p (37).jpeg";
import p38 from "../Images3/p (38).jpeg";
import p39 from "../Images3/p (39).jpeg";
import p40 from "../Images3/p (40).jpeg";
import p41 from "../Images3/p (41).jpeg";
import p42 from "../Images3/p (42).jpeg";
import p43 from "../Images3/p (43).jpeg";
import p44 from "../Images3/p (44).jpeg";
import p45 from "../Images3/p (45).jpeg";
import p46 from "../Images3/p (46).jpeg";
import p47 from "../Images3/p (47).jpeg";
import p48 from "../Images3/p (48).jpeg";
import p49 from "../Images3/p (49).jpeg";
import p50 from "../Images3/p (50).jpeg";
import p51 from "../Images3/p (51).jpeg";
import p52 from "../Images3/p (52).jpeg";
import p53 from "../Images3/p (53).jpeg";
import p54 from "../Images3/p (54).jpeg";
import p55 from "../Images3/p (55).jpeg";
import p56 from "../Images3/p (56).jpeg";
import p57 from "../Images3/p (57).jpeg";
import p58 from "../Images3/p (58).jpeg";
import p59 from "../Images3/p (59).jpeg";
import p60 from "../Images3/p (60).jpeg";
import p61 from "../Images3/p (61).jpeg";
import p62 from "../Images3/p (62).jpeg";
import p63 from "../Images3/p (63).jpeg";
import p64 from "../Images3/p (64).jpeg";
import p65 from "../Images3/p (65).jpeg";
import p66 from "../Images3/p (66).jpeg";
import p67 from "../Images3/p (67).jpeg";
import p68 from "../Images3/p (68).jpeg";
import p69 from "../Images3/p (69).jpeg";
import p70 from "../Images3/p (70).jpeg";
import p71 from "../Images3/p (71).jpeg";
import p72 from "../Images3/p (72).jpeg";
import p73 from "../Images3/p (73).jpeg";
import p74 from "../Images3/p (74).jpeg";
import p75 from "../Images3/p (75).jpeg";
import p76 from "../Images3/p (76).jpeg";
import p77 from "../Images3/p (77).jpeg";
import p78 from "../Images3/p (78).jpeg";



import p79 from "../Images3/p (79).jpeg";


import gl from '../Images3/gl.png'

// Hero Colors
const primaryGreen = "#008000";
const primaryOrange = "#ff6600";

const Hero = styled.section`
  width: 100%;
  height: 400px;
  background: url(${gl}) center/cover no-repeat;
  border-radius: 16px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const HeroText = styled.h1`
  position: relative;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  color: ${primaryGreen};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #fff;
//   border-radius: 16px;
  overflow: hidden;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  background-color: #f8f8f8;
`;

const Caption = styled.div`
  padding: 0.75rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: ${primaryOrange};
`;

export default function GalleryPage() {
  


  // Array of imported images
  const pictures = [
    // { src: p1, title: "Picture 1" },
    // { src: p2, title: "Picture 2" },
    // { src: p3, title: "Picture 3" },
    // { src: p4, title: "Picture 4" },
    // { src: p5, title: "Picture 5" },
    // { src: p6, title: "Picture 6" },
    // { src: p7, title: "Picture 7" },
    // { src: p8, title: "Picture 8" },
    { src: p9, title: "Picture 9" },
    { src: p10, title: "Picture 10" },
    { src: p11, title: "Picture 11" },
    { src: p12, title: "Picture 12" },
    // { src: p13, title: "Picture 13" },
    { src: p14, title: "Picture 14" },
    // { src: p15, title: "Picture 15" },
    // { src: p16, title: "Picture 16" },
    // { src: p17, title: "Picture 17" },
    { src: p18, title: "Picture 18" },
    { src: p19, title: "Picture 19" },
    { src: p20, title: "Picture 20" },
    { src: p21, title: "Picture 21" },
    { src: p22, title: "Picture 22" },
    { src: p23, title: "Picture 23" },
    // { src: p24, title: "Picture 24" },
    // { src: p25, title: "Picture 25" },
    // { src: p26, title: "Picture 26" },
    { src: p27, title: "Picture 27" },
    { src: p28, title: "Picture 28" },
    { src: p29, title: "Picture 29" },
    { src: p30, title: "Picture 30" },
    { src: p31, title: "Picture 31" },
    { src: p32, title: "Picture 32" },
    { src: p33, title: "Picture 33" },
    { src: p34, title: "Picture 34" },
    { src: p35, title: "Picture 35" },
    { src: p36, title: "Picture 36" },
    { src: p37, title: "Picture 37" },
    { src: p38, title: "Picture 38" },
    { src: p39, title: "Picture 39" },
    // { src: p40, title: "Picture 40" },
    // { src: p41, title: "Picture 41" },
    { src: p42, title: "Picture 42" },
    // { src: p43, title: "Picture 43" },
    { src: p44, title: "Picture 44" },
    { src: p45, title: "Picture 45" },
    { src: p46, title: "Picture 46" },
    { src: p47, title: "Picture 47" },
    { src: p48, title: "Picture 48" },
    { src: p49, title: "Picture 49" },
    { src: p50, title: "Picture 50" },
    // { src: p51, title: "Picture 51" },
    // { src: p52, title: "Picture 52" },
    { src: p53, title: "Picture 53" },
    // { src: p54, title: "Picture 54" },
    // { src: p55, title: "Picture 55" },
    // { src: p56, title: "Picture 56" },
    { src: p57, title: "Picture 57" },
    { src: p58, title: "Picture 58" },
    { src: p59, title: "Picture 59" },
    { src: p60, title: "Picture 60" },
    { src: p61, title: "Picture 61" },
    { src: p62, title: "Picture 62" },
    // { src: p63, title: "Picture 63" },
    { src: p64, title: "Picture 64" },
    // { src: p65, title: "Picture 65" },
    { src: p66, title: "Picture 66" },
    { src: p67, title: "Picture 67" },
    { src: p68, title: "Picture 68" },
    // { src: p69, title: "Picture 69" },
    // { src: p70, title: "Picture 70" },
    { src: p71, title: "Picture 71" },
    { src: p72, title: "Picture 72" },
    { src: p73, title: "Picture 73" },
    // { src: p74, title: "Picture 74" },
    { src: p75, title: "Picture 75" },
    { src: p76, title: "Picture 76" },
    { src: p77, title: "Picture 77" },
    { src: p78, title: "Picture 78" },
    // { src: p79, title: "Picture 79" },
  ];


const pictures2 = [
  { src: p1, title: "Picture 1" },
  { src: p2, title: "Picture 2" },
  { src: p3, title: "Picture 3" },
  { src: p4, title: "Picture 4" },
  { src: p5, title: "Picture 5" },
  { src: p6, title: "Picture 6" },
  { src: p7, title: "Picture 7" },
  { src: p8, title: "Picture 8" },
  { src: p13, title: "Picture 13" },
  { src: p15, title: "Picture 15" },
  { src: p16, title: "Picture 16" },
  { src: p17, title: "Picture 17" },
  { src: p24, title: "Picture 24" },
  { src: p25, title: "Picture 25" },
  { src: p26, title: "Picture 26" },
  { src: p40, title: "Picture 40" },
  { src: p41, title: "Picture 41" },
  { src: p43, title: "Picture 43" },
  { src: p51, title: "Picture 51" },
  { src: p52, title: "Picture 52" },
  { src: p54, title: "Picture 54" },
  { src: p55, title: "Picture 55" },
  { src: p56, title: "Picture 56" },
  { src: p63, title: "Picture 63" },
  { src: p65, title: "Picture 65" },
  { src: p69, title: "Picture 69" },
  { src: p70, title: "Picture 70" },
  { src: p74, title: "Picture 74" },
  { src: p79, title: "Picture 79" },
];




  return (
    <>
      <Hero>
        <HeroOverlay />
        <Fade triggerOnce={false}>
          <HeroText>Explore Our Gallery</HeroText>
        </Fade>
      </Hero>

      <Container>
        <Fade cascade triggerOnce={false} damping={0.05}>
          <Title>Gallery Collection</Title>
          <GalleryGrid>
            {pictures.map((pic, idx) => (
              <Card key={idx}>
                <Image src={pic.src} alt={pic.title} />
                  {/* <Caption>{pic.title}</Caption> */}
              </Card>
            ))}
          </GalleryGrid>
        </Fade>
<br/>
<br/>
         <Fade cascade triggerOnce={false} damping={0.05}>
  
          <GalleryGrid>
            {pictures2.map((pic, idx) => (
              <Card key={idx}>
                <Image src={pic.src} alt={pic.title} />
                  {/* <Caption>{pic.title}</Caption> */}
              </Card>
            ))}
          </GalleryGrid>
        </Fade>
      </Container>
    </>
  );
}