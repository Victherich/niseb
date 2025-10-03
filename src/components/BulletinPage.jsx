

// import React, { useEffect, useMemo, useState } from 'react';
// import styled from 'styled-components';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Fade, Slide } from 'react-awesome-reveal';
// import { FaDownload } from 'react-icons/fa';

// // Images
// import HeroImage from '../Images/b8.jpg';
// import PDFPreview1 from '../Images/b1.png';
// import PDFPreview2 from '../Images/b2.png';
// import PDFPreview3 from '../Images/b3.png';
// import PDFPreview4 from '../Images/b4.png';
// import PDFPreview5 from '../Images/b5.png';
// import PDFPreview6 from '../Images/b6.png';
// import PDFPreview7 from '../Images/b7.png';
// import PDFPreview8 from '../Images/b8.png';
// import PDFPreview9 from '../Images/b9.png';


// // PDFs
// import pdf1 from '../Images/NISEB BULLETIN APRIL. 2022.pdf';
// import pdf2 from '../Images/41348091A737FBE5.pdf';
// import pdf3 from '../Images/890BC12408B82DF5.pdf';
// import pdf4 from '../Images/CFF6EF553FCF3815.pdf';
// import pdf5 from '../Images/90A8934FC3C0F441.pdf';
// import pdf6 from '../Images/NISEB February 2023.pdf';
// import pdf7 from '../Images/NISEB_BULLETIN_OCTOBER_2023.pdf';
// import pdf8 from '../Images/NISEB BULLETIN MAY, 2024.pdf'
// import pdf9 from '../Images/NISEB BULLETIN FEBRUARY, 2025_1-compressed.pdf'

// /* ========================= Styled Components ========================= */

// const PageContainer = styled.div`
//   background-color: #f0fdf4;
//   font-family: 'Arial', sans-serif;
//   color: #333;
//   line-height: 1.6;
//   overflow-x: hidden;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem 1rem;

//   @media (min-width: 768px) {
//     padding: 4rem 2rem;
//   }
// `;

// const HeroContainer = styled.header`
//   position: relative;
//   width: 100%;
//   height: clamp(40vh, 55vh, 65vh);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: #fff;
//   overflow: hidden;
//   margin-bottom: 2rem;

//   @media (min-width: 768px) {
//     margin-bottom: 3rem;
//   }
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   inset: 0;
//   background-image: url(${HeroImage});
//   background-size: cover;
//   background-position: center;
//   filter: brightness(0.6);
//   z-index: 1;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background-color: rgba(0, 128, 0, 0.4);
//   z-index: 2;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 3;
//   padding: 1rem;
// `;

// const HeroTitle = styled.h1`
//   font-size: clamp(1.8rem, 5vw, 3rem);
//   font-weight: 800;
//   letter-spacing: 0.5px;
//   margin: 0;
//   text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
// `;

// const PublicationsSection = styled.section`
//   padding: 1rem 0;

//   @media (min-width: 768px) {
//     padding: 2rem 0;
//   }
// `;

// const SectionTitleWrap = styled.div`
//   display: grid;
//   place-items: center;
// `;

// const SectionTitle = styled.h2`
//   font-size: clamp(1.4rem, 4vw, 2.2rem);
//   color: #008000;
//   border-bottom: 2px solid #ffa500;
//   padding-bottom: 0.4rem;
//   margin: 0 0 1.5rem 0;
//   display: inline-block;
//   text-align: center;

//   @media (min-width: 768px) {
//     margin-bottom: 2rem;
//   }
// `;

// /* Carousel skin */
// const StyledCarousel = styled(Carousel)`
//   .carousel-slider {
//     padding: 0 16px;
//     box-sizing: border-box;
//   }

//   .slide {
//     background: #fff;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//     padding: 1rem;
//     display: flex !important;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-start;
//     transform: scale(0.92);
//     transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   }

//   .slide.selected {
//     transform: scale(1);
//     box-shadow: 0 8px 24px rgba(0,0,0,0.12);
//   }

//   .slide img {
//     width: 100%;
//     height: auto;
//     max-height: 260px;
//     object-fit: contain;
//     margin-bottom: 0.75rem;
//     border: 1px solid #e5e7eb;
//     box-shadow: 0 2px 5px rgba(0,0,0,0.05);
//     cursor: pointer;
//     transition: transform 0.25s ease-in-out;
//   }
//   .slide img:hover { transform: scale(1.015); }

