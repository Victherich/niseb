import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* ================================
   GLOBAL PAGE WRAPPER
================================ */
const Page = styled.div`

  line-height: 1.7;
  color: #111;
  background: linear-gradient(135deg, #e3f2ff, #fff8ec);

  /* Prevent content from touching edges */
  padding: 0 20px;
`;

/* ================================
   CENTERED CONTENT CONTAINER
================================ */
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0;
`;

/* ================================
   HERO HEADER
================================ */
const Hero = styled.section`
  background: linear-gradient(90deg, #003366, #001a33);
  color: #fff;
  text-align: center;
  padding: 80px 20px;
`;

/* ================================
   SECTION HEADERS & TEXT
================================ */
const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
`;

const Intro = styled.p`
  margin: 0 auto 24px;
  max-width: 720px;
  font-size: 18px;
  white-space: pre-wrap;
`;

/* ================================
   SECTION AND CONTENT BLOCKS
================================ */
const Section = styled.section`
  margin: 40px 0;
  
`;

const SubTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 18px;
  color:#003366;
`;

const Guideline = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  padding: 24px;
  border-radius: 8px;
  font-size: 17px;
//   line-height: 1.8;

p{
font-style:italic;
}
`;

const List = styled.ol`
  margin-left: 22px;
  margin-top: 12px;
`;

const ListItem = styled.li`
  margin: 14px 0;
`;

const Small = styled.p`
//   margin: 8px 0;
  font-size: 16px;
`;

/* ================================
   FORM ELEMENTS
================================ */
const UploadArea = styled.form`
  margin-top: 24px;
  display: grid;
  gap: 18px;
`;

const FileInput = styled.input`
  display: block;
`;

const TextArea = styled.textarea`
  min-height: 160px;
  padding: 14px;
  font-family: inherit;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const SubmitButton = styled.button`
  background: #0b5fff;
  color: white;
  border: none;
  padding: 14px 22px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;
  margin-top: 8px;

  &:hover {
    background: #0044cc;
  }
`;

/* ================================
   MAIN COMPONENT
================================ */
export default function BiokemistriSubmissionPage() {
const navigate = useNavigate();

  return (

    <>
     <Hero>
        <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
          Welcome to Biokemistri Journal
        </h1>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px" }}>
          We're excited to introduce you to the Society for Experimental Biology
          of Nigeria (NISEB) Journal, Biokemistri submission page. Biokemistri
          journal is a leading platform for disseminating high-quality research
          in all aspects of Biochemical sciences and Molecular Biology.
        </p>
      </Hero>

       <Page>
      {/* =============================
          HERO SECTION
      ============================== */}
     

      <Container>
        {/* =============================
            INTRO SECTION
        ============================== */}
   

        {/* =============================
            ABOUT JOURNAL
        ============================== */}
        <Section>
          <SubTitle>About the Journal</SubTitle>
          <Guideline>
            {`BIOKEMISTRI is a peer-reviewed journal of NISEB committed to publishing original research that contributes significantly to the advancement of Biochemical sciences and Molecular Biology.`}
          </Guideline>
        </Section>

        {/* =============================
            GUIDE TO AUTHORS
        ============================== */}
        <Section>
          <SubTitle>Guide to Authors</SubTitle>
          <Guideline>
            {`For detailed guidelines on manuscript preparation and submission:`}

            <List>
              <ListItem>
                {`Manuscript Format:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- Font: Times New Roman, 12 points</Small>
                  <Small>- Line spacing: Double</Small>
                  <Small>- Margin: 1 inch on all sides</Small>
                  <Small>- File format: Microsoft Word (.docx)</Small>
                </div>
              </ListItem>

              <ListItem>
                {`Title Page:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- Title: Centered, bold, uppercase</Small>
                  <Small>- Author's name and affiliation: Centered, below title</Small>
                  <Small>- Corresponding author's email: Below affiliation</Small>
                </div>
              </ListItem>

              <ListItem>
                {`Abstract:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- 200-250 words</Small>
                  <Small>- Include methodology, results, and conclusions</Small>
                </div>
              </ListItem>

              <ListItem>
                {`Keywords:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- 4-6 relevant keywords</Small>
                  <Small>- Separate with commas</Small>
                </div>
              </ListItem>

              <ListItem>
                {`Main Text:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- Introduction</Small>
                  <Small>- Methodology</Small>
                  <Small>- Results</Small>
                  <Small>- Discussion</Small>
                  <Small>- Conclusion</Small>
                  <Small>- References</Small>
                </div>
              </ListItem>

              <ListItem>
                {`References:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- Follow APA 7th edition style</Small>
                  <Small>- Cite sources in text and list them at the end</Small>
                </div>
              </ListItem>

              <ListItem>
                {`Figures and Tables:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- Number consecutively</Small>
                  <Small>- Caption below figure/table</Small>
                  <Small>- High-resolution images (300 dpi)</Small>
                </div>
              </ListItem>

               <ListItem>
                {`Submissions:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- Attach manuscript and cover letter below</Small>
              
                </div>
              </ListItem>

              <ListItem>
                {`Cover Letter:`}
                <div style={{ marginLeft: 12 }}>
                  <Small>- Introduce yourself and your research</Small>
              <Small>- Confirm originality and authorship</Small>
              <Small>- Confirm submission to Biokemistri Journal</Small>
                </div>
              </ListItem>



              
  
            </List>

              {/* ---- NEW REQUIRED TEXT ---- */}
    <Small style={{ marginTop: 16,fontWeight:"bold", fontStyle:"initial" }}>{`We look forward to reviewing your work!`}</Small>

    <p style={{ marginTop: 0}}>{`The Editorial Office`}</p>
    <p>{`Biokemistri Journal`}</p>
    <p>{`Email: info@nisebnigeria.com`}</p>
    <p>{`Website: www.nisebnigeria.com`}</p>
    {/* --------------------------- */}
          </Guideline>
        </Section>

        {/* =============================
            SUBMISSION SECTION
        ============================== */}
        <Section>
          <SubTitle>Submit Your Manuscript</SubTitle>
          <Guideline>
            <Small>Ready to share your research? </Small>
<SubmitButton onClick={()=>navigate("/submitmanuscripts")}>SUBMIT YOUR ARTICLE HERE</SubmitButton>
          </Guideline>
        </Section>
      </Container>
    </Page>
    </>
   
  );
}
