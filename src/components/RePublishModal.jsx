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
  width: 500px;
  max-width: 95%;
  padding: 20px;
  border-radius: 10px;
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
    title: "",
    journal: "",
    authors: "",
    doi: "",
    volume: "",
    issue: "",
  });

  // ✅ Auto-fill when modal opens or manuscript changes
  useEffect(() => {
    if (manuscript) {
      setForm({
        id: manuscript.id || "",
        title: manuscript.title || "",
        journal: manuscript.journal || "",
        authors: manuscript.authors || manuscript.name || "",
        doi: manuscript.doi || "",
        volume: manuscript.volume || "",
        issue: manuscript.issue || "",
        // pages: manuscript.pages || "",
      });
    }
  }, [manuscript]);

  if (!show) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    Swal.fire({
      title: "Updating...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch(
        "https://nisebnigeria.com/api_niseb/update_submission.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire("Updated!", data.message, "success");
        onClose(true); // refresh list
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
        <Title>Re-Publish / Update Article</Title>

        <Input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <Input
          name="journal"
          value={form.journal}
          onChange={handleChange}
          placeholder="Journal"
        />

        <Input
          name="authors"
          value={form.authors}
          onChange={handleChange}
          placeholder="Authors"
        />

        <Input
          name="doi"
          value={form.doi}
          onChange={handleChange}
          placeholder="DOI"
        />

        <Input
          name="volume"
          value={form.volume}
          onChange={handleChange}
          placeholder="Volume"
        />

        <Input
          name="issue"
          value={form.issue}
          onChange={handleChange}
          placeholder="Issue"
        />

        {/* <Input
          name="pages"
          value={form.pages}
          onChange={handleChange}
          placeholder="Pages"
        /> */}

        <ButtonRow>
          <Button className="cancel" onClick={() => onClose(false)}>
            Cancel
          </Button>
          <Button className="submit" onClick={handleSubmit}>
            Update & Republish
          </Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
}
