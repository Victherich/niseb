
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const primaryGreen = "#008000";
const primaryOrange = "#ff6600";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  color: ${primaryGreen};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const JournalCard = styled.div`
  background: #fff;
  border: 2px solid ${primaryGreen};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const JournalTitle = styled.h2`
  color: ${primaryOrange};
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`;

const Contact = styled.p`
  margin: 0.25rem 0;
  font-size: 1rem;
  line-height: 1.5;

  span {
    font-weight: bold;
    color: ${primaryGreen};
  }
`;

const Bank = styled.div`
  background: ${primaryGreen};
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  margin-top: 0.5rem;
  font-size: 0.95rem;
`;

export default function EditorsContacts() {
  const journals = [
    {
      title: "BIOKEMISTRI (ISSN 0795-8080)",
      editor: "Prof. Kudirat Oluwatosin Shittu",
      phone: "08033883658",
      email: "biokemistri.journal@gmail.com",
      bank: "2343200950 UBA SEBN BIOKEMISTRI"
    },
    {
      title: "AFRICAN SCIENTIST (ISSN 1595 4881)",
      editor: "Prof. Daniel Olorunfemi",
      phone: "+234 802 337 2455",
      email: "nisebpublications@gmail.com",
      bank: "2343204271 UBA SEBN AFRICAN SCIENTIST"
    },
    {
      title: "BIOSCIENCE RESEARCH JOURNAL (ISSN 0795 8072)",
      editor: "Prof. Adedoyin Igunnu",
      phone: "",
      email: "doyinigunnu@yahoo.com",
      bank: "2343199441 UBA SEBN BIOSCIENCE RESEARCH JOURNAL"
    },
    {
      title: "NISEB JOURNAL (ISSN 1595-6938)",
      editor: "Dr Abolanle Kayode",
      phone: "08038272670",
      email: "kayodeab@babcock.edu.ng",
      bank: "2343196756 UBA SEBN JOURNAL (NISEB Journal)"
    },
    {
      title: "International Journal of Health and Biomedical Sciences (IJHBS)",
      editor: "Prof. Taofik Olatunde Uthman",
      phone: "+234 803 393 9464",
      email: "taosun77@yahoo.com",
      bank: "2343187385 UBA SEBN INTER JOUR OF BIOMEDICAL AND HEALTH SCI"
    },
    {
      title: "African Journal of General Agriculture (AJGA)",
      editor: "Prof. Olalekan Adeyemi",
      phone: "+234 8037159452",
      email: "adeyemi.olalekan@fupre.edu.ng",
      bank: "2343202442 UBA SEBN AFRICAN JOURNAL OF GENERAL AGRICULTURE"
    }
  ];

  return (
    <Container>
      <Fade cascade triggerOnce={false} damping={0.2}>
        <Title>NISEB Journal Editors & Bank Details</Title>
        {journals.map((j, idx) => (
          <JournalCard key={idx}>
            <JournalTitle>{j.title}</JournalTitle>
            <Contact><span>Editor:</span> {j.editor}</Contact>
            {j.phone && <Contact><span>Phone:</span> {j.phone}</Contact>}
            <Contact><span>Email:</span> {j.email}</Contact>
            <Bank>{j.bank}</Bank>
          </JournalCard>
        ))}
      </Fade>
    </Container>
  );
}
