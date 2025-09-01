// import React, { useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import { 
//   FaUser, 
//   FaEnvelope, 
//   FaPhone, 
//   FaClock, 
//   FaArrowRight, 
//   FaArrowLeft 
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
//   border-radius: 12px;
//   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
//   -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */

//   @media(max-width:420px){
//     width: 320px;
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

//   @media (max-width: 768px) {
//     th, td {
//       font-size: 0.8rem;
//       padding: 0.6rem;
//     }
//     td {
//       max-width: 160px;
//     }
//   }

//   @media (max-width: 480px) {
//     th, td {
//       font-size: 0.75rem;
//       padding: 0.5rem;
//     }
//     td {
//       max-width: 120px;
//     }
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

// /* ========================= Component ========================= */

// const UserListPage = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser]=useState(null);

//   const { domain } = useContext(Context);

//   useEffect(() => {
//     fetch(`${domain}/get_all_users.php`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setUsers(data.users);
//           console.log(data.users)
//         } else {
//           setError(data.error || "Failed to fetch users.");
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Error connecting to server: " + err.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <PageContainer>
//       <ContentWrapper>
//         <SectionTitle>All Users</SectionTitle>

//         {loading && <LoadingMsg>Loading users...</LoadingMsg>}
//         {error && <ErrorMsg>{error}</ErrorMsg>}
        
//         <p style={{ width:"100%", textAlign:"center" }}>
//           <FaArrowLeft /> (Scroll) <FaArrowRight />
//         </p>

//         {!loading && !error && users.length > 0 && (
//           <TableWrapper>
//             <UserTable>
//               <thead>
//                 <tr>
//                   <th><FaUser /> ID</th>
//                   <th>Name</th>
//                   <th><FaEnvelope /> Email</th>
//                   <th><FaPhone /> Mobile</th>
//                   {/* <th><FaClock /> Created</th> */}
//                    <th><FaClock /> Membership</th>
//                    <th><FaClock /> Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((u) => (
//                   <tr key={u.id} onClick={()=>setSelectedUser(u)}>
//                     <td>{u.id}</td>
//                     <td>{u.surname} {u.othername}</td>
//                     <td>{u.email}</td>
//                     <td>{u.mobile}</td>
//                    <td>
//   {u.membershipCategory
//     ? u.membershipCategory.charAt(0).toUpperCase() + u.membershipCategory.slice(1).toLowerCase()
//     : ""}
// </td>
// <td>
//   {(() => {
//     if (!u.membership_expiry) {
//       return <span style={{ background: "#d1d5db", color: "#111", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>No expiry</span>;
//     }

//     const expiryDate = new Date(u.membership_expiry);
//     const today = new Date();

//     if (expiryDate >= today) {
//       return <span style={{ background: "green", color: "white", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>Active</span>;
//     } else {
//       return <span style={{ background: "red", color: "white", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>Expired</span>;
//     }
//   })()}
// </td>


//                     {/* <td>{new Date(u.created_at).toLocaleString()}</td> */}
//                   </tr>
//                 ))}
//               </tbody>
//             </UserTable>
//           </TableWrapper>
//         )}

//         {!loading && !error && users.length === 0 && (
//           <ErrorMsg>No users found.</ErrorMsg>
//         )}
//       </ContentWrapper>

//       {selectedUser && (
//   <UserDetailModal 
//     user={selectedUser} 
//     onClose={() => setSelectedUser(null)} 
//   />
// )}
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
  // width:300px;
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
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid #008000;
  border-radius: 6px;
  font-size: 1rem;
  width: 250px;
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
`;

const Scroll = styled.p`
text-align:center;

`

/* ========================= Component ========================= */

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser]=useState(null);
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [filterMembership, setFilterMembership] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const { domain } = useContext(Context);

  const fetchUsers = (searchQuery="") => {
    setLoading(true);
    setError(null);
    fetch(`${domain}/get_all_users.php?search=${encodeURIComponent(searchQuery)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
          setActiveSearch(searchQuery);
        } else {
          setUsers([]);
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
    fetchUsers("");
  }, [domain]);

  // Apply filters locally
  const filteredUsers = users.filter(u => {
    let match = true;

    if (filterMembership !== "all" && u.membershipCategory.toLowerCase() !== filterMembership.toLowerCase()) {
      match = false;
    }

    if (filterStatus !== "all") {
      const expiryDate = u.membership_expiry ? new Date(u.membership_expiry) : null;
      const today = new Date();
      const isActive = expiryDate && expiryDate >= today;
      if (filterStatus === "active" && !isActive) match = false;
      if (filterStatus === "expired" && isActive) match = false;
    }

    return match;
  });

  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle>All Users ({filteredUsers.length})</SectionTitle>

        {/* Search + Filters */}
        <SearchWrapper>
          <SearchInput 
            placeholder="Search by email..." 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
          />
          <Button onClick={()=>fetchUsers(search)}><FaSearch /> Search</Button>
          {activeSearch && (
            <Button bg="red" onClick={()=>{ setSearch(""); fetchUsers(""); }}>
              <FaTimes /> Cancel
            </Button>
          )}

          <FilterSelect value={filterMembership} onChange={(e)=>setFilterMembership(e.target.value)}>
            <option value="all">All Memberships</option>
            <option value="student">Students</option>
            <option value="fullmember">Full Members</option>
            <option value="fellow">Fellows </option>
             <option value="corporate">Corporate</option>
            <option value="foreign (undergraduate)">Foreign (undergraduate)</option>
            <option value="foreign (graduate)">Foreign (graduate)</option>
            <option value="foreign (fullmember)">Foreign (fullmember) </option>
            {/* add more categories here */}
          </FilterSelect>

          <FilterSelect value={filterStatus} onChange={(e)=>setFilterStatus(e.target.value)}>
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
          </FilterSelect>
        </SearchWrapper>

        {loading && <LoadingMsg>Loading users...</LoadingMsg>}
        {error && <ErrorMsg>{error}</ErrorMsg>}

        {!loading && !error && filteredUsers.length > 0 && (
          <TableWrapper>
            <Scroll>
              <FaArrowLeft/>Scroll<FaArrowRight/>
            </Scroll>
            <UserTable>
              <thead>
                <tr>
                  <th><FaUser /> ID</th>
                  <th>Name</th>
                  <th><FaEnvelope /> Email</th>
                  <th><FaPhone /> Mobile</th>
                  <th><FaClock /> Membership</th>
                  <th><FaClock /> Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u) => (
                  <tr key={u.id} onClick={()=>setSelectedUser(u)}>
                    <td>{u.id}</td>
                    <td>{u.surname} {u.othername}</td>
                    <td>{u.email}</td>
                    <td>{u.mobile}</td>
                    <td>
                      {u.membershipCategory
                        ? u.membershipCategory.charAt(0).toUpperCase() + u.membershipCategory.slice(1).toLowerCase()
                        : ""}
                    </td>
                    <td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </UserTable>
          </TableWrapper>
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <ErrorMsg>No users found.</ErrorMsg>
        )}
      </ContentWrapper>

      {selectedUser && (
        <UserDetailModal 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
        />
      )}
    </PageContainer>
  );
};

export default UserListPage;
