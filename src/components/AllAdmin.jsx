
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { FaUserShield, FaEnvelope, FaPhone, FaClock, FaArrowRight, FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";
import { Context } from "./Context";

/* ========================= Styled Components ========================= */

const PageContainer = styled.div`
  background-color: #f0fdf4;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: "Arial", sans-serif;
  color: #333;
  padding-top:100px;
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
  -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */

  @media(max-width:420px){
 
  width:320px;
  }
`;



const AdminTable = styled.table`
  width: 100%;
  min-width: 720px; /* prevent table from collapsing too much */
  border-collapse: collapse;
  background: white;

  th, td {
    padding: 0.85rem 1rem;
    text-align: left;
    white-space: nowrap; /* prevents breaking in awkward places */
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
  }

  tbody tr:hover {
    background-color: #f9fafb;
  }

  td {
    font-size: 0.95rem;
    word-break: break-word; /* wrap long emails or names */
    max-width: 220px;       /* prevent super long strings from breaking layout */
  }

  @media (max-width: 768px) {
    th, td {
      font-size: 0.8rem;
      padding: 0.6rem;
    }
    td {
      max-width: 160px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      font-size: 0.75rem;
      padding: 0.5rem;
    }
    td {
      max-width: 120px;
    }
  }
`;


const RoleBadge = styled.span`
  background: #ffa500;
  color: #fff;
  font-weight: bold;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
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

/* ========================= Component ========================= */

const AdminListPage = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {domain} =useContext(Context);

  useEffect(() => {
    fetch(`${domain}/get_all_admin.php`) // 🔹 Change URL if hosted elsewhere
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAdmins(data.admins);
        } else {
          setError(data.error || "Failed to fetch admins.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error connecting to server: " + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle>All Admins</SectionTitle>

        {loading && <LoadingMsg>Loading admins...</LoadingMsg>}
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <p style={{width:"100%", textAlign:"center"}}><FaArrowLeft/> (Scroll) <FaArrowRight/></p>
        {!loading && !error && admins.length > 0 && (
          <TableWrapper>
            <AdminTable>
              <thead>
                <tr>
                  <th><FaUserShield /> ID</th>
                  <th>Name</th>
                  <th><FaEnvelope /> Email</th>
                  <th><FaPhone /> Phone</th>
                  <th>Role</th>
                  <th><FaClock /> Created</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id}>
                    <td>{admin.id}</td>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>{admin.phone}</td>
                    <td>
                      <RoleBadge>{admin.role}</RoleBadge>
                    </td>
                    <td>{new Date(admin.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </AdminTable>
          </TableWrapper>
        )}

        {!loading && !error && admins.length === 0 && (
          <ErrorMsg>No admins found.</ErrorMsg>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default AdminListPage;
