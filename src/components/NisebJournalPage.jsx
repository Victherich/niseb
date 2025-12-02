
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* ==============
   Theme & Layout
   ============== */
const Page = styled.div`

  background: linear-gradient(135deg, #fff6f6, #fffaf0);
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
  background: linear-gradient(90deg, #0b0b0b, #1a0b0f); /* dark hero */
  color: #f6efe6;
  text-align: center;
  padding: 80px 20px;
  border-bottom: 6px solid #6b0f12; /* subtle burgundy accent */
`;

const HeroTitle = styled.h1`
  font-size: 34px;
  margin: 0 0 12px;
  color: #f6efe6;
`;

const HeroLead = styled.p`
  max-width: 980px;
  margin: 0 auto;
  font-size: 18px;
  color: #f1e9de;
`;

const Section = styled.section`
  margin: 36px 0;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 12px;
  color: #6b0f12; /* burgundy for headings */
`;

const Box = styled.div`
  background: #fff;
  border: 1px solid #efe1dd;
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
  background: #6b0f12; /* burgundy */
  color: #fff7ea;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #51100f;
  }
`;

/* ==============
   Component
   ============== */
export default function NisebJournalPage() {
  const navigate = useNavigate();

  return (
    <>
       <Hero>
        <HeroTitle>Mission Statement – NISEB Journal</HeroTitle>
        <HeroLead>
          The mission of the NISEB Journal is to promote excellence in
          experimental biological sciences by publishing high-quality,
          peer-reviewed research that advances scientific understanding and
          addresses critical challenges in health, agriculture, biotechnology,
          and the environment. The journal is committed to fostering scientific
          integrity, capacity building, and collaboration among researchers in
          Nigeria, Africa, and the global community.
        </HeroLead>
      </Hero>

         <Page>
   

      <Container>
        <Section>
          <SubTitle>Vision Statement – NISEB Journal</SubTitle>
          <Box>
            <Paragraph>
              The vision of the NISEB Journal is to become a leading international
              platform for the dissemination of innovative experimental biology
              research, recognised for its scientific rigor, ethical standards,
              and contribution to solving regional and global biological
              problems. The journal aspires to elevate African scientific
              scholarship and enhance global visibility for groundbreaking
              research emerging from Nigeria and beyond.
            </Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Aim</SubTitle>
          <Box>
            <Paragraph>
              The NISEB Journal aims to publish high-quality, peer-reviewed
              research across the full spectrum of experimental biological
              sciences. The journal provides a platform for sharing impactful
              discoveries that improve scientific knowledge, support innovation,
              and contribute to solutions in health, agriculture, biotechnology,
              and environmental biology.
            </Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Scope</SubTitle>
          <Box>
            <Paragraph>
              The journal welcomes manuscripts that offer novel insights,
              experimental findings, analytical advancements, or methodological
              contributions in areas including:
            </Paragraph>

            <Unordered>
              <Li>
                Molecular biology, biochemistry, genetics and omics sciences
              </Li>
              <Li>
                Microbiology, virology, parasitology and immunology
              </Li>
              <Li>
                Physiology, pharmacology and toxicology
              </Li>
              <Li>
                Environmental biology, ecology and conservation
              </Li>
              <Li>
                Nutrition, food science, agriculture and plant science
              </Li>
              <Li>
                Medical and biomedical sciences
              </Li>
              <Li>
                Biotechnology, bioinformatics and emerging interdisciplinary
                fields
              </Li>
            </Unordered>

            <Paragraph>
              Both local and international submissions are encouraged,
              particularly studies addressing African bioscience challenges with
              global significance. Manuscript types include original research
              articles, reviews, brief reports, methodologies, perspectives and
              letters.
            </Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>NISEB Journal – Author Guidelines</SubTitle>
          <Box>
            <Paragraph>
              Prospective authors are encouraged to submit manuscripts to the
              NISEB Journal. Every submission undergoes an initial editorial
              screening to verify its relevance to the journal’s aims and
              thematic focus. Manuscripts deemed suitable will subsequently
              proceed to external peer evaluation, after which a final decision—acceptance or rejection—will be communicated.
            </Paragraph>

            <Paragraph>
              Prior to submission, authors must secure permission for any
              copyrighted or third-party materials incorporated into the
              manuscript, including images, documents, figures, and datasets.
              All listed authors must consent to authorship and fulfil
              established authorship criteria. Where applicable, studies must
              receive ethical clearance from a recognised ethics committee in
              accordance with national and international regulations.
            </Paragraph>

            <Paragraph>
              Manuscripts that fail to meet essential scholarly or formatting
              requirements may be desk-rejected. Authors should ensure that the
              research design is coherent, the argument logically developed, and
              that both title and abstract are concise, informative, and able to
              stand independently. Adhering to these standards enhances the
              likelihood of securing willing reviewers. Once the manuscript is
              considered ready, kindly review the checklist below.
            </Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Submission Preparation Checklist</SubTitle>
          <Box>
            <Paragraph>Pre-Submission Requirements</Paragraph>

            <Paragraph>All manuscripts must adhere to the following:</Paragraph>
            <List>
              <Li>Confirm relevance to the journal’s scope.</Li>
              <Li>
                Verify originality (not previously published or under review
                elsewhere).
              </Li>
              <Li>
                Review the journal’s publication policies, including funding
                disclosure and academic integrity standards.
              </Li>
              <Li>
                Familiarise yourself with the conflict-of-interest policy;
                complete and upload the Conflict of Interest Declaration Form
                for each author.
              </Li>
              <Li>
                Meet authorship requirements aligned with ICMJE standards:
                <Unordered>
                  <Li>
                    Significant contribution to study conception, methodology,
                    data acquisition, analysis, or interpretation; AND
                  </Li>
                  <Li>
                    Drafting or critically revising the manuscript for
                    intellectual content; AND
                  </Li>
                  <Li>Final approval of the version to be published; AND</Li>
                  <Li>
                    Accountability for the integrity and accuracy of all aspects
                    of the work.
                  </Li>
                </Unordered>
              </Li>
            </List>
          </Box>
        </Section>

        <Section>
          <SubTitle>General Instructions</SubTitle>
          <Box>
            <Paragraph>• Language: British English</Paragraph>
            <Paragraph>• Abstracts: Structured (Background, Methods, Results, Conclusion)</Paragraph>
            <Paragraph>• Formatting:</Paragraph>

            <Unordered>
              <Li>Original Research – 7,500 words</Li>
              <Li>Systematic/Narrative Reviews – 10,000 words</Li>
              <Li>Methodology Papers – 4,000 words</Li>
              <Li>Brief Communications – 2,000 words</Li>
              <Li>Editorials – 4,000 words</Li>
              <Li>Letters to the Editor – 1,500 words</Li>
              <Li>Basic Translational Research – 7,000 words</Li>
            </Unordered>

            <Paragraph>• Text Format: Double-spaced, Times New Roman 12-pt</Paragraph>
            <Paragraph>• Referencing: Vancouver (numerical citation), NLM abbreviations, DOIs where available</Paragraph>
            <Paragraph>• Self-citation: Not more than 20%</Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Submission Procedure</SubTitle>
          <Box>
            <Paragraph>
              All manuscripts must be submitted through the NISEB Journal portal.
              Ensure accurate metadata for all authors (full names,
              affiliations, emails, and ORCID IDs).
            </Paragraph>

            <Paragraph>
              If technical issues arise, contact the editorial office:
              nisebjournal@nisebnigeria.com
            </Paragraph>

            <Paragraph>Editorial decisions—based on reviewer recommendations—are final.</Paragraph>

            <Paragraph>Each submission must include three documents:</Paragraph>

            <List>
              <Li>Title Page (keywords and declarations included)</Li>
              <Li>ICMJE Conflict of Interest Form for every author</Li>
              <Li>
                Blinded Manuscript, including:
                <Unordered>
                  <Li>List of Abbreviations (after Conclusion)</Li>
                  <Li>
                    Tables and Figures placed after the first paragraph where
                    they are cited
                  </Li>
                </Unordered>
              </Li>
            </List>
          </Box>
        </Section>

        <Section>
          <SubTitle>Manuscript Structure by Article Type</SubTitle>
          <Box>
            <Paragraph>Original Research</Paragraph>
            <Unordered>
              <Li>Title</Li>
              <Li>Structured Abstract (≤250 words)</Li>
              <Li>Introduction</Li>
              <Li>Methods</Li>
              <Li>Results</Li>
              <Li>Discussion</Li>
              <Li>Conclusion</Li>
              <Li>Abbreviations</Li>
              <Li>Declarations</Li>
              <Li>References</Li>
            </Unordered>

            <Paragraph>Review Articles</Paragraph>
            <Unordered>
              <Li>Title</Li>
              <Li>Structured Abstract (≤350 words)</Li>
              <Li>Introduction</Li>
              <Li>Synthesis</Li>
              <Li>Conclusion</Li>
              <Li>Abbreviations</Li>
              <Li>Declarations</Li>
              <Li>References</Li>
            </Unordered>

            <Paragraph>Methodological Papers</Paragraph>
            <Paragraph>(Structure identical to Original Research)</Paragraph>

            <Paragraph>Brief Communications</Paragraph>
            <Unordered>
              <Li>Structured Abstract (≤200 words)</Li>
              <Li>Introduction</Li>
              <Li>Methods</Li>
              <Li>Results & Discussion</Li>
              <Li>Conclusion</Li>
              <Li>References</Li>
            </Unordered>

            <Paragraph>Editorials & Perspectives</Paragraph>
            <Unordered>
              <Li>Structured Abstract (≤250 words)</Li>
              <Li>Introduction</Li>
              <Li>Main Text</Li>
              <Li>Conclusion</Li>
              <Li>References</Li>
            </Unordered>

            <Paragraph>Letters to the Editor</Paragraph>
            <Unordered>
              <Li>Structured Abstract (≤200 words)</Li>
              <Li>Introduction</Li>
              <Li>Main Text</Li>
              <Li>Conclusion</Li>
              <Li>References</Li>
            </Unordered>

            <Paragraph>Basic Translational Research</Paragraph>
            <Paragraph>(Same structure as Original Research)</Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Abbreviations</SubTitle>
          <Box>
            <Paragraph>• Define every abbreviation at first use.</Paragraph>
            <Paragraph>
              • Provide a consolidated list using the following format:
            </Paragraph>
            <Paragraph>o WHO: World Health Organisation</Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Declaration Requirements</SubTitle>
          <Box>
            <Paragraph>• Ethics Approval: Provide IRB name and approval number.</Paragraph>
            <Paragraph>• Human Studies: Must comply with the Declaration of Helsinki.</Paragraph>
            <Paragraph>• Animal Studies: Must follow international guidelines (ARRIVE, CIOMS).</Paragraph>
            <Paragraph>• Data Availability: Provide repository link or state “Available on request.”</Paragraph>
            <Paragraph>• Competing Interests: Declare “None” if applicable.</Paragraph>
            <Paragraph>• Funding: Provide full details.</Paragraph>
            <Paragraph>• Author Contributions: Clearly specify roles.</Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Tables and Figures</SubTitle>
          <Box>
            <Paragraph>• Number sequentially; provide descriptive captions.</Paragraph>
            <Paragraph>• Insert after the first paragraph where referenced.</Paragraph>
            <Paragraph>• Acceptable formats: TIFF/PNG/JPEG, minimum 300 DPI.</Paragraph>
            <Paragraph>• Legends must be sufficiently explanatory.</Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Privacy Statement</SubTitle>
          <Box>
            <Paragraph>
              Author names, emails, and related information submitted to this
              journal will be used strictly for editorial and scholarly purposes
              and will not be shared with third parties.
            </Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle>Contact</SubTitle>
          <Box>
            <Paragraph>Dr Abolanle Kayode</Paragraph>
            <Paragraph>Editor-in-Chief</Paragraph>
            <Paragraph>nisebjournal@nisebnigeria.com</Paragraph>
            <Paragraph>www.nisebnigeria.com</Paragraph>
          </Box>
        </Section>

        <Section>
          <SubTitle />
          <Box>
            <Paragraph />
            <FooterNote>
              <Small>
                SUBMIT YOUR ARTICLE HERE
              </Small>
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
