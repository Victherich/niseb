
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* ==============
   Layout & Theme
   ============== */
const Page = styled.div`
  background: linear-gradient(135deg, #f6f9f3, #fffef6);
  color: #111;
  padding: 0 20px;
  line-height: 1.7;
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 36px 0;
`;

const Hero = styled.section`
  background: linear-gradient(90deg, #0a1f0a, #1f3b1f); /* dark hero */
  color: #f2f8ef;
  text-align: center;
  padding: 80px 20px;
  border-bottom: 6px solid #2e662e; /* green accent */
`;

const HeroTitle = styled.h1`
  font-size: 34px;
  margin: 0 0 12px;
`;

const HeroLead = styled.p`
  max-width: 980px;
  margin: 0 auto;
  font-size: 18px;
`;

const Section = styled.section`
  margin: 36px 0;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 12px;
  color: #2e662e;
`;

const Box = styled.div`
  background: #fff;
  border: 1px solid #e0e4dd;
  padding: 22px;
  border-radius: 8px;
  font-size: 16px;
  color: #111;
`;

const Paragraph = styled.p`
  margin: 10px 0;
  white-space: pre-wrap;
`;

const List = styled.ol`
  margin-left: 22px;
  margin-top: 8px;
`;

const Unordered = styled.ul`
  margin-left: 22px;
  margin-top: 8px;
`;

const Li = styled.li`
  margin: 8px 0;
`;

const Small = styled.p`
  margin: 8px 0;
  font-size: 15px;
`;

const FooterNote = styled.div`
  margin-top: 18px;
  font-size: 16px;
`;

const ButtonRow = styled.div`
  margin-top: 18px;
`;

const SubmitButton = styled.button`
  background: #2e662e; /* green */
  color: #f2f8ef;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #1f3b1f;
  }
`;

/* ==============
   Component
   ============== */
