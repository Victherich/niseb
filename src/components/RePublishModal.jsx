import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  width: 650px;
  max-width: 95%;
  padding: 20px;
  border-radius: 10px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  color: green;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-height: 80px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-top: 8px;
  color: green;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  color: white;

  &.cancel {
    background: orange;
  }

  &.submit {
    background: green;
  }
`;




export default function RePublishModal({ show, manuscript, onClose }) {
  const [form, setForm] = useState({
    id: "",
    manuscript_id: "",
    name: "",
    email: "",
    phone: "",
    institution: "",
    journal: "",
    title: "",
    cover_letter: "",
    abstract: "",
    disclosures: "",
    volume: "",
    issue: "",
    doi: "",
  });

  const [file, setFile] = useState(null);

  // ✅ Auto-fill modal when manuscript is selected
  useEffect(() => {
    if (manuscript) {
      setForm({
        id: manuscript.id || "",
        manuscript_id: manuscript.manuscript_id || "",
        name: manuscript.name || "",
        email: manuscript.email || "",
        phone: manuscript.phone || "",
        institution: manuscript.institution || "",
        journal: manuscript.journal || "",
        title: manuscript.title || "",
        cover_letter: manuscript.cover_letter || "",
        abstract: manuscript.abstract || "",
        disclosures: manuscript.disclosures || "",
        volume: manuscript.volume || "",
        issue: manuscript.issue || "",
        doi: manuscript.doi || "",
      });
    }
  }, [manuscript]);

  if (!show) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      Swal.fire("Invalid File", "Only PDF files are allowed.", "error");
      e.target.value = "";
      return;
    }

    const MAX_SIZE = 10 * 1024 * 1024;
    if (selected.size > MAX_SIZE) {
      Swal.fire("Too Large", "Max file size is 10MB.", "error");
      e.target.value = "";
      return;
    }

    setFile(selected);
  };

  const handleSubmit = async () => {
    Swal.fire({
      title: "Publishing...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (file) {
        formData.append("pdf_file", file);
      }

      const res = await fetch(
        "https://nisebnigeria.com/api_niseb/publish_article.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire("Updated!", data.message, "success");
        onClose(true);
      } else {
        Swal.fire("Error!", data.message, "error");
      }
    } catch (err) {
      Swal.close();
      Swal.fire("Error!", "Network error", "error");
    }
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>Publish</Title>

        <Label>Manuscript ID</Label>
        <Input name="manuscript_id" value={form.manuscript_id} disabled />

        <Label>Author Name</Label>
        <Input name="name" value={form.name} disabled />

        <Label>Email</Label>
        <Input name="email" value={form.email} disabled />

        <Label>Phone</Label>
        <Input name="phone" value={form.phone} disabled />

        <Label>Institution</Label>
        <Input name="institution" value={form.institution} disabled />

        <Label>Journal</Label>
        <Input name="journal" value={form.journal} disabled />

        <Label>Title</Label>
        <Input name="title" value={form.title} onChange={handleChange} />

        {/* NEW FIELDS */}
        <Label>Volume</Label>
        <Input name="volume" value={form.volume} onChange={handleChange} />

        <Label>Issue</Label>
        <Input name="issue" value={form.issue} onChange={handleChange} />

        <Label>DOI</Label>
        <Input name="doi" value={form.doi} onChange={handleChange} />

        <Label>Cover Letter</Label>
        <TextArea name="cover_letter" value={form.cover_letter} onChange={handleChange} />

        <Label>Abstract</Label>
        <TextArea name="abstract" value={form.abstract} onChange={handleChange} />

        <Label>Disclosures</Label>
        <TextArea name="disclosures" value={form.disclosures} onChange={handleChange} />

        <Label>Upload New Manuscript (PDF only - 10MB Max)</Label>
        <Input type="file" accept="application/pdf" onChange={handleFileChange} />

        <ButtonRow>
          <Button className="cancel" onClick={() => onClose(false)}>
            Cancel
          </Button>
          <Button className="submit" onClick={handleSubmit}>
            Publish
          </Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
}