//   /* dots */
//   .control-dots {
//     margin-top: 1rem;
//   }
//   .control-dots .dot {
//     background: #e0e0e0;
//     box-shadow: none;
//   }
//   .control-dots .dot.selected {
//     background: #ffa500;
//   }

//   /* arrows */
//   .control-arrow {
//     background: rgba(0, 0, 0, 0.5) !important;
//     border-radius: 50%;
//     width: 45px;
//     height: 45px;
//     opacity: 1 !important;
//     z-index: 10;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.5rem;
//     margin-top:100px !important;
//     // color:red !important;
//     transition: transform 0.25s ease-in-out, background 0.25s ease-in-out;
//   }

//   .control-arrow:hover {
//     background: rgba(0, 0, 0, 0.9);
//     transform: scale(1.1);
//   }


//    .carousel-status {
//      display: flex; /* Hide status to simplify UI */
//      font-size:2rem;
//      color:green;
//    }

//   @media (max-width: 767px) {
//     .control-arrow {
//       width: 36px;
//       height: 36px;
//       font-size: 1.2rem;
//     }
//   }
// `;

// /* ========================= Info Components ========================= */

// const PublicationInfo = styled.div`
//   text-align: center;
//   width: 100%;
//   max-width: 320px;
// `;

// const PublicationTitle = styled.h3`
//   font-size: clamp(1rem, 2.8vw, 1.15rem);
//   color: #111827;
//   margin: 0.25rem 0 0.25rem 0;
//   font-weight: 700;
// `;

// const PublicationDate = styled.p`
//   font-size: 0.9rem;
//   color: #6b7280;
//   margin: 0 0 0.75rem 0;
// `;

// const LinkContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.75rem;
//   justify-content: center;
//   align-items: center;
// `;

// const ButtonBase = styled.a`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.6rem 1.1rem;
//   border-radius: 8px;
//   font-weight: 700;
//   text-decoration: none;
//   line-height: 1;
//   transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;
//   will-change: transform;
//   white-space: nowrap;

//   &:active { transform: translateY(1px); }
// `;

// const DownloadLink = styled(ButtonBase)`
//   background-color: #008000;
//   color: #fff;
//   box-shadow: 0 3px 10px rgba(0,128,0,0.18);
//   &:hover { background-color: #006400; }
// `;

// const OpenPdfLink = styled(ButtonBase)`
//   background-color: #fff7ed;
//   color: #c2410c;
//   border: 1px solid #fed7aa;
//   &:hover {
//     background-color: #ffedd5;
//     color: #9a3412;
//   }
// `;

// /* ========================= Data ========================= */

// const publications = [
//   { title: 'NISEB Newsletter - May 2019',     date: 'May, 2019',      previewImage: PDFPreview1, pdfUrl: pdf1 },
//   { title: 'NISEB Newsletter - July 2019',    date: 'July, 2019',     previewImage: PDFPreview2, pdfUrl: pdf2 },
//   { title: 'NISEB Newsletter - May 2019',     date: 'May, 2019',      previewImage: PDFPreview3, pdfUrl: pdf3 },
//   { title: 'NISEB Newsletter - July 2019',    date: 'July, 2019',     previewImage: PDFPreview4, pdfUrl: pdf4 },
//   { title: 'NISEB Newsletter - October 2019', date: 'October, 2019',  previewImage: PDFPreview5, pdfUrl: pdf5 },
//   { title: 'NISEB Newsletter - February 2023',date: 'February, 2023', previewImage: PDFPreview6, pdfUrl: pdf6 },
//   { title: 'NISEB Newsletter - October 2023', date: 'October, 2023',  previewImage: PDFPreview7, pdfUrl: pdf7 },
// { title: 'NISEB Newsletter - May 2024',date: 'May, 2024', previewImage: PDFPreview8, pdfUrl: pdf8 },
//   { title: 'NISEB Newsletter - February 2025', date: 'February, 2025',  previewImage: PDFPreview9, pdfUrl: pdf9 },

// ];

// /* ========================= Helpers ========================= */

// function getCenterSlidePercentage(width) {
//   if (width < 600) return 100;
//   if (width < 992) return 50;
//   return 33.3;
// }

// function getShowThumbs(width) {
//   return width >= 992;
// }

// /* ========================= Component ========================= */

// const BulletinPage = () => {
//   const [viewportWidth, setViewportWidth] = useState(
//     typeof window !== 'undefined' ? window.innerWidth : 1200
//   );

