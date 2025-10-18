import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Overlay = styled.div`
  position:fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
//   padding-top:100px;
`;

const ModalBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 600px;
  max-width: 95%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  overflow-y:scroll;
  height:90vh;
`;

const Header = styled.h2`
  color: orange;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  color: green;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(p) => (p.cancel ? "#ccc" : "orange")};
  color: ${(p) => (p.cancel ? "#000" : "#fff")};
`;

export default function PublishModal({ show, onClose, manuscript }) {
  const [formData, setFormData] = useState({
    manuscript_id: "",
    title: "",
    authors: "",
    volume: "",
    issue: "",
    pages: "",
    doi: "",
    journal:""
  });
  const [pdfFile, setPdfFile] = useState(null);

  console.log(manuscript)

  // Autofill when manuscript changes
  useEffect(() => {
    if (manuscript) {
      setFormData({
        manuscript_id: manuscript.manuscript_id || "",
        title: manuscript.title || "",
        authors: manuscript.name || "",
        volume: "",
        issue: "",
        pages: "",
        doi: "",
        journal:manuscript.journal||""
      });
    }
  }, [manuscript]);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setPdfFile(e.target.files[0]);
  };



const handleSubmit = async (e) => {
  e.preventDefault();


  Swal.fire({
    title: "Publishing...",
    text: "Please wait while we finalize this publication.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  const data = new FormData();
  Object.keys(formData).forEach((key) => data.append(key, formData[key]));
  data.append("pdf_file", pdfFile); // final PDF

  try {
    const res = await fetch("https://nisebnigeria.com/api_niseb/publish_article.php", {
      method: "POST",
      body: data,
    });

    // First, grab raw text so we can debug if it's not JSON
    const text = await res.text();
    console.log("📥 Server response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON from server: " + text);
    }

    Swal.close();

    if (result.success) {
      Swal.fire("✅ Success!", result.message || "Article published!", "success").then((res) => {
        if (res.isConfirmed) {
          window.location.reload();
        }
      });
    } else {
      Swal.fire("Please try again", result.message || "Something went wrong.", "error");
    }
  } catch (err) {
    Swal.close();
    Swal.fire(" Please try again", err.message, "error");
  }


};


  return (
    <Overlay>
      <ModalBox>
        <Header>Publish Manuscript</Header>
        <form onSubmit={handleSubmit}>
          <Label>Manuscript ID</Label>
          <Input name="manuscript_id" value={formData.manuscript_id} onChange={handleChange} disabled required/>

          <Label>Title</Label>
          <Input name="title" value={formData.title} onChange={handleChange} required/>

          <Label>Authors</Label>
          <Input name="authors" value={formData.authors} onChange={handleChange} required/>

          <Label>Volume</Label>
          <Input name="volume" value={formData.volume} onChange={handleChange} required/>

          <Label>Issue</Label>
          <Input name="issue" value={formData.issue} onChange={handleChange} required/>

          <Label>Pages</Label>
          <Input name="pages" value={formData.pages} onChange={handleChange} required/>

          <Label>DOI</Label>
          <Input name="doi" value={formData.doi} onChange={handleChange} required/>

           <Label>Journal </Label>
          <Input name="journal" value={formData.journal} onChange={handleChange} disabled required/>

          <Label>Final PDF</Label>
          <Input type="file" accept="application/pdf" onChange={handleFile} required/>

          <ButtonRow>
            <Button cancel onClick={() => onClose(false)} type="button">Cancel</Button>
            <Button type="submit">Publish</Button>
          </ButtonRow>
        </form>
      </ModalBox>
    </Overlay>
  );
}
