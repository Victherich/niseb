
// import React, { useRef, useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { Context } from "./Context";

// const CertificateWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 30px;
// `;

// const CertificateContainer = styled.div`
//   background: white;
//   border: 8px solid black;
//   position: relative;
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
//   width: 800px;
//   height: 1100px;
//   padding: 40px;
//   text-align: center;
// `;

// const Title = styled.h1`
//   font-size: 22px;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const Subtitle = styled.h2`
//   font-size: 20px;
//   font-weight: 600;
//   color: red;
//   margin-bottom: 40px;
// `;

// const Name = styled.h2`
//   font-size: 28px;
//   font-weight: bold;
//   text-decoration: underline;
//   margin: 10px 0;
// `;

// const Institution = styled.h3`
//   font-style: italic;
//   margin-bottom: 20px;
// `;

// const Validity = styled.h3`
//   margin-top: 30px;
//   font-weight: bold;
// `;

// const SignatureBlock = styled.div`
//   position: absolute;
//   bottom: 80px;
//   left: 80px;
//   text-align: left;

//   img {
//     width: 120px;
//     margin-bottom: 5px;
//   }

//   p {
//     font-size: 13px;
//     margin: 2px 0;
//   }
// `;

// const Seal = styled.div`
//   position: absolute;
//   bottom: 70px;
//   right: 120px;
//   width: 100px;
//   height: 100px;
//   background: red;
//   border-radius: 50%;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 20px;
// `;

// const Button = styled.button`
//   background: ${(props) => props.bg || "#444"};
//   color: white;
//   padding: 10px 18px;
//   border-radius: 6px;
//   border: none;
//   cursor: pointer;
//   font-weight: 500;
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// const CertificatePage = ({ userId }) => {
//   const certRef = useRef();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { domain } = useContext(Context);

//   console.log(user)
 

//   useEffect(() => {
//     setLoading(true);
//     fetch(`${domain}/get_user_dashboard.php?user_id=${userId}&_=${Date.now()}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           setUser(data.user);
    
//         } else {
//           setError(data.error);
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         setError("Error: " + err.message);
//         setLoading(false);
//       });
//   }, [domain, userId]);



//   // Download as JPG
//   const downloadAsJPG = async () => {
//     const canvas = await html2canvas(certRef.current, { scale: 2 });
//     const link = document.createElement("a");
//     link.download = "certificate.jpg";
//     link.href = canvas.toDataURL("image/jpeg", 1.0);
//     link.click();
//   };

//   // Download as PDF
//   const downloadAsPDF = async () => {
//     const canvas = await html2canvas(certRef.current, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("certificate.pdf");
//   };

//   return (
//     <CertificateWrapper>
//       {/* Certificate */}
//       <CertificateContainer ref={certRef}>
//         <Title>SOCIETY FOR EXPERIMENTAL BIOLOGY OF NIGERIA (NISEB)</Title>
//         <Subtitle>Certificate of Membership</Subtitle>

//         <p>This is to certify that</p>
//         <Name>{user?.surname} {user?.othername}</Name>
//         <p>of</p>
//         <Institution>{user?.institution}</Institution>

//         <p>
//           Membership Number <b>{user?.id}</b>
//         </p>
//         <p>
//           is a <b>{user?.membershipCategory}</b> of the Society for Experimental
//           Biology of Nigeria and has paid membership dues for the period
//         </p>

//         <Validity>Valid till {user?.membership_expiry}</Validity>

//         <SignatureBlock>
//           <img src="/signature.png" alt="Signature" />
//           <p>Prof. W. F. Gbolade, FNISEB</p>
//           <p>NISEB Secretary General</p>
//         </SignatureBlock>

//         <Seal />
//       </CertificateContainer>

//       {/* Buttons */}
//       <ButtonGroup>
//         <Button bg="green" onClick={downloadAsJPG}>
//           Download as JPG
//         </Button>
//         <Button bg="blue" onClick={downloadAsPDF}>
//           Download as PDF
//         </Button>
//       </ButtonGroup>
//     </CertificateWrapper>
//   );
// };

// export default CertificatePage;







