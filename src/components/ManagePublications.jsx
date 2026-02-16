



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pubs from '../Images/pubs.png'
import Swal from 'sweetalert2'

const Hero = styled.section`
  height: 300px;
  background: url(${pubs}) center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: orange;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: lightgreen;
`;

const Container = styled.div`
  max-width: 1200px;
//   margin: 40px auto;
  padding: 0 10px;
  padding-top:100px;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto 30px;
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid green;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: orange;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: rgba(0,255,0,0.1);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  // max-width: 300px;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  color: green;
  margin-bottom: 10px;
`;

const Authors = styled.p`
  color: orange;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Meta = styled.p`
  font-size: 0.8rem;
  color: #555;
`;

const ButtonRow = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const Button = styled.a`
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  text-align: center;
  font-size: 0.9rem;
  text-decoration: none;
  color: #fff;
  background: green;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

export default function ManagePublications() {
  const [pubs, setPubs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(pubs)

 
    const fetchPubs=()=>{
    fetch("https://nisebnigeria.com/api_niseb/get_publications.php")
      .then(async (res) => {
        const text = await res.text(); // raw response
        try {
          const data = JSON.parse(text);
          if (data.success) setPubs(data.publications);
          else console.error("API error:", data);
        } catch (err) {
          console.error("Invalid JSON response:", text);
        }
      })
      .catch((error) => console.error("Fetch failed:", error));
    }




 useEffect(() => {
    fetchPubs();
  }, []);



  // filter publications by title, authors, or doi
  const filteredPubs = pubs.filter((p) =>
    [p.title, p.authors, p.doi]
      .filter(Boolean)
      .some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );



// Delete handler
// const handleDelete = async (id) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "This publication will be permanently deleted.",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "green",
//     cancelButtonColor: "orange",
//     confirmButtonText: "Yes, delete it!"
//   }).then(async (result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Deleting...",
//         text: "Please wait",
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });

//       try {
//         const res = await fetch("https://nisebnigeria.com/api_niseb/delete_publication.php", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id })
//         });
//         const data = await res.json();

//         if (data.success) {
//           Swal.fire("Deleted!", data.message, "success");
//           // Refresh publications list after deletion
//           setPubs((prev) => prev.filter((p) => p.id !== id));
//           fetchPubs();
//           fet
//         } else {
//           Swal.fire("Error!", data.message, "error");
//         }
//       } catch (err) {
//         Swal.fire("Error!", "Failed to connect to server", "error");
//       }
//     }
//   });
// };


const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This publication will be permanently deleted.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "green",
    cancelButtonColor: "orange",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleting...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        const res = await fetch("https://nisebnigeria.com/api_niseb/delete_publication.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        // debug: get raw text first
        const text = await res.text();
        console.log("Server response:", text);

        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Invalid JSON: " + text);
        }

        if (data.success) {
          Swal.fire("Deleted!", data.message, "success");
          setPubs((prev) => prev.filter((p) => p.id !== id));
          fetchPubs();
        } else {
          Swal.fire("Error!", data.message, "error");
        }
      } catch (err) {
        Swal.fire("Error!", err.message || "Failed to connect to server", "error");
      }
    }
  });
};


  return (
    <div>


      <Container>
        <Title style={{textAlign:"center", color:"green", fontSize:"1.1rem"}}>
          Our Published Articles
        </Title>

        {/* Search bar */}
        <SearchBar
          type="text"
          placeholder="Search by title, author, or DOI..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Grid>
          {filteredPubs.map((p) => (
            <Card key={p.id}>
              <CardTitle>{p.title.toUpperCase()}</CardTitle>
              <Authors>{p.authors}</Authors>
              <Meta>
                Vol. {p.volume}, Issue {p.issue} <br />
              <strong>DOI: </strong>
<strong><a href={p.doi ? `https://doi.org/${p.doi}` : "#"} target="_blank" rel="noopener noreferrer">
  {p.doi || "N/A"}
</a></strong>
<br/>
                <strong>Published:</strong>{" "}
                {new Date(p.created_at).toLocaleDateString()} <br/>
                <strong>Journal:</strong> {p.journal}
              </Meta>

              <ButtonRow>
                {/* View in browser */}
                <Button 
                  href={`https://nisebnigeria.com/api_niseb/${p.pdf_file}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Open
                </Button>

                   <Button 
                 onClick={()=>handleDelete(p.id)}
                 style={{backgroundColor:"gray", cursor:"pointer"}}
                >
                  Delete
                </Button>
              </ButtonRow>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
