// import React from 'react';
// import styled from 'styled-components';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
// import { Fade, Slide } from 'react-awesome-reveal';
// import { FaDownload } from 'react-icons/fa';

// // Import local or placeholder images for the hero and PDF previews.
// // You'll need to replace these with your actual image paths.
// import HeroImage from '../Images/b8.jpg';
// import PDFPreview1 from '../Images/b1.png';
// import PDFPreview2 from '../Images/b2.png';
// import PDFPreview3 from '../Images/b3.png';
// import PDFPreview4 from '../Images/b4.png';
// import PDFPreview5 from '../Images/b5.png';
// import PDFPreview6 from '../Images/b6.png';
// import PDFPreview7 from '../Images/b7.png';


// import pdf1 from '../Images/NISEB BULLETIN APRIL. 2022.pdf'
// import pdf2 from '../Images/41348091A737FBE5.pdf'
// import pdf3 from '../Images/890BC12408B82DF5.pdf'
// import pdf4 from '../Images/CFF6EF553FCF3815.pdf'
// import pdf5 from '../Images/90A8934FC3C0F441.pdf'
// import pdf6 from '../Images/NISEB February 2023.pdf'
// import pdf7 from '../Images/NISEB_BULLETIN_OCTOBER_2023.pdf'

// // --- Styled Components ---

// const PageContainer = styled.div`
//   background-color: #f0fdf4; /* A very light green for the background */
//   font-family: 'Arial', sans-serif;
//   color: #333;
//   line-height: 1.6;
//   overflow-x: hidden;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 4rem 2rem;
// `;

// const HeroContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 60vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: #fff;
//   overflow: hidden;
//   margin-bottom: 3rem;
//   // padding-top:50px;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url(${HeroImage});
//   background-size: cover;
//   background-position: center;
//   filter: brightness(0.6);
//   z-index: 1;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 128, 0, 0.4); /* Green overlay */
//   z-index: 2;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 3; /* This ensures the content is on top of the overlay and background */
//   padding: 2rem;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//   /* The z-index here is no longer needed as the parent has it */
// `;

// const PublicationsSection = styled.section`
//   padding: 2rem 0;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2.5rem;
//   color: #008000; /* Pure green */
//   border-bottom: 2px solid #ffa500; /* Pure orange */
//   padding-bottom: 0.5rem;
//   margin-bottom: 2rem;
//   text-align: center;
//   display: inline-block;
//   margin-left: auto;
//   margin-right: auto;
// `;


// const StyledCarousel = styled(Carousel)`
//   .carousel-root {
//     .carousel {
//       overflow: visible; /* To allow center mode items to be visible */
//     }
//   }

//   .carousel-slider {
//     padding: 0 30px; /* Add padding to see side slides */
//     box-sizing: border-box;
//   }

//   .slide {
//     background: #fff;
//     border-radius: 10px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     transform: scale(0.85);
//     transition: transform 0.3s ease-in-out;
//   }

//   .slide.selected {
//     transform: scale(1);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
//   }

//   .slide img {
//     max-height: 250px;
//     width: 200px;
//     object-fit: contain;
//     margin-bottom: 1rem;
//     border: 1px solid #ddd;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
//     cursor: pointer;
//     transition: transform 0.3s ease-in-out;

//     &:hover {
//       transform: scale(1.02);
//     }
//   }

//   .carousel-status {
//     display: flex; /* Hide status to simplify UI */
//     font-size:2rem;
//     color:green;
//   }

//   .control-dots {
//     margin-top: 1.5rem;
//   }

//   .control-dots .dot {
//     background: #e0e0e0;
//     box-shadow: none;
//     transition: background 0.3s ease-in-out;
//   }

//   .control-dots .dot.selected {
//     background: #ffa500; /* Orange dot */
//   }

//   /* --- The key change to make arrows always visible --- */
//   .control-arrow,{
//  background: rgba(0, 0, 0, 0.3); /* A slightly darker background */
//     border-radius: 10px;
//     padding:2rem;
//   }
//   .control-arrow:hover {
//     background: rgba(0, 0, 0, 0.5); /* A slightly darker background */
//     // border-radius: 50%;
//     opacity: 1 !important; /* Forces the opacity to be always 1 */
//     transition: all 0.3s ease-in-out;
//     // font-size:2rem;
//   }
// `;



// const PublicationInfo = styled.div`
//   text-align: center;
// `;

