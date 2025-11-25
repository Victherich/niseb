




// import React, { useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import { 
//   FaUser, 
//   FaEnvelope, 
//   FaPhone, 
//   FaClock, 
//   FaArrowRight, 
//   FaArrowLeft, 
//   FaSearch, 
//   FaTimes 
// } from "react-icons/fa";
// import { Context } from "./Context";
// import UserDetailModal from "./UserDetailModal";

// /* ========================= Styled Components ========================= */

// const PageContainer = styled.div`
//   background-color: #f0fdf4;
//   min-height: 100vh;
//   padding: 2rem 1rem;
//   font-family: "Arial", sans-serif;
//   color: #333;
//   padding-top: 100px;
// `;

// const ContentWrapper = styled.div`
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// const SectionTitle = styled.h1`
//   font-size: clamp(1.5rem, 4vw, 2.5rem);
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #008000;
//   border-bottom: 3px solid #ffa500;
//   display: inline-block;
//   padding-bottom: 0.5rem;
// `;

// const TableWrapper = styled.div`
//   overflow-x: scroll;
//   // width:300px;
//   border-radius: 12px;
//   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
//   -webkit-overflow-scrolling: touch;


//   @media(max-width:420px){
//   width:320px;
//   }
// `;

// const UserTable = styled.table`
//   width: 100%;
//   min-width: 720px;
//   border-collapse: collapse;
//   background: white;

//   th, td {
//     padding: 0.85rem 1rem;
//     text-align: left;
//     white-space: nowrap;
//   }

//   th {
//     background-color: #008000;
//     color: white;
//     font-weight: bold;
//     text-transform: uppercase;
//     font-size: 0.85rem;
//     letter-spacing: 0.5px;
//     position: sticky;
//     top: 0;
//     z-index: 2;
//   }

//   tbody tr {
//     border-bottom: 1px solid #e5e7eb;
//     transition: background 0.2s;
//     cursor:pointer;
//   }

//   tbody tr:hover {
//     background-color: lightgray;
//   }

//   td {
//     font-size: 0.95rem;
//     word-break: break-word;
//     max-width: 220px;
//   }
// `;

// const ErrorMsg = styled.div`
//   color: red;
//   text-align: center;
//   font-size: 1.1rem;
//   margin-top: 2rem;
// `;

// const LoadingMsg = styled.div`
//   color: #008000;
//   text-align: center;
//   font-size: 1.2rem;
//   margin-top: 2rem;
//   font-weight: bold;
// `;

// const SearchWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 1.5rem;
//   gap: 0.5rem;
//   flex-wrap: wrap;
// `;

// const SearchInput = styled.input`
//   padding: 0.5rem 1rem;
//   border: 2px solid #008000;
//   border-radius: 6px;
//   font-size: 1rem;
//   width: 250px;
// `;

// const FilterSelect = styled.select`
//   padding: 0.5rem 1rem;
//   border: 2px solid #008000;
//   border-radius: 6px;
//   font-size: 1rem;
//   background: white;
// `;

// const Button = styled.button`
//   padding: 0.5rem 0.8rem;
//   border: none;
//   border-radius: 6px;
//   background: ${(props) => props.bg || "#008000"};
//   color: white;
//   cursor: pointer;
//   font-weight: bold;
//   &:hover {
//     opacity: 0.85;
//   }
// `;

// const Scroll = styled.p`
// text-align:center;

// `

// /* ========================= Component ========================= */

// const UserListPage = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser]=useState(null);
//   const [search, setSearch] = useState("");
//   const [activeSearch, setActiveSearch] = useState("");
//   const [filterMembership, setFilterMembership] = useState("all");
//   const [filterStatus, setFilterStatus] = useState("all");

//   const { domain } = useContext(Context);

//   const fetchUsers = (searchQuery="") => {
//     setLoading(true);
//     setError(null);
//     fetch(`${domain}/get_all_users.php?search=${encodeURIComponent(searchQuery)}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setUsers(data.users);
//           setActiveSearch(searchQuery);
//         } else {
//           setUsers([]);
//           setError(data.error || "Failed to fetch users.");
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Error connecting to server: " + err.message);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchUsers("");
//   }, [domain]);

//   // Apply filters locally
//   const filteredUsers = users.filter(u => {
//     let match = true;

//     if (filterMembership !== "all" && u.membershipCategory.toLowerCase() !== filterMembership.toLowerCase()) {
//       match = false;
//     }

//     if (filterStatus !== "all") {
//       const expiryDate = u.membership_expiry ? new Date(u.membership_expiry) : null;
//       const today = new Date();
//       const isActive = expiryDate && expiryDate >= today;
//       if (filterStatus === "active" && !isActive) match = false;
//       if (filterStatus === "expired" && isActive) match = false;
//     }

//     return match;
//   });