// import React, { useRef, useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { Context } from "./Context";
// import niseblogo from '../Images/nisebLogo.png'

// const CertificateWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 40px;
//   background: #f0f0f0;
//   min-height: 100vh;
// `;

// const CertificateContainer = styled.div`
//   background: #fffdf5;
//   border: 12px solid #1d3557;
//   border-radius: 16px;
//   position: relative;
//   box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
//   width: 900px;
//   height: 1200px;
//   padding: 60px 50px;
//   text-align: center;
//   font-family: "Times New Roman", serif;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 20px;
//     left: 20px;
//     right: 20px;
//     bottom: 20px;
//     border: 20px solid #a8dadc;
//     border-radius: 10px;
//     pointer-events: none;
//   }
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   font-weight: 700;
//   color: #1d3557;
//   margin-bottom: 12px;
//   letter-spacing: 1px;
// `;

// const Subtitle = styled.h2`
//   font-size: 26px;
//   font-weight: bold;
//   color: #e63946;
//   margin-bottom: 60px;
//   text-transform: uppercase;
// `;

// const Text = styled.p`
//   font-size: 18px;
//   margin: 10px 0;
// `;

// const Name = styled.h2`
//   font-size: 34px;
//   font-weight: bold;
//   text-decoration: underline;
//   margin: 20px 0;
//   color: #222;
// `;

// const Institution = styled.h3`
//   font-style: italic;
//   font-size: 20px;
//   margin: 15px 0 40px 0;
//   color: #444;
// `;

// const Validity = styled.h3`
//   margin-top: 40px;
//   font-weight: bold;
//   font-size: 18px;
//   color: #1d3557;
// `;

// const SignatureBlock = styled.div`
//   position: absolute;
//   bottom: 120px;
//   left: 100px;
//   text-align: center;

//   img {
//     width: 150px;
//     margin-bottom: 6px;
//   }

//   p {
//     font-size: 14px;
//     margin: 2px 0;
//     font-weight: 500;
//   }
// `;

// const Seal = styled.div`
//   position: absolute;
//   bottom: 100px;
//   right: 120px;
//   width: 120px;
//   height: 120px;
//   background: radial-gradient(circle at center, #e63946, #9d0208);
//   border-radius: 50%;
//   box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);

//   &:after {
//     content: "NISEB";
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     font-size: 18px;
//     font-weight: bold;
//     color: white;
//     letter-spacing: 2px;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 30px;
// `;

// const Button = styled.button`
//   background: ${(props) => props.bg || "#444"};
//   color: white;
//   padding: 12px 20px;
//   border-radius: 8px;
//   border: none;
//   cursor: pointer;
//   font-weight: 600;
//   font-size: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

//   &:hover {
//     opacity: 0.9;
//     transform: translateY(-2px);
//     transition: 0.2s ease-in-out;
//   }
// `;

// const Logo = styled.img`

// width:150px;
// height:150px;
// margin-bottom:50px;
// margin-top:50px;

// `

// const CertificatePage = ({ userId }) => {
//   const certRef = useRef();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { domain } = useContext(Context);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`${domain}/get_user_dashboard.php?user_id=${userId}&_=${Date.now()}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           setUser(data.user);
//         } else {
//           setError(data.error);
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         setError("Error: " + err.message);
//         setLoading(false);
//       });
//   }, [domain, userId]);

//   // Download as JPG
//   const downloadAsJPG = async () => {
//     const canvas = await html2canvas(certRef.current, { scale: 2 });
//     const link = document.createElement("a");
//     link.download = "certificate.jpg";
//     link.href = canvas.toDataURL("image/jpeg", 1.0);
//     link.click();
//   };

//   // Download as PDF
//   const downloadAsPDF = async () => {
//     const canvas = await html2canvas(certRef.current, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("certificate.pdf");
//   };

//   return (
//     <CertificateWrapper>
//       <CertificateContainer ref={certRef}>
//         <Logo src={niseblogo} alt='logo'/>
//         <Title>SOCIETY FOR EXPERIMENTAL BIOLOGY OF NIGERIA (NISEB)</Title>
//         <Subtitle>Certificate of Membership</Subtitle>

