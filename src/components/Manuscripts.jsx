
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ManuscriptModal from "./ManuscriptModal";
import Swal from "sweetalert2";
import PublishModal from "./PublishArticle";
import RePublishModal from "./RePublishModal";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  padding-top:100px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: green;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid orange;
  border-radius: 6px;
  margin-bottom: 24px;
  outline: none;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
  font-weight: bold;
  color: green;
`;

const Value = styled.span`
  color: #222;
  font-size:0.9rem;
`;

const Message = styled.p`
  font-size: 16px;
  color: green;
`;

const Button = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &.view {
    background-color: green;
  }

  &.delete {
    background-color: orange;
  }

  &:hover {
    opacity: 0.85;
  }
`;


export default function Manuscripts() {
  const [submissions, setSubmissions] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
   const [selected, setSelected] = useState(null);

  const fetchData = async (query = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://nisebnigeria.com/api_niseb/get_submissions.php?search=${query}`
      );
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.submissions);
      } else {
        setSubmissions([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchData(value);
  };





const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This action will permanently delete the manuscript and its files.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "orange",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleting...",
        text: "Please wait while we delete the manuscript.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const res = await fetch("https://nisebnigeria.com/api_niseb/delete_submission.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        const data = await res.json();
        Swal.close();

        if (data.success) {
          Swal.fire("Deleted!", data.message, "success");
          // ✅ Refresh the table (refetch manuscripts or remove from state)
          fetchData();
        } else {
          Swal.fire("Error!", data.message, "error");
        }
      } catch (error) {
        Swal.close();
        Swal.fire("Error!", "Network error. Please try again.", "error");
      }
    }
  });
};





  const [showModal, setShowModal] = useState(false);
  const [selected2, setSelected2] = useState(null);

  const handlePublishClick = (manuscript) => {
    setSelected2(manuscript);
    setShowModal(true);
  };




  return (
    <Container>
      <Title>Submitted Publications</Title>
      <SearchInput
        type="text"
        placeholder="Search by Manuscript ID or Author Email..."
        value={search}
        onChange={handleSearch}
      />

      {loading ? (
        <Message>Loading submissions...</Message>
      ) : submissions.length === 0 ? (
        <Message>No submissions found.</Message>
      ) : (
        submissions.map((s) => (
          <Card key={s.manuscript_id}>
            <p>
              <Label>ID:</Label> <Value>{s.manuscript_id}</Value>
            </p>
            <p>
              <Label>Author:</Label>{" "}
              <Value>
                {s.name} ({s.email})
              </Value>
            </p>
            <p>
              <Label>Title:</Label> <Value>{s.title}</Value>
            </p>
            <p>
              <Label>Journal:</Label> <Value>{s.journal}</Value>
            </p>
            <Label>DOI: </Label>
<strong><a href={s.doi ? `https://doi.org/${s.doi}` : "#"} target="_blank" rel="noopener noreferrer">
   {s.doi || "N/A"}
</a></strong>
            {/* <p>
              <Label>Status:</Label> <Value>{s.status}</Value>
            </p> */}
            <p>
              <Label>Submitted:</Label>{" "}
              <Value>{new Date(s.created_at).toLocaleString()}</Value>
            </p>

             <div>
      <Button className="view" onClick={()=>setSelected(s)}>
        View
      </Button>
      <Button className="delete" onClick={()=>handleDelete(s.id)}>
        Delete
      </Button>
         <Button className="view" onClick={()=>handlePublishClick(s)}>
       Publish
      </Button>
    </div>
          </Card>
        ))
      )}

       <ManuscriptModal
        show={!!selected}
        manuscript={selected}
        onClose={() => setSelected(null)}
      />

      {/* <PublishModal 
        show={showModal} 
        manuscript={selected2} 
        onClose={(refresh) => {
          setShowModal(false);
          if (refresh) {
            // reload submissions list
            window.location.reload();
          }
        }} 
      /> */}

      <RePublishModal
  show={showModal} 
  manuscript={selected2} 
  onClose={(refresh) => {
    setShowModal(false);
    if (refresh) fetchData(); // better than full reload
  }} 
/>

    </Container>
  );
}