// const PublicationTitle = styled.h3`
//   font-size: 1.2rem;
//   color: #333;
//   margin-bottom: 0.5rem;
// `;

// const PublicationDate = styled.p`
//   font-size: 0.9rem;
//   color: #777;
//   margin-bottom: 1rem;
// `;

// const LinkContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   justify-content: center;
//   align-items: center;
// `;

// const DownloadLink = styled.a`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.7rem 1.5rem;
//   background-color: #008000; /* Green download button */
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
//   font-weight: bold;
//   transition: background-color 0.3s ease-in-out;

//   &:hover {
//     background-color: #006400; /* Darker green on hover */
//   }
// `;

// const OpenPdfLink = styled.a`
//   display: inline-block;
//   color: #ffa500; /* Orange view link */
//   text-decoration: none;
//   font-weight: bold;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #ff8c00; /* Darker orange on hover */
//     text-decoration: underline;
//   }
// `;

// const publications = [
//   {
//     title: 'NISEB Newsletter - May 2019',
//     date: 'May, 2019',
//     previewImage: PDFPreview1,
//     pdfUrl: pdf1, // Example PDF URL
//   },
//   {
//     title: 'NISEB Newsletter - July 2019',
//     date: 'July, 2019',
//     previewImage: PDFPreview2,
//     pdfUrl: pdf2,
//   },
//   {
//     title: 'NISEB Newsletter - May 2019',
//     date: 'May, 2019',
//     previewImage: PDFPreview3,
//     pdfUrl: pdf3,
//   },
//   {
//     title: 'NISEB Newsletter - July 2019',
//     date: 'July 2019',
//     previewImage: PDFPreview4,
//     pdfUrl: pdf4,
//   },
//   {
//     title: 'NISEB Newsletter - October 2019',
//     date: 'October, 2019',
//     previewImage: PDFPreview5,
//     pdfUrl: pdf5,
//   },
//   {
//     title: 'NISEB Newsletter - February 2023',
//     date: 'February, 2023',
//     previewImage: PDFPreview6,
//     pdfUrl: pdf6,
//   },
//    {
//     title: 'NISEB Newsletter - October 2023',
//     date: 'October, 2023',
//     previewImage: PDFPreview7,
//     pdfUrl: pdf7,
//   },
// ];

// const BulletinPage = () => {
//   return (
//     <PageContainer>
//       {/* --- Hero Section --- */}
//       <HeroContainer>
//         <BackgroundImage />
//         <Overlay />
//         <HeroContent> {/* Add a wrapper for the content */}
//           <Slide direction='right' duration={2000} triggerOnce={false}>
//             <HeroTitle>- NISEB Bulletin and Articles -</HeroTitle>
//           </Slide>
//         </HeroContent>
//       </HeroContainer>

//       <ContentWrapper>
//         <PublicationsSection>
//           <Slide direction='right' duration={2000} triggerOnce={false}>
//             <SectionTitle>Our Latest Publications</SectionTitle>
//           </Slide>
//           <Fade duration={3000} delay={500} triggerOnce={false}>
//             <StyledCarousel 
//               showArrows={true} 
//               showStatus={true} 
//               showThumbs={true} 
//               infiniteLoop={true}
//               autoPlay={true} // Enabled automatic play
//               interval={2000} // Set interval to 5 seconds
//               centerMode={true} // Enabled center mode
//               centerSlidePercentage={33.3} // Show ~3 items at a time
//               swipeable={true}
//               pauseOnHover={false} 
//             >
//               {publications.map((publication, index) => (
//                 <div key={index}>
//                   <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
//                     <img src={publication.previewImage} alt={publication.title} />
//                   </a>
//                   <PublicationInfo>
//                     <PublicationTitle>{publication.title}</PublicationTitle>
//                     <PublicationDate>{publication.date}</PublicationDate>
//                     <LinkContainer>
//                       <DownloadLink href={publication.pdfUrl} download>
//                         <FaDownload /> Download
//                       </DownloadLink>
//                       <OpenPdfLink href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
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



import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

// PDFs
import pdf1 from '../Images/NISEB BULLETIN APRIL. 2022.pdf';
import pdf2 from '../Images/41348091A737FBE5.pdf';
import pdf3 from '../Images/890BC12408B82DF5.pdf';
import pdf4 from '../Images/CFF6EF553FCF3815.pdf';
import pdf5 from '../Images/90A8934FC3C0F441.pdf';
import pdf6 from '../Images/NISEB February 2023.pdf';
import pdf7 from '../Images/NISEB_BULLETIN_OCTOBER_2023.pdf';

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

