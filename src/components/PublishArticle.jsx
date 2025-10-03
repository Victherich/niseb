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
    doi: ""
  });
  const [pdfFile, setPdfFile] = useState(null);

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
        doi: ""
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!pdfFile) {
//       Swal.fire("Error", "Please upload the final PDF", "error");
//       return;
//     }

//     const fd = new FormData();
//     Object.entries(formData).forEach(([k,v]) => fd.append(k, v));
//     fd.append("pdf_file", pdfFile);

//     Swal.fire({title: "Publishing...", text: "Please wait", allowOutsideClick: false, didOpen: () => Swal.showLoading()});

//     try {
//       const res = await fetch("https://nisebnigeria.com/api_niseb/publish_article.php", {
//         method: "POST",
//         body: fd
//       });
//       const data = await res.json();

//       if (data.success) {
//         Swal.fire("Success", data.message, "success");
//         onClose(true); // trigger refresh
//       } else {
//         Swal.fire("Error", data.message, "error");
//       }
//     } catch (err) {
//       Swal.fire("Error", "Network error", "error");
//     }
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!pdfFile) {
//     Swal.fire("Error", "Please upload the final PDF", "error");
//     return;
//   }

//   // Build FormData (backend expects these keys)
//   const fd = new FormData();
//   fd.append("manuscript_id", formData.manuscript_id || "");
//   fd.append("title", formData.title || "");
//   fd.append("authors", formData.authors || "");
//   fd.append("volume", formData.volume || "");
//   fd.append("issue", formData.issue || "");
//   fd.append("pages", formData.pages || "");
//   fd.append("doi", formData.doi || "");
//   fd.append("pdf_file", pdfFile); // file input

//   Swal.fire({
//     title: "Publishing...",
//     text: "Please wait",
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading(),
//   });

//   try {
//     const res = await fetch("https://nisebnigeria.com/api_niseb/publish_article.php", {
//       method: "POST",
//       body: fd, // ✅ no headers
//     });

//     const text = await res.text(); // first read as text
//     let data;
//     try {
//       data = JSON.parse(text);
//     } catch {
//       console.error("Invalid JSON from server:", text);
//       throw new Error("Invalid server response");
//     }

//     if (data.success) {
//       Swal.fire("Success", data.message, "success");
//       if (onClose) onClose(true); // trigger refresh
//     } else {
//       Swal.fire("Error", data.message || "Something went wrong", "error");
//     }
//   } catch (err) {
//     console.error("Publish failed:", err);
//     Swal.fire("Error", "Network error. Could not reach server.", "error");
//   }
// };


const handleSubmit = async (e) => {
  e.preventDefault();
//   setLoading(true);

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
      Swal.fire("❌ Error", result.message || "Something went wrong.", "error");
    }
  } catch (err) {
    Swal.close();
    Swal.fire("❌ Publish Failed", err.message, "error");
  }

//   setLoading(false);
};


  return (
    <Overlay>
      <ModalBox>
        <Header>Publish Manuscript</Header>
        <form onSubmit={handleSubmit}>
          <Label>Manuscript ID</Label>
          <Input name="manuscript_id" value={formData.manuscript_id} onChange={handleChange} disabled/>

          <Label>Title</Label>
          <Input name="title" value={formData.title} onChange={handleChange} />

          <Label>Authors</Label>
          <Input name="authors" value={formData.authors} onChange={handleChange} />

          <Label>Volume</Label>
          <Input name="volume" value={formData.volume} onChange={handleChange} />

          <Label>Issue</Label>
          <Input name="issue" value={formData.issue} onChange={handleChange} />

          <Label>Pages</Label>
          <Input name="pages" value={formData.pages} onChange={handleChange} />

          <Label>DOI</Label>
          <Input name="doi" value={formData.doi} onChange={handleChange} />

          <Label>Final PDF</Label>
          <Input type="file" accept="application/pdf" onChange={handleFile} />

          <ButtonRow>
            <Button cancel onClick={() => onClose(false)} type="button">Cancel</Button>
            <Button type="submit">Publish</Button>
          </ButtonRow>
        </form>
      </ModalBox>
    </Overlay>
  );
}