//         <Text>This is to certify that</Text>
//         <Name>{user?.surname} {user?.othername}</Name>
//         <Text>of</Text>
//         <Institution>{user?.institution}</Institution>

//         <Text>
//           Membership Number <b>{user?.id}</b>
//         </Text>
//         <Text>
//           is a <b>{user?.membershipCategory}</b> of the Society for Experimental
//           Biology of Nigeria and has paid membership dues for the period
//         </Text>

//         <Validity>Valid till {user?.membership_expiry}</Validity>

//         <SignatureBlock>
//           <img src="/signature.png" alt="Signature" />
//           <p>Prof. W. F. Gbolade, FNISEB</p>
//           <p>NISEB Secretary General</p>
//         </SignatureBlock>

//         <Seal />
//       </CertificateContainer>

//       <ButtonGroup>
//         <Button bg="green" onClick={downloadAsJPG}>
//           Download as JPG
//         </Button>
//         <Button bg="blue" onClick={downloadAsPDF}>
//           Download as PDF
//         </Button>
//       </ButtonGroup>
//     </CertificateWrapper>
//   );
// };

// export default CertificatePage;









// import React, { useRef, useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { Context } from "./Context";
// import niseblogo from "../Images/nisebLogo.png";
// import signature from '../Images2/signature.png'

// const CertificateWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 40px;
//   background: #f7f7f7;
//   min-height: 100vh;
// `;

// const CertificateContainer = styled.div`
//   background: rgba(0,255,0,0.1);
//   border: 20px solid green; /* main border green */
//   border-radius: 16px;
//   position: relative;
//   box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
//   width: 900px;
//   height: 1200px;
//   padding: 60px 50px;
//   text-align: center;
//   font-family: "Times New Roman", serif;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 20px;
//     left: 20px;
//     right: 20px;
//     bottom: 20px;
//     border: 12px solid red; /* red accent border */
//     border-radius: 10px;
//     pointer-events: none;
//   }
// `;

// const Title = styled.h1`
//   font-size: 30px;
//   font-weight: 700;
//   color: green;
//   margin-bottom: 12px;
//   letter-spacing: 1px;
// `;

// const Subtitle = styled.h2`
//   font-size: 26px;
//   font-weight: bold;
//   color: red;
//   margin-bottom: 60px;
//   text-transform: uppercase;
// `;

// const Text = styled.p`
//   font-size: 1.5rem;
//   margin: 10px 0;
//   color: #333;
// `;

// const Name = styled.h2`
//   font-size: 34px;
//   font-weight: bold;
//   text-decoration: underline;
//   margin: 20px 0;
//   color: green;
//   text-align:center;
// `;

// const Institution = styled.h3`
//   font-style: italic;
//   font-size: 1.5rem;
//   margin: 15px 0 40px 0;
//   color: #444;
// `;

// const Validity = styled.h3`
//   margin-top: 40px;
//   font-weight: bold;
//   font-size: 1.5rem;
//   color: green;
// `;

// const SignatureBlock = styled.div`
//   position: absolute;
//   bottom: 120px;
//   left: 100px;
//   text-align: center;

//   img {
//     width: 150px;
//     margin-bottom: 6px;
//   }

//   p {
//     font-size: 14px;
//     margin: 2px 0;
//     font-weight: 500;
//   }
// `;

// const Seal = styled.div`
//   position: absolute;
//   bottom: 100px;
//   right: 120px;
//   width: 120px;
//   height: 120px;
//   background: radial-gradient(circle at center, red, darkred);
//   border-radius: 50%;
//   box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.5);

//   &:after {
//     content: "NISEB";
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     font-size: 18px;
//     font-weight: bold;
//     color: white;
//     letter-spacing: 2px;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 30px;
// `;

// const Button = styled.button`
//   background: ${(props) => props.bg || "#444"};
//   color: white;
//   padding: 12px 20px;
//   border-radius: 8px;
//   border: none;
//   cursor: pointer;
//   font-weight: 600;
//   font-size: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

//   &:hover {
//     opacity: 0.9;
//     transform: translateY(-2px);
//     transition: 0.2s ease-in-out;
//   }
// `;

