import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import mg from "../Images/mg.png";
import EditorsContacts from "./EditorsContacts";

const Hero = styled.section`
  position: relative;
  background: url(${mg}) center/cover no-repeat;
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 2;
  }

  h1 {
    color: #ffcc80;
  }
  p {
    color: #c8f7c5;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  h2 {
    color: green;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: green;
  }
  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    &:focus {
      border-color: #ff6600;
      outline: none;
      box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
    }
  }
`;

const Button = styled.button`
  background: green;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background: #ff6600;
  }
`;

export default function ManuscriptSubmission() {
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(formData.journal)



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Show loading modal
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we upload your manuscript.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    Object.keys(files).forEach((key) => data.append(key, files[key]));

    try {
      const res = await fetch(`https://nisebnigeria.com/api_niseb/${formData.journal}.php`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      Swal.close(); // close loading

      if (result.success) {
        Swal.fire("✅ Success!", result.message || "Manuscript submitted!", "success").then((result)=>{
            if(result.isConfirmed){
                window.location.reload();
            }
        });
        
      } else {
        Swal.fire("❌ Error", result.message || "Something went wrong.", "error");
      }
    } catch (err) {
      Swal.close();
      Swal.fire("❌ Submission Failed", err.message, "error");
    }

    setLoading(false);
  };

  return (
    <>
      <Hero>
        <div>
          <div style={{ fontSize: "3rem" }}>📜</div>
          <h1>Submit Your Manuscript</h1>
          <p>Share your research with the NISEB community</p>
        </div>
      </Hero>
      <Container>
        <h2>Author & Manuscript Details</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Name</label>
            <input type="text" name="name" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Email</label>
            <input type="email" name="email" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Confirm Email</label>
            <input type="email" name="confirm_email" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Phone</label>
            <input type="text" name="phone" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Institution</label>
            <input type="text" name="institution" required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Journal</label>
            <select name="journal" required onChange={handleChange}>
              <option value="">-- Select Journal --</option>
              <option value="NISEB_JOURNAL">NISEB JOURNAL</option>
              <option value="BIOKEMISTRI_JOURNAL">BIOKEMISTRI JOURNAL</option>
              <option value="BIOSCIENCE_RESEARCH_JOURNAL">BIOSCIENCE RESEARCH JOURNAL</option>
              
            </select>
          </FormGroup>

          {/* ✅ Added Manuscript Title field */}
<FormGroup>
  <label>Manuscript Title</label>
  <input
    type="text"
    name="title"
    required
    onChange={handleChange}
  />
</FormGroup>
   
          <FormGroup>
            <label>Cover Letter</label>
            <textarea name="cover_letter" rows="4" required onChange={handleChange}></textarea>
          </FormGroup>
          <FormGroup>
            <label>Abstract (max 250 words)</label>
            <textarea
              name="abstract"
              rows="5"
              maxLength="2000"
              required
              onChange={handleChange}
            ></textarea>
          </FormGroup>
          <FormGroup>
            <label>Full Manuscript (Word file)</label>
            <input
              type="file"
              name="manuscript"
              accept=".doc,.docx"
              required
              onChange={handleFileChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Figures (ZIP/Images)</label>
            <input
              type="file"
              name="figures"
              accept=".zip,.png,.jpg,.jpeg,.tif"
              onChange={handleFileChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Tables (ZIP/Excel)</label>
            <input
              type="file"
              name="tables"
              accept=".zip,.xls,.xlsx"
              onChange={handleFileChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Conflict of Interest / Funding Disclosure</label>
            <textarea name="disclosures" rows="3" onChange={handleChange}></textarea>
          </FormGroup>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Manuscript"}
          </Button>
        </form>
      </Container>
      <EditorsContacts/>
    </>
  );
}
