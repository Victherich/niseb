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



export default function PublicationDetail() {
  const { id } = useParams();
  const [manuscript, setManuscript] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nisebnigeria.com/api_niseb/get_publication.php?id=${id}`)
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









  if (loading) return <p>Loading manuscript...</p>;
  if (!manuscript) return <p>Manuscript not found.</p>;

  return (
    <>
      {/* DARK HERO SECTION */}
    <Hero>
      <HeroContent>
        <HeroTitle>Publication Abstract</HeroTitle>

      </HeroContent>
    </Hero>

      <Container>
      <p onClick={()=>window.history.back()} style={{cursor:"pointer", color:"blue"}}>← Back</p>

      <Card>
        <Title>Publication Abstract</Title>
<br/>


        <p><Label></Label></p>
        <p>{manuscript.abstract}</p>
<br/>
      
      </Card>
    </Container>
    </>
  
  );
}