//   useEffect(() => {
//     let frame;
//     const onResize = () => {
//       cancelAnimationFrame(frame);
//       frame = requestAnimationFrame(() => setViewportWidth(window.innerWidth));
//     };
//     window.addEventListener('resize', onResize, { passive: true });
//     return () => {
//       cancelAnimationFrame(frame);
//       window.removeEventListener('resize', onResize);
//     };
//   }, []);

//   const centerSlidePercentage = useMemo(
//     () => getCenterSlidePercentage(viewportWidth),
//     [viewportWidth]
//   );
//   const showThumbs = useMemo(() => getShowThumbs(viewportWidth), [viewportWidth]);

//   return (
//     <PageContainer>
//       {/* Hero */}
//       <HeroContainer>
//         <BackgroundImage />
//         <Overlay />
//         <HeroContent>
//           <Slide direction="right" duration={1200} triggerOnce>
//             <HeroTitle>- NISEB Bulletin and Articles -</HeroTitle>
//           </Slide>
//         </HeroContent>
//       </HeroContainer>

//       {/* Content */}
//       <ContentWrapper>
//         <PublicationsSection>
//           <SectionTitleWrap>
//             <Slide direction="up" duration={900} triggerOnce>
//               <SectionTitle>Our Latest Publications</SectionTitle>
//             </Slide>
//           </SectionTitleWrap>

//           <Fade duration={900} delay={150} triggerOnce>
//             <StyledCarousel
//               showStatus={true}
//               showThumbs={showThumbs}
//               infiniteLoop
//               autoPlay
//               interval={3000}
//               stopOnHover
//               swipeable
//               emulateTouch
//               useKeyboardArrows
//               centerMode
//               centerSlidePercentage={centerSlidePercentage}
//               dynamicHeight={false}
//               showArrows={true}
//               renderArrowPrev={(onClickHandler, _hasPrev, label) => (
//                 <button
//                   type="button"
//                   onClick={onClickHandler}
//                   title={label}
//                   className="control-arrow control-prev"
//                   aria-label="Previous slide"
//                 >
//                   ‹
//                 </button>
//               )}
//               renderArrowNext={(onClickHandler, _hasNext, label) => (
//                 <button
//                   type="button"
//                   onClick={onClickHandler}
//                   title={label}
//                   className="control-arrow control-next"
//                   aria-label="Next slide"
//                 >
//                   ›
//                 </button>
//               )}
//             >
//               {publications.map((publication, index) => (
//                 <div key={index}>
//                   <a
//                     href={publication.pdfUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`Open ${publication.title}`}
//                   >
//                     <img
//                       src={publication.previewImage}
//                       alt={publication.title}
//                       loading="lazy"
//                       draggable={false}
//                     />
//                   </a>

//                   <PublicationInfo>
//                     <PublicationTitle>{publication.title}</PublicationTitle>
//                     <PublicationDate>{publication.date}</PublicationDate>

//                     <LinkContainer>
//                       <DownloadLink href={publication.pdfUrl} download>
//                         <FaDownload aria-hidden="true" /> Download
//                       </DownloadLink>

//                       <OpenPdfLink
//                         href={publication.pdfUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Full PDF
//                       </OpenPdfLink>
//                     </LinkContainer>
//                   </PublicationInfo>
//                 </div>
//               ))}
//             </StyledCarousel>
//           </Fade>
//         </PublicationsSection>
//       </ContentWrapper>
//     </PageContainer>
//   );
// };

// export default BulletinPage;





import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaDownload } from 'react-icons/fa';

// Images
import HeroImage from '../Images/b8.jpg';
import PDFPreview1 from '../Images/b1.png';
import PDFPreview2 from '../Images/b2.png';
import PDFPreview3 from '../Images/b3.png';
import PDFPreview4 from '../Images/b4.png';
import PDFPreview5 from '../Images/b5.png';
import PDFPreview6 from '../Images/b6.png';
import PDFPreview7 from '../Images/b7.png';
import PDFPreview8 from '../Images/b8.png';
import PDFPreview9 from '../Images/b9.png';

// PDFs
import pdf1 from '../Images/NISEB BULLETIN APRIL. 2022.pdf';
import pdf2 from '../Images/41348091A737FBE5.pdf';
import pdf3 from '../Images/890BC12408B82DF5.pdf';
import pdf4 from '../Images/CFF6EF553FCF3815.pdf';
import pdf5 from '../Images/90A8934FC3C0F441.pdf';
import pdf6 from '../Images/NISEB February 2023.pdf';
import pdf7 from '../Images/NISEB_BULLETIN_OCTOBER_2023.pdf';
import pdf8 from '../Images/NISEB BULLETIN MAY, 2024.pdf';
import pdf9 from '../Images/NISEB BULLETIN FEBRUARY, 2025_1-compressed.pdf';