//   return (
//     <PageContainer>
//       <ContentWrapper>
//         <SectionTitle>All Users ({filteredUsers.length})</SectionTitle>

//         {/* Search + Filters */}
//         <SearchWrapper>
//           <SearchInput 
//             placeholder="Search by email..." 
//             value={search} 
//             onChange={(e)=>setSearch(e.target.value)} 
//           />
//           <Button onClick={()=>fetchUsers(search)}><FaSearch /> Search</Button>
//           {activeSearch && (
//             <Button bg="red" onClick={()=>{ setSearch(""); fetchUsers(""); }}>
//               <FaTimes /> Cancel
//             </Button>
//           )}

//           <FilterSelect value={filterMembership} onChange={(e)=>setFilterMembership(e.target.value)}>
//             <option value="all">All Memberships</option>
//             <option value="student">Students</option>
//             <option value="fullmember">Full Members</option>
//             <option value="fellow">Fellows </option>
//              <option value="corporate">Corporate</option>
//             <option value="foreign (undergraduate)">Foreign (undergraduate)</option>
//             <option value="foreign (graduate)">Foreign (graduate)</option>
//             <option value="foreign (fullmember)">Foreign (fullmember) </option>
//             {/* add more categories here */}
//           </FilterSelect>

//           <FilterSelect value={filterStatus} onChange={(e)=>setFilterStatus(e.target.value)}>
//             <option value="all">All Status</option>
//             <option value="active">Active</option>
//             <option value="expired">Expired</option>
//           </FilterSelect>
//         </SearchWrapper>

//         {loading && <LoadingMsg>Loading users...</LoadingMsg>}
//         {error && <ErrorMsg>{error}</ErrorMsg>}

//         {!loading && !error && filteredUsers.length > 0 && (
//           <TableWrapper>
//             <Scroll>
//               <FaArrowLeft/>Scroll<FaArrowRight/>
//             </Scroll>
//             <UserTable>
//               <thead>
//                 <tr>
//                   <th><FaUser /> ID</th>
//                   <th>Name</th>
//                   <th><FaEnvelope /> Email</th>
//                   <th><FaPhone /> Mobile</th>
//                   <th><FaClock /> Membership</th>
//                   <th><FaClock /> Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredUsers.map((u) => (
//                   <tr key={u.id} onClick={()=>setSelectedUser(u)}>
//                     <td>{u.id}</td>
//                     <td>{u.surname} {u.othername}</td>
//                     <td>{u.email}</td>
//                     <td>{u.mobile}</td>
//                     <td>
//                       {u.membershipCategory
//                         ? u.membershipCategory.charAt(0).toUpperCase() + u.membershipCategory.slice(1).toLowerCase()
//                         : ""}
//                     </td>
//                     <td>
//                       {(() => {
//                         if (!u.membership_expiry) {
//                           return <span style={{ background: "#d1d5db", color: "#111", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>No expiry</span>;
//                         }
//                         const expiryDate = new Date(u.membership_expiry);
//                         const today = new Date();
//                         if (expiryDate >= today) {
//                           return <span style={{ background: "green", color: "white", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>Active</span>;
//                         } else {
//                           return <span style={{ background: "red", color: "white", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>Expired</span>;
//                         }
//                       })()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </UserTable>
//           </TableWrapper>
//         )}

//         {!loading && !error && filteredUsers.length === 0 && (
//           <ErrorMsg>No users found.</ErrorMsg>
//         )}
//       </ContentWrapper>

//       {selectedUser && (
//         <UserDetailModal 
//           user={selectedUser} 
//           onClose={() => setSelectedUser(null)} 
//         />
//       )}
//     </PageContainer>
//   );
// };

// export default UserListPage;





import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaClock, 
  FaArrowRight, 
  FaArrowLeft, 
  FaSearch, 
  FaTimes 
} from "react-icons/fa";
import { Context } from "./Context";
import UserDetailModal from "./UserDetailModal";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Swal from "sweetalert2";


/* ========================= Styled Components ========================= */

const PageContainer = styled.div`
  background-color: #f0fdf4;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: "Arial", sans-serif;
  color: #333;
  padding-top: 100px;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 2rem;
  color: #008000;
  border-bottom: 3px solid #ffa500;
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const TableWrapper = styled.div`
  overflow-x: scroll;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  -webkit-overflow-scrolling: touch;

  @media(max-width:420px){
    width:320px;
  }