// const Logo = styled.img`
//   width: 150px;
//   height: 150px;
//   margin-bottom: 40px;
//   margin-top: 30px;
//   border-radius:50%;
// `;

// const CertificatePage = ({ userId }) => {
//   const certRef = useRef();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { domain } = useContext(Context);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`${domain}/get_user_dashboard.php?user_id=${userId}&_=${Date.now()}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setUser(data.user);
//         } else {
//           setError(data.error);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Error: " + err.message);
//         setLoading(false);
//       });
//   }, [domain, userId]);

//   // Download as JPG
//   const downloadAsJPG = async () => {
//     const canvas = await html2canvas(certRef.current, { scale: 2 });
//     const link = document.createElement("a");
//     link.download = "certificate.jpg";
//     link.href = canvas.toDataURL("image/jpeg", 1.0);
//     link.click();
//   };

//   // Download as PDF
//   const downloadAsPDF = async () => {
//     const canvas = await html2canvas(certRef.current, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("certificate.pdf");
//   };

//   return (
//     <CertificateWrapper>
//       <CertificateContainer ref={certRef}>
//         <Logo src={niseblogo} alt="logo" />
//         <Title>SOCIETY FOR EXPERIMENTAL BIOLOGY OF NIGERIA (NISEB)</Title>
//         <Subtitle>Certificate of Membership</Subtitle>

//         <Text>This is to certify that</Text>
//         <Name>
//           {user?.surname} {user?.othername}
//         </Name>
//         <Text>of</Text>
//         <Institution>{user?.institution}</Institution>

//         <Text>
//           Membership Number <b>{user?.id}</b>
//         </Text>
//         <Text>
//           is a <b>{user?.membershipCategory.toUpperCase()}</b> of the Society for Experimental
//           Biology of Nigeria and has paid membership dues for the period
//         </Text>

//         <Validity>Valid till {user?.membership_expiry}</Validity>

//         <SignatureBlock>
//           <img src={signature} alt="Signature" />
//           <p style={{fontWeight:"bold"}}>Prof. W. F. Gbolade, FNISEB</p>
//           <p>NISEB Secretary General</p>
//         </SignatureBlock>

//         <Seal />
//       </CertificateContainer>

//       <ButtonGroup>
//         <Button bg="green" onClick={downloadAsJPG}>
//           Download as JPG
//         </Button>
//         <Button bg="red" onClick={downloadAsPDF}>
//           Download as PDF
//         </Button>
//       </ButtonGroup>
//     </CertificateWrapper>
//   );
// };

// export default CertificatePage;






import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Context } from "./Context";
import niseblogo from "../Images/nisebLogo.png";
import signature from "../Images2/signature.png";
import { use } from "react";
import Swal from "sweetalert2";

const CertificateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Reduced padding for smaller screens */
  background: #f7f7f7;
  min-height: 100vh;
  box-sizing: border-box; /* Ensures padding doesn't cause overflow */
`;

const CertificateContainer = styled.div`
  background: rgba(0, 255, 0, 0.1);
  border: 20px solid green;
  border-radius: 16px;
  position: relative;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
  width: 100%; /* Make it full width of its container */
  max-width: 900px; /* Set a max-width for large screens */
  aspect-ratio: 900 / 1200; /* Maintain the aspect ratio (width/height) */
  padding: 5% 4%; /* Use percentage-based padding */
  text-align: center;
  font-family: "Times New Roman", serif;
  box-sizing: border-box;

  &:before {
    content: "";
    position: absolute;
    top: 2.5%;
    left: 2.5%;
    right: 2.5%;
    bottom: 2.5%;
    border: 12px solid red;
    border-radius: 10px;
    pointer-events: none;

    @media (max-width: 768px) {
      border-width: 6px;
    }
  }

  @media (max-width: 768px) {
    padding: 8% 6%;
  }
`;

const Title = styled.h1`
  font-size: clamp(1rem, 3.5vw, 30px);
  font-weight: 700;
  color: green;
  margin-bottom: 12px;
  letter-spacing: 1px;