/* ========================= Styled Components ========================= */

const PageContainer = styled.div`
  background-color: #f0fdf4;
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const HeroContainer = styled.header`
  position: relative;
  width: 100%;
  height: clamp(40vh, 55vh, 65vh);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 128, 0, 0.4);
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  padding: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const PublicationsSection = styled.section`
  padding: 1rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionTitleWrap = styled.div`
  display: grid;
  place-items: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  color: #008000;
  border-bottom: 2px solid #ffa500;
  padding-bottom: 0.4rem;
  margin: 0 0 1.5rem 0;
  display: inline-block;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

/* Grid + Cards */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

   @media (max-width: 359px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 220px;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1rem;
  color: #111827;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const PublicationDate = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.15s ease-in-out;
  font-size: 0.85rem;

  &:active {
    transform: translateY(1px);
  }
`;

const DownloadLink = styled(ButtonBase)`
  background-color: #008000;
  color: #fff;
  &:hover {
    background-color: #006400;
  }
`;

const OpenPdfLink = styled(ButtonBase)`
  background-color: #fff7ed;
  color: #c2410c;
  border: 1px solid #fed7aa;
  &:hover {
    background-color: #ffedd5;
    color: #9a3412;
  }
`;

/* ========================= Data ========================= */

const publications = [
  { title: 'NISEB Newsletter - May 2019',     date: 'May, 2019',      previewImage: PDFPreview1, pdfUrl: pdf1 },
  { title: 'NISEB Newsletter - July 2019',    date: 'July, 2019',     previewImage: PDFPreview2, pdfUrl: pdf2 },
  { title: 'NISEB Newsletter - May 2019',     date: 'May, 2019',      previewImage: PDFPreview3, pdfUrl: pdf3 },
  { title: 'NISEB Newsletter - July 2019',    date: 'July, 2019',     previewImage: PDFPreview4, pdfUrl: pdf4 },
  { title: 'NISEB Newsletter - October 2019', date: 'October, 2019',  previewImage: PDFPreview5, pdfUrl: pdf5 },
  { title: 'NISEB Newsletter - February 2023',date: 'February, 2023', previewImage: PDFPreview6, pdfUrl: pdf6 },
  { title: 'NISEB Newsletter - October 2023', date: 'October, 2023',  previewImage: PDFPreview7, pdfUrl: pdf7 },
  { title: 'NISEB Newsletter - May 2024',     date: 'May, 2024',      previewImage: PDFPreview8, pdfUrl: pdf8 },
  { title: 'NISEB Newsletter - February 2025',date: 'February, 2025', previewImage: PDFPreview9, pdfUrl: pdf9 },
];

/* ========================= Component ========================= */

const BulletinPage = () => {
  return (
    <PageContainer>
      {/* Hero */}
      <HeroContainer>
        <BackgroundImage />
        <Overlay />
        <HeroContent>
          <Slide direction="right" duration={1200} triggerOnce>
            <HeroTitle>- NISEB Bulletin and Articles -</HeroTitle>
          </Slide>
        </HeroContent>
      </HeroContainer>

      {/* Content */}
      <ContentWrapper>
        <PublicationsSection>
          <SectionTitleWrap>
            <Slide direction="up" duration={900} triggerOnce>
              <SectionTitle>Our Latest Publications</SectionTitle>
            </Slide>
          </SectionTitleWrap>

          <Fade duration={900} delay={150} triggerOnce>
            <Grid>
              {publications.map((pub, i) => (
                <Card key={i}>
                  <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <img src={pub.previewImage} alt={pub.title} loading="lazy" />
                  </a>
                  <PublicationTitle>{pub.title}</PublicationTitle>
                  <PublicationDate>{pub.date}</PublicationDate>
                  <LinkContainer>
                    <DownloadLink href={pub.pdfUrl} download>
                      <FaDownload /> Download
                    </DownloadLink>
                    <OpenPdfLink href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                      View PDF
                    </OpenPdfLink>
                  </LinkContainer>
                </Card>
              ))}
            </Grid>
          </Fade>
        </PublicationsSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default BulletinPage;