`;

const UserTable = styled.table`
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  background: white;

  th, td {
    padding: 0.85rem 1rem;
    text-align: left;
    white-space: nowrap;
  }

  th {
    background-color: #008000;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  tbody tr {
    border-bottom: 1px solid #e5e7eb;
    transition: background 0.2s;
    cursor:pointer;
  }

  tbody tr:hover {
    background-color: lightgray;
  }

  td {
    font-size: 0.95rem;
    word-break: break-word;
    max-width: 220px;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 2rem;
`;

const LoadingMsg = styled.div`
  color: #008000;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
  font-weight: bold;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  align-items:center;
  flex-direction:column;
`;

const SearchWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
  flex-wrap: wrap;

`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid #008000;
  border-radius: 6px;
  font-size: 1rem;
  width: 300px;

  @media(max-width:428px){
  width:250px;
  }
`;

const FilterSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 2px solid #008000;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
`;

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.bg || "#008000"};
  color: white;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    opacity: 0.85;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 10px;
  flex-wrap: wrap;
`;

/* ========================= Component ========================= */

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const {membershipFees}=useContext(Context);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const usersPerPage = 100;

  const { domain } = useContext(Context);

  const fetchUsers = (page, searchQuery) => {
    setLoading(true);
    setError(null);
    fetch(`${domain}/get_all_users2.php?page=${page}&limit=${usersPerPage}&search=${encodeURIComponent(searchQuery)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setCurrentPage(data.currentPage);
          setActiveSearch(searchQuery);
        } else {
          setUsers([]);
          setTotalUsers(0);
          setError(data.error || "Failed to fetch users.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error connecting to server: " + err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers(1, "");
  }, [domain]);

  const handlePageChange = (page) => {
    fetchUsers(page, activeSearch);
  };
  
  const handleSearch = () => {
    fetchUsers(1, search);
  };
  
  const totalPages = Math.ceil(totalUsers / usersPerPage);