export default function BioscienceResearchJournalPage() {
  const navigate = useNavigate();

  return (

    <>
           <Hero>
        <HeroTitle>Welcome to Bioscience Research Journal</HeroTitle>
        <HeroLead>
          A distinguished publication of the Society for Experimental Biology
          of Nigeria (NISEB). We are delighted to introduce the Bioscience
          Research Journal, a premier platform dedicated to advancing knowledge
          and disseminating high-quality research across all disciplines of the
          biosciences.
        </HeroLead>
      </Hero>

        <Page>
   

      <Container>
        {/* About the Journal */}
        <Section>
          <SubTitle>About the Journal</SubTitle>
          <Box>
            <Paragraph>
              The Bioscience Research Journal is a peer reviewed, open-access
              publication committed to showcasing original research that makes
              significant contributions to the growth and development of
              biosciences. Our mission is to foster innovation, encourage
              collaboration, and provide a trusted outlet for impactful
              scientific discoveries.
            </Paragraph>
          </Box>
        </Section>

        {/* Editorial Leadership */}
        <Section>
          <SubTitle>Editorial Leadership</SubTitle>
          <Box>
            <Paragraph>
              The journal is guided by an esteemed editorial board under the
              leadership of Prof. A. A. AbdulRahaman. Our board comprises
              accomplished researchers and subject matter experts from diverse
              fields of biosciences, ensuring that every manuscript undergoes
              rigorous review and meets the highest standards of academic
              excellence, relevance, and integrity.
            </Paragraph>
          </Box>
        </Section>

        {/* Guide for Authors */}
        <Section>
          <SubTitle>Guide for Authors</SubTitle>
          <Box>
            <Paragraph>
              Authors are encouraged to consult our comprehensive Guide to
              Authors below for detailed instructions on manuscript
              preparation, formatting, and submission requirements.
            </Paragraph>
          </Box>
        </Section>

        {/* Submit Your Manuscript */}
        <Section>
          <SubTitle>Submit Your Manuscript</SubTitle>
          <Box>
            <Paragraph>
              Are you ready to share your research with the global scientific
              community? Submit your manuscript today by clicking the submission
              button and become part of the Bioscience Research Journal
              community.
            </Paragraph>

            <Paragraph>
              We look forward to receiving your work and contributing together
              to the advancement of biosciences.
            </Paragraph>

            <Paragraph>Prof. A. A. AbdulRahaman</Paragraph>
            <Paragraph>Editor in Chief</Paragraph>
            <Paragraph>Bioscience Research Journal</Paragraph>
            <Paragraph>brj@nisebnigeria.com</Paragraph>
          </Box>
        </Section>

        {/* Author Guidelines */}
        <Section>
          <SubTitle>Bioscience Research Journal – Author Guidelines</SubTitle>
          <Box>
            <Paragraph>
              The Bioscience Research Journal (BRJ) publishes original research
              articles, reviews, short communications, and perspectives across
              all areas of biological, environmental, agricultural, and
              biomedical sciences. Authors are advised to carefully follow the
              guidelines below to ensure a smooth submission and review process.
            </Paragraph>

            <SubTitle>1. Scope of the Journal</SubTitle>
            <Paragraph>
              BRJ welcomes high-quality manuscripts in the following fields, but
              not limited to:
            </Paragraph>
            <Unordered>
              <Li>Plant and animal sciences</Li>
              <Li>Microbiology, biotechnology, and molecular biology</Li>
              <Li>Ecology, environmental sciences, and climate studies</Li>
              <Li>Agricultural sciences and food technology</Li>
              <Li>Biochemistry, physiology, and biomedical sciences</Li>
              <Li>Conservation biology and biodiversity</Li>
              <Li>Bioinformatics and computational biology</Li>
            </Unordered>

            <SubTitle>2. Manuscript Categories</SubTitle>
            <List>
              <Li>Original Research Articles (3,000–7,000 words)</Li>
              <Li>
                Review Articles (up to 10,000 words) – must provide a
                comprehensive analysis of current knowledge.
              </Li>
              <Li>
                Short Communications (1,500–3,000 words) – concise but complete
                studies.
              </Li>
              <Li>Perspectives/Commentaries (up to 2,500 words).</Li>
            </List>

            <SubTitle>3. Submission Requirements</SubTitle>
            <Unordered>
              <Li>
                Manuscripts must be submitted through the journal’s online
                submission portal or designated email (to be provided).
              </Li>
              <Li>
                Submission implies that the work is original, has not been
                published elsewhere, and is not under consideration by another
                journal.
              </Li>
              <Li>All authors must approve the final version before submission.</Li>
            </Unordered>

            <SubTitle>4. Manuscript Structure</SubTitle>
            <Paragraph>
              All manuscripts should be typed in 12-point Times New Roman,
              double-spaced, with 1-inch margins. Pages should be numbered
              consecutively.
            </Paragraph>

            <SubTitle>4.1 Title Page</SubTitle>
            <Unordered>
              <Li>Manuscript title (concise, informative)</Li>
              <Li>Full names of authors</Li>
              <Li>Institutional affiliations</Li>
              <Li>Corresponding author’s email, phone number, and address</Li>
              <Li>ORCID IDs (optional but encouraged)</Li>
            </Unordered>

            <SubTitle>4.2 Abstract</SubTitle>
            <Unordered>
              <Li>Maximum 250 words</Li>
              <Li>
                Structured (Background, Methods, Results, Conclusion) for
                research articles
              </Li>
              <Li>Unstructured for reviews and short communications</Li>
              <Li>Include 3–6 keywords</Li>
            </Unordered>

            <SubTitle>4.3 Main Text</SubTitle>
            <Paragraph>Original Research Articles should follow this structure:</Paragraph>
            <Unordered>
              <Li>Introduction</Li>
              <Li>Materials and Methods</Li>
              <Li>Results</Li>
              <Li>Discussion</Li>
              <Li>Conclusion</Li>
              <Li>Acknowledgments (optional)</Li>
              <Li>Conflict of Interest Statement</Li>
              <Li>Funding Statement</Li>
            </Unordered>

            <SubTitle>4.4 Tables and Figures</SubTitle>
            <Unordered>
              <Li>Should be placed at the end of the manuscript or uploaded as separate files.</Li>
              <Li>Must be numbered consecutively (Table 1, Figure 1, etc.).</Li>
              <Li>Provide descriptive titles and legends.</Li>
              <Li>Images must be high resolution (minimum 300 dpi).</Li>
            </Unordered>

            <SubTitle>5. Referencing Style</SubTitle>
            <Paragraph>The journal uses the APA 7th edition referencing format.</Paragraph>

            <SubTitle>Examples</SubTitle>
            <Paragraph>Journal article:</Paragraph>
            <Paragraph>Adeniyi, T. A., & Bello, R. (2021). Phytochemical analysis of medicinal plants. Journal of Plant Sciences, 15(3), 120–130.</Paragraph>
            <Paragraph>Book:</Paragraph>
            <Paragraph>Smith, J. (2020). Principles of biotechnology. Academic Press.</Paragraph>
            <Paragraph>Chapter in edited book:</Paragraph>
            <Paragraph>Ojo, K. F. (2019). Advances in microbial enzymes. In I. Adewale (Ed.), Modern microbiology (pp. 55–75). Springer.</Paragraph>
            <Paragraph>Citations in text should follow author–year format (e.g., Aluko & Danmole, 2022).</Paragraph>

            <SubTitle>6. Ethical Considerations</SubTitle>
            <Unordered>
              <Li>
                Studies involving humans or animals must include a statement of
                ethical approval from the appropriate research ethics committee.
              </Li>
              <Li>Authors must declare conflicts of interest.</Li>
              <Li>
                Data fabrication, plagiarism, or manipulation of images will
                result in rejection.
              </Li>
            </Unordered>

            <SubTitle>7. Plagiarism Policy</SubTitle>
            <Paragraph>
              BRJ uses plagiarism detection software. Manuscripts with similarity
              index above 15% (excluding references) may be rejected or returned
              for correction.
            </Paragraph>

            <SubTitle>8. Peer Review Process</SubTitle>
            <Unordered>
              <Li>All submissions undergo double-blind peer review.</Li>
              <Li>At least two expert reviewers evaluate each manuscript.</Li>
              <Li>
                The editorial board may request revisions before a final decision
                is made.
              </Li>
            </Unordered>

            <SubTitle>9. Publication Charges</SubTitle>
            <Paragraph>
              Details of processing and publication fees (if applicable) will be
              communicated on the journal website.
            </Paragraph>

            <SubTitle>10. After Acceptance</SubTitle>
            <Unordered>
              <Li>Authors will receive proofs for minor corrections.</Li>
              <Li>Changes to accepted manuscripts should be minimal.</Li>
              <Li>Final articles will be published online and assigned a DOI.</Li>
            </Unordered>

            <SubTitle>11. Copyright and Licensing</SubTitle>
            <Unordered>
              <Li>Authors retain copyright.</Li>
              <Li>
                Articles are published under the Creative Commons Attribution (CC
                BY) license unless otherwise stated.
              </Li>
              <Li>Authors grant the journal permission to publish and disseminate the work.</Li>
            </Unordered>

            <SubTitle>12. Contact Information</SubTitle>
            <Box>
              <Paragraph>The Editorial Office</Paragraph>
              <Paragraph>Bioscience Research Journal</Paragraph>
              <Paragraph>Email: brj@nisebnigeria.com</Paragraph>
              <Paragraph>Website: www.nisebnigeria.com</Paragraph>
            </Box>
          </Box>
        </Section>

        {/* Submit Button */}
        <Section>
          <Box>
            <FooterNote>
              <Small>SUBMIT YOUR ARTICLE HERE</Small>
              <ButtonRow>
                <SubmitButton onClick={() => navigate("/submitmanuscripts")}>
                  SUBMIT YOUR ARTICLE HERE
                </SubmitButton>
              </ButtonRow>
            </FooterNote>
          </Box>
        </Section>
      </Container>
    </Page>
    </>
  
  );
}
