import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  padding-top: 100px;
`;


const Hero = styled.div`
  width: 100%;
  height: 220px;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 6px;
`;

const HeroSubtitle = styled.p`
  font-size: 14px;
  opacity: 0.85;
`;



const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: green;
`;

const Label = styled.span`
  font-weight: bold;
  color: green;
`;

const Value = styled.span`
  color: #222;
`;

const FileLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: white;
  background: green;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
`;

export default function ManuscriptDetail() {
  const { id } = useParams();
  const [manuscript, setManuscript] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nisebnigeria.com/api_niseb/get_manuscript.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setManuscript(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);



  const getFileUrl = (file) => {
  const baseUrl = `https://nisebnigeria.com/api_niseb/${file}`;

  if (file.toLowerCase().endsWith(".pdf")) {
    return baseUrl; // Browser can open PDF directly
  }

  // Use Google Docs Viewer for DOCX
  return `https://docs.google.com/gview?url=${encodeURIComponent(baseUrl)}&embedded=true`;
};





  if (loading) return <p>Loading manuscript...</p>;
  if (!manuscript) return <p>Manuscript not found.</p>;

  return (
    <>
      {/* DARK HERO SECTION */}
    <Hero>
      <HeroContent>
        <HeroTitle>Manuscript Details</HeroTitle>
        <HeroSubtitle>
          View full submission record and manuscript file
        </HeroSubtitle>
      </HeroContent>
    </Hero>

      <Container>
      <p onClick={()=>window.history.back()} style={{cursor:"pointer", color:"blue"}}>← Back</p>

      <Card>
        <Title>Manuscript Details</Title>
<br/>
        <p><Label>ID:</Label> <Value>{manuscript.manuscript_id}</Value></p>
        <p><Label>Name:</Label> <Value>{manuscript.name}</Value></p>
        <p><Label>Email:</Label> <Value>{manuscript.email}</Value></p>
        <p><Label>Phone:</Label> <Value>{manuscript.phone || "N/A"}</Value></p>
        <p><Label>Institution:</Label> <Value>{manuscript.institution || "N/A"}</Value></p>
        <p><Label>Journal:</Label> <Value>{manuscript.journal}</Value></p>
        <br/>
        <p><Label>Title:</Label> <Value>{manuscript.title}</Value></p>
<br/>
        <p><Label>Cover Letter:</Label></p>
        <p>{manuscript.cover_letter}</p>
<br/>
        <p><Label>Abstract:</Label></p>
        <p>{manuscript.abstract}</p>
<br/>
        <p><Label>Disclosures:</Label></p>
        <p>{manuscript.disclosures || "None"}</p>
<br/>
        <p>
          <Label>Submitted:</Label>{" "}
          {new Date(manuscript.created_at).toLocaleString()}
        </p>
<br/>
        {manuscript.manuscript_file_url && (
          <FileLink
            // href={manuscript.manuscript_file_url}
            // target="_blank"
            // rel="noopener noreferrer"
              href={getFileUrl(manuscript.manuscript_file)}
  target="_blank"
  rel="noopener noreferrer"
          >
            View PDF Manuscript
          </FileLink>
        )}
      </Card>
    </Container>
    </>
  
  );
}