const handleDownloadAllPDF = async () => {
  setLoading(true);

  Swal.fire({
    title: "Generating PDF",
    text: "Please wait while we prepare your download...",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    // Fetch all users (the backend should handle ?all=true properly)
    const response = await fetch(`${domain}/get_all_users2.php?all=true`);
    const data = await response.json();

    if (!data.success || !data.users || data.users.length === 0) {
      Swal.fire("No data", "No users found to download.", "info");
      setLoading(false);
      return;
    }

    // Create new PDF
    const doc = new jsPDF({ orientation: "landscape" });

    // Add header
    doc.setFontSize(18);
    doc.setTextColor(0, 128, 0);
    doc.text("All Registered Users", 14, 20);

    const date = new Date().toLocaleString();
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${date}`, 14, 30);

    // Prepare table data
    const rows = data.users.map((u) => [
      u.id,
      `${u.surname} ${u.othername}`,
      u.email,
      u.mobile,
      membershipFees.find((item) => item.id === Number(u.membershipCategory))?.name || "None",
    ]);

    // Add table
    doc.autoTable({
      startY: 40,
      head: [["ID", "Name", "Email", "Mobile", "Membership"]],
      body: rows,
      styles: { fontSize: 9, cellPadding: 3 },
      headStyles: { fillColor: [0, 128, 0], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [240, 248, 240] },
      margin: { top: 40 },
    });

    // Save the file
    doc.save("All_Users.pdf");

    Swal.fire("Success", "PDF generated successfully!", "success");
  } catch (error) {
    console.error("PDF generation error:", error);
    Swal.fire("Error", "Failed to generate PDF: " + error.message, "error");
  } finally {
    setLoading(false);
  }
};


  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle>All Members ({totalUsers})</SectionTitle>

        {/* Search + Filters */}
       
        <SearchWrapper>
           <label style={{color:"green", fontWeight:"bold"}}>Search by surname, othernames or email</label><br/>
            <SearchWrapper2>
                 <SearchInput 
            type="text"
            placeholder="Search by surname , othernames or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch}>
            <FaSearch /> Search
          </Button>
          {activeSearch && (
            <Button
              bg="red"
              onClick={() => {
                setSearch("");
                fetchUsers(1, "");
              }}
            >
              <FaTimes /> Cancel
            </Button>
          )}
            </SearchWrapper2>
     <Button 
  bg="#444"
  onClick={handleDownloadAllPDF}
>
  Download All Users (PDF)
</Button>



          {/* <FilterSelect>
            <option value="all">All Memberships</option>
            <option value="student">Students</option>
            <option value="fullmember">Full Members</option>
            <option value="fellow">Fellows </option>
            <option value="corporate">Corporate</option>
            <option value="foreign (undergraduate)">Foreign (undergraduate)</option>
            <option value="foreign (graduate)">Foreign (graduate)</option>
            <option value="foreign (fullmember)">Foreign (fullmember) </option>
          </FilterSelect> */}
        </SearchWrapper>
        
        {loading && <LoadingMsg>Loading users...</LoadingMsg>}
        {error && <ErrorMsg>{error}</ErrorMsg>}

        {!loading && !error && users.length > 0 && (
          <>
            <TableWrapper>
              <UserTable>
                <thead>
                  <tr>
                    <th><FaUser /> ID</th>
                    <th>Surname | Othernames</th>
                    <th><FaEnvelope /> Email</th>
                    <th><FaPhone /> Mobile</th>
                    <th><FaClock /> Membership</th>
                    {/* <th><FaClock /> Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr 
                      key={u.id} 
                      onClick={() => setSelectedUser(u)}
                    >
                      <td>{u.id}</td>
                      <td>{u.surname} {u.othername}</td>
                      <td>{u.email}</td>
                      <td>{u.mobile}</td>
                      <td>
                       {
    membershipFees.find(item => item.id === Number(u.membershipCategory))?.name 
    || "None"
  }
                      </td>
                      {/* <td>
                        {(() => {
                          if (!u.membership_expiry) {
                            return <span style={{ background: "#d1d5db", color: "#111", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>No expiry</span>;
                          }
                          const expiryDate = new Date(u.membership_expiry);
                          const today = new Date();
                          if (expiryDate >= today) {
                            return <span style={{ background: "green", color: "white", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>Active</span>;
                          } else {
                            return <span style={{ background: "red", color: "white", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>Expired</span>;
                          }
                        })()}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
                
              </UserTable>
            </TableWrapper>

            <PaginationWrapper>
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
              >
                <FaArrowLeft /> Previous
              </Button>
              <span style={{color: '#4b5563', fontWeight: '600'}}>Page {currentPage} of {totalPages}</span>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
              >
                Next <FaArrowRight />
              </Button>
            </PaginationWrapper>
          </>
        )}

        {!loading && !error && users.length === 0 && (
          <ErrorMsg>No users found on this page.</ErrorMsg>
        )}
      </ContentWrapper>
      {selectedUser && (
        <UserDetailModal user={selectedUser} onClose={() => {setSelectedUser(null); fetchUsers(1, "")}} />
      )}
    </PageContainer>
  );
};

export default UserListPage;





// <?php
// // --- CORS HEADERS (Allow All) ---
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type, Authorization");
// header("Access-Control-Allow-Credentials: true");

// // --- HANDLE OPTIONS ---
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     http_response_code(200);
//     exit();
// }

// // --- NO CACHE HEADERS ---
// header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
// header("Cache-Control: post-check=0, pre-check=0", false);
// header("Pragma: no-cache");

// // --- RESPONSE HEADER ---
// header('Content-Type: application/json');

// // --- ERROR REPORTING ---
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// // --- DB CONFIG ---
// // NOTE: You must replace 'config.php' with your actual database connection code.
// // Example:
// // $conn = new mysqli('localhost', 'username', 'password', 'database');
// // if ($conn->connect_error) {
// //     die(json_encode(['success' => false, 'error' => 'Database connection failed.']));
// // }
// include 'config.php';

// // --- PAGINATION PARAMETERS ---
// $page = isset($_GET['page']) && is_numeric($_GET['page']) ? (int)$_GET['page'] : 1;
// $limit = 100; // Set a fixed limit as requested

// $offset = ($page - 1) * $limit; // Calculate the offset

// // --- OPTIONAL SEARCH ---
// $search = isset($_GET['search']) ? trim($_GET['search']) : "";

// // --- COUNT TOTAL USERS (Important for pagination) ---
// if (!empty($search)) {
//     $countStmt = $conn->prepare("SELECT COUNT(*) as total FROM users WHERE email LIKE ?");
//     $searchTerm = "%" . $search . "%";
//     $countStmt->bind_param("s", $searchTerm);
// } else {
//     $countStmt = $conn->prepare("SELECT COUNT(*) as total FROM users");
// }
// $countStmt->execute();
// $countResult = $countStmt->get_result();
// $totalUsers = $countResult->fetch_assoc()['total'];
// $countStmt->close();

// // --- PAGINATED QUERY ---
// if (!empty($search)) {
//     $stmt = $conn->prepare("SELECT * FROM users WHERE email LIKE ? ORDER BY id DESC LIMIT ? OFFSET ?");
//     $stmt->bind_param("sii", $searchTerm, $limit, $offset);
// } else {
//     $stmt = $conn->prepare("SELECT * FROM users ORDER BY id DESC LIMIT ? OFFSET ?");
//     $stmt->bind_param("ii", $limit, $offset);
// }

// $stmt->execute();
// $result = $stmt->get_result();

// // --- FETCH USERS ---
// $users = [];
// while ($row = $result->fetch_assoc()) {
//     $users[] = $row;
// }
// $stmt->close();

// // --- RESPONSE ---
// echo json_encode([
//     'success' => true,
//     'users' => $users,
//     'totalUsers' => $totalUsers, // Send total count to the frontend
//     'currentPage' => $page,
//     'perPage' => $limit
// ]);

// $conn->close();
// ?>