/* Carousel skin */
const StyledCarousel = styled(Carousel)`
  .carousel-slider {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .slide {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 1rem;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: scale(0.92);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .slide.selected {
    transform: scale(1);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }

  .slide img {
    width: 100%;
    height: auto;
    max-height: 260px;
    object-fit: contain;
    margin-bottom: 0.75rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    cursor: pointer;
    transition: transform 0.25s ease-in-out;
  }
  .slide img:hover { transform: scale(1.015); }

  /* dots */
  .control-dots {
    margin-top: 1rem;
  }
  .control-dots .dot {
    background: #e0e0e0;
    box-shadow: none;
  }
  .control-dots .dot.selected {
    background: #ffa500;
  }

  /* arrows */
  .control-arrow {
    background: rgba(0, 0, 0, 0.5) !important;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    opacity: 1 !important;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-top:100px !important;
    // color:red !important;
    transition: transform 0.25s ease-in-out, background 0.25s ease-in-out;
  }

  .control-arrow:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }


   .carousel-status {
     display: flex; /* Hide status to simplify UI */
     font-size:2rem;
     color:green;
   }

  @media (max-width: 767px) {
    .control-arrow {
      width: 36px;
      height: 36px;
      font-size: 1.2rem;
    }
  }
`;

/* ========================= Info Components ========================= */

const PublicationInfo = styled.div`
  text-align: center;
  width: 100%;
  max-width: 320px;
`;

const PublicationTitle = styled.h3`
  font-size: clamp(1rem, 2.8vw, 1.15rem);
  color: #111827;
  margin: 0.25rem 0 0.25rem 0;
  font-weight: 700;
`;

const PublicationDate = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 0.75rem 0;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`;

const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  line-height: 1;
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;
  will-change: transform;
  white-space: nowrap;

  &:active { transform: translateY(1px); }
`;

const DownloadLink = styled(ButtonBase)`
  background-color: #008000;
  color: #fff;
  box-shadow: 0 3px 10px rgba(0,128,0,0.18);
  &:hover { background-color: #006400; }
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
];

/* ========================= Helpers ========================= */

function getCenterSlidePercentage(width) {
  if (width < 600) return 100;
  if (width < 992) return 50;
  return 33.3;
}

function getShowThumbs(width) {
  return width >= 992;
}

/* ========================= Component ========================= */

const BulletinPage = () => {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    let frame;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setViewportWidth(window.innerWidth));
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const centerSlidePercentage = useMemo(
    () => getCenterSlidePercentage(viewportWidth),
    [viewportWidth]
  );
  const showThumbs = useMemo(() => getShowThumbs(viewportWidth), [viewportWidth]);

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
            <StyledCarousel
              showStatus={true}
              showThumbs={showThumbs}
              infiniteLoop
              autoPlay
              interval={3000}
              stopOnHover
              swipeable
              emulateTouch
              useKeyboardArrows
              centerMode
              centerSlidePercentage={centerSlidePercentage}
              dynamicHeight={false}
              showArrows={true}
              renderArrowPrev={(onClickHandler, _hasPrev, label) => (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="control-arrow control-prev"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
              )}
              renderArrowNext={(onClickHandler, _hasNext, label) => (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="control-arrow control-next"
                  aria-label="Next slide"
                >
                  ›
                </button>
              )}
            >
              {publications.map((publication, index) => (
                <div key={index}>
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${publication.title}`}
                  >
                    <img
                      src={publication.previewImage}
                      alt={publication.title}
                      loading="lazy"
                      draggable={false}
                    />
                  </a>

                  <PublicationInfo>
                    <PublicationTitle>{publication.title}</PublicationTitle>
                    <PublicationDate>{publication.date}</PublicationDate>

                    <LinkContainer>
                      <DownloadLink href={publication.pdfUrl} download>
                        <FaDownload aria-hidden="true" /> Download
                      </DownloadLink>

                      <OpenPdfLink
                        href={publication.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Full PDF
                      </OpenPdfLink>
                    </LinkContainer>
                  </PublicationInfo>
                </div>
              ))}
            </StyledCarousel>
          </Fade>
        </PublicationsSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default BulletinPage;
