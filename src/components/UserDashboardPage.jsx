
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";
import { FaUser, FaEnvelope, FaPhone, FaCreditCard, FaSignOutAlt, FaClock, FaArrowLeft, FaArrowRight, FaCalendar } from "react-icons/fa";
import PaymentModal from "./PaymentModal";
import Swal from "sweetalert2";
import UpdateProfileModal from "./UpdateProfileModal";

/* ---------------- Styled Components ---------------- */
const PageContainer = styled.div`
  background: #f9fafb;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: "Arial", sans-serif;
`;

const DashboardWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Section = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #008000;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ffa500;
  padding-bottom: 0.5rem;
`;

const UserInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  p {
    flex: 1 1 250px;
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  strong {
    color: #111;
  }
`;

const StatusBadge = styled.span`
  background: ${props => props.active ? "green" : "red"};
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: bold;
`;

const TableWrapper = styled.div`
  overflow-x: scroll;

  @media(max-width:428px){
  width:320px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 0.8rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  th {
    background: #008000;
    color: white;
    text-transform: uppercase;
    font-size: 0.85rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: ${props => props.bg || "#008000"};
  &:hover { opacity: 0.85; }
`;

const Scroll = styled.p`
text-align:center;

`



/* ---------------- Component ---------------- */
const UserDashboardPage = ({ userId }) => {
  const { domain } = useContext(Context);
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen]=useState(false);
   const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${domain}/get_user_dashboard.php?user_id=${userId}&_=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.user);
          setTransactions(data.transactions);
        } else {
          setError(data.error);
        }
        setLoading(false);
      })
      .catch(err => {
        setError("Error: " + err.message);
        setLoading(false);
      });
  }, [domain, userId]);



const handlePayment = () => {
  const expiryDate = new Date(user.membership_expiry); // "2026-08-28"
  
  if (expiryDate.getTime() < Date.now()) {
    setIsOpen(true);
  } else {
    Swal.fire({
      text: "Your Membership is still Active",
      icon: "info"
    });
  }
};



  if (loading) return <PageContainer><p>Loading dashboard...</p></PageContainer>;
  if (error) return <PageContainer><p style={{ color:"red" }}>{error}</p></PageContainer>;

  const expiryDate = user.membership_expiry ? new Date(user.membership_expiry) : null;
  const isActive = expiryDate && expiryDate >= new Date();

  return (
    <PageContainer>
      <DashboardWrapper>

        {/* User Info */}
        <Section>
          <SectionTitle>User Information</SectionTitle>
          <UserInfoRow>
            <p><FaUser /> <strong>Name:</strong> {user.surname} {user.othername}</p>
            <p><FaEnvelope /> <strong>Email:</strong> {user.email}</p>
            <p><FaPhone /> <strong>Mobile:</strong> {user.mobile}</p>
            <p><FaClock /> <strong>Membership:</strong> {user.membershipCategory || "None"}</p>
            <p><FaCalendar /> <strong>Membership next due date:</strong> {user.membership_expiry || "None"}</p>
            <p><strong>Status:</strong> 
              {user.membership_expiry ? (
                <StatusBadge active={isActive}>{isActive ? "Active" : "Expired"}</StatusBadge>
              ) : "No Membership"}
            </p>
          </UserInfoRow>

          <ButtonRow>
            <Button bg="#ffa500" onClick={()=>setShowUpdate(true)}>Update Profile</Button>
            <Button bg="#008000" onClick={handlePayment}><FaCreditCard />Due Payment</Button>
            {/* <Button bg="red"><FaSignOutAlt /> Logout</Button> */}
          </ButtonRow>
        </Section>

        {/* Transactions */}
        <Section>
          <SectionTitle>Payment History</SectionTitle>
            <Scroll>
                          <FaArrowLeft/>Scroll<FaArrowRight/>
                        </Scroll>
          <TableWrapper>
          
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Reference</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 ? (
                  transactions.map(t => (
                    <tr key={t.id}>
                      <td>{t.id}</td>
                      <td>{t.reference}</td>
                      <td>NGN {parseInt(t.amount).toLocaleString()}</td>
                      <td>{t.status}</td>
                      <td>{new Date(t.payment_date).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign:"center" }}>No transactions found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </TableWrapper>
        </Section>

      </DashboardWrapper>
      {isOpen&&<PaymentModal onClose={()=>setIsOpen(false)} user={user}/>}

          {showUpdate && (
        <UpdateProfileModal
          user={user}
          onClose={() => setShowUpdate(false)}
          onUpdated={updated => setUser({ ...user, ...updated })}
        />
      )}
    </PageContainer>
  );
};

export default UserDashboardPage;