`;

const Subtitle = styled.h2`
  font-size: clamp(0.9rem, 3vw, 26px);
  font-weight: bold;
  color: red;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: clamp(0.8rem, 2vw, 1.5rem);
  margin: 10px 0;
  color: #333;
`;

const Name = styled.h2`
  font-size: clamp(1.2rem, 4vw, 34px);
  font-weight: bold;
  text-decoration: underline;
  margin: 20px 0;
  color: green;
  text-align: center;
`;

const Institution = styled.h3`
  font-style: italic;
  font-size: clamp(0.9rem, 2vw, 1.5rem);
  margin: 15px 0 40px 0;
  color: #444;
`;

const Validity = styled.h3`
  margin-top: 40px;
  font-weight: bold;
  font-size: clamp(0.9rem, 2vw, 1.5rem);
  color: green;
`;

const SignatureBlock = styled.div`
  position: absolute;
  bottom: 80px;
  left: 10%;
  width: 35%;
  text-align: center;

  @media (max-width: 768px) {
    position: static;
    margin-top: 50px;
    width: 100%;
    left: 0;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: clamp(80px, 15vw, 150px);
    margin-bottom: 6px;
  }

  p {
    font-size: clamp(10px, 1.5vw, 14px);
    margin: 2px 0;
    font-weight: 500;
  }
`;

const Seal = styled.div`
  position: absolute;
  bottom: 80px;
  right: 10%;
  width: clamp(80px, 15vw, 120px);
  height: clamp(80px, 15vw, 120px);
  background: radial-gradient(circle at center, red, darkred);
  border-radius: 50%;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    position: static;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(14px, 2vw, 18px);
    font-weight: bold;
    color: white;
    letter-spacing: 2px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 80%;
  }
`;

const Button = styled.button`
  background: ${(props) => props.bg || "#444"};
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  flex-grow: 1;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    transition: 0.2s ease-in-out;
  }
`;

const Logo = styled.img`
  width: clamp(100px, 15vw, 150px);
  height: auto;
  margin-bottom: 40px;
  margin-top: 30px;
  border-radius: 50%;
`;

const CertificatePage = ({ userId }) => {
  const certRef = useRef();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { domain } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    fetch(`${domain}/get_user_dashboard.php?user_id=${userId}&_=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        } else {
          setError(data.error);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error: " + err.message);
        setLoading(false);
      });
  }, [domain, userId]);

  const downloadAsJPG = async () => {
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.download = "certificate.jpg";
    link.href = canvas.toDataURL("image/jpeg", 1.0);
    link.click();
  };

  const downloadAsPDF = async () => {
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("certificate.pdf");
  };

  useEffect(()=>{
    Swal.fire({
      text:"Certifiates are better viewed on desktop Devices.",
      icon:'info',
      timer:3000
    })
  },[])

  return (
    <CertificateWrapper>
      <CertificateContainer ref={certRef}>
        <Logo src={niseblogo} alt="logo" />
        <Title>SOCIETY FOR EXPERIMENTAL BIOLOGY OF NIGERIA (NISEB)</Title>
        <Subtitle>Certificate of Membership</Subtitle>

        <Text>This is to certify that</Text>
        <Name>
          {user?.surname} {user?.othername}
        </Name>
        <Text>of</Text>
        <Institution>{user?.institution}</Institution>

        <Text>
          Membership Number <b>{user?.id}</b>
        </Text>
        <Text>
          is a <b>{user?.membershipCategory?.toUpperCase()}</b> of the Society
          for Experimental Biology of Nigeria and has paid membership dues for
          the period
        </Text>

        <Validity>Valid till {user?.membership_expiry}</Validity>

        <SignatureBlock>
          <img src={signature} alt="Signature" />
          <p style={{ fontWeight: "bold" }}>Prof Ehimwenma Omoregie</p>
          <p>President of National Executive Council (NEC)</p>
        </SignatureBlock>

        <Seal />
      </CertificateContainer>

      <ButtonGroup>
        <Button bg="green" onClick={downloadAsJPG}>
          Download as JPG
        </Button>
        <Button bg="red" onClick={downloadAsPDF}>
          Download as PDF
        </Button>
      </ButtonGroup>
    </CertificateWrapper>
  );
};

export default CertificatePage;






