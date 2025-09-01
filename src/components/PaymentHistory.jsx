
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";
import { FaCalendarAlt, FaMoneyBill, FaEnvelope, FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* ======= Styled Components ======= */
const PageContainer = styled.div`
  background: #f9fafb;
  min-height: 100vh;
  padding: 2rem 1rem;
  padding-top: 100px;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const SectionTitle = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  color: #008000;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #ffa500;
  display: inline-block;
  padding-bottom: 0.4rem;
`;

const YearSelector = styled.select`
  padding: 0.6rem 1rem;
  border: 2px solid #008000;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const TableWrapper = styled.div`
  overflow-x: scroll;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  @media(max-width:428px){
  width:320px;
  }
`;

const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;

  th, td {
    padding: 0.85rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }

  th {
    background: #008000;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  tr:hover {
    background: #f3f4f6;
  }
`;

const StatusTag = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: bold;
  background: ${(props) =>
    props.status === "success" ? "green" : "red"};
  color: white;
`;

const LoadingMsg = styled.div`
  color: #008000;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 1rem;
`;


const Scroll = styled.p`
text-align:center;

`

/* ======= Component ======= */
const PaymentHistoryPage = () => {
  const { domain } = useContext(Context);
  const [year, setYear] = useState(new Date().getFullYear());
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch payment history
  const fetchHistory = (selectedYear) => {
    setLoading(true);
    setError(null);
    fetch(`${domain}/get_payment_history.php?year=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTransactions(data.transactions);
        } else {
          setTransactions([]);
          setError(data.error || "Failed to fetch history");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error connecting: " + err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHistory(year);
  }, [year, domain]);

  // Generate year options (last 10 years)
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle>Payment History</SectionTitle>

        {/* Year Selector */}
        <div style={{ textAlign: "center" }}>
          <YearSelector value={year} onChange={(e) => setYear(e.target.value)}>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </YearSelector>
        </div>

        {loading && <LoadingMsg>Loading payment history...</LoadingMsg>}
        {error && <ErrorMsg>{error}</ErrorMsg>}

        {!loading && !error && transactions.length > 0 && (
          <TableWrapper>
             <Scroll>
                          <FaArrowLeft/>Scroll<FaArrowRight/>
                        </Scroll>
            <HistoryTable>
              <thead>
                <tr>
                  <th><FaUser /> Member</th>
                  <th><FaEnvelope /> Email</th>
                  <th>Membership</th>
                  <th><FaMoneyBill /> Amount</th>
                  <th>Reference</th>
                  <th>Status</th>
                  <th><FaCalendarAlt /> Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id}>
                    <td>{t.surname} {t.othername}</td>
                    <td>{t.email}</td>
                    <td>{t.membershipCategory}</td>
                   <td>NGN {Number(t.amount).toLocaleString()}</td>

                    <td>{t.reference}</td>
                    <td><StatusTag status={t.status}>{t.status}</StatusTag></td>
                    <td>{new Date(t.payment_date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </HistoryTable>
          </TableWrapper>
        )}

        {!loading && !error && transactions.length === 0 && (
          <ErrorMsg>No transactions found for {year}.</ErrorMsg>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default PaymentHistoryPage;
