
// import React, { createContext } from 'react'

// export const Context = createContext();

// const ContextProvider = ({children}) => {




// const domain = "https://nisebnigeria.com/api_niseb"
// const dollarRate = 1600
// const payStackTestKey = "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4"   //hadassahpremium test key
// const payStackLiveKey = 'pk_live_97c6ecd55b15f2d30a0903f69084bbacc042de40'

//   return (
//     <Context.Provider  value={{domain, dollarRate, payStackTestKey, payStackLiveKey}}>
//       {children}
//     </Context.Provider>
//   )
// }

// export default ContextProvider





// src/components/Context.js
import React, { createContext, useState } from "react";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const domain = "https://nisebnigeria.com/api_niseb";
  const dollarRate = 1600;
  const payStackTestKey = "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4";
  const payStackLiveKey = "pk_live_97c6ecd55b15f2d30a0903f69084bbacc042de40";

 

 
  // const generateAndSendCertificate = async ({
  //   surname,
  //   othername,
  //   institution,
  //   id,
  //   membership_expiry,
  //   email,
  //   navigate
  // }) => {
  //   const fullName = `${surname?.toUpperCase() || ""} ${othername?.toUpperCase() || ""}`.trim();
  //   // const expiryDate = new Date(membership_expiry).toLocaleDateString("en-GB", {
  //   //   day: "2-digit",
  //   //   month: "long",
  //   //   year: "numeric",
  //   // });

  //   const expiryYear = membership_expiry ? membership_expiry : new Date().getFullYear();


  //   const issueDate = new Date().toLocaleDateString();

  //   const img = new Image();
  //   img.src = "/certificate_template.png";
  //   img.crossOrigin = "Anonymous";

  //   img.onload = async () => {
  //     const doc = new jsPDF("p", "mm", "a4");

  //     // Background
  //     doc.addImage(img, "PNG", 0, 0, 210, 297);

  //     // Certificate details
  //     doc.setFont("helvetica", "bold");
  //     doc.setFontSize(20);
  //     doc.text(fullName, 105, 143, { align: "center" });

  //     doc.setFont("helvetica", "normal");
  //     doc.setFontSize(12);
  //     doc.text(institution, 105, 165, { align: "center" });

  //     doc.setFont("helvetica", "bold");
  //     doc.setFontSize(16);
  //     doc.text(id.toString(), 119, 183, { align: "center" });

  //     doc.setFont("helvetica", "bold");
  //     doc.setFontSize(14);
  //     doc.text(`Valid from January to December ${expiryYear}`, 105, 220, { align: "center" });

  //     // Convert to blob
  //     const pdfBlob = doc.output("blob");

  //     const formData = new FormData();
  //     formData.append("email", email);
  //     formData.append("fullname", fullName);
  //     formData.append("certificate", pdfBlob, `${fullName}_certificate.pdf`);

  //     Swal.fire({ text: "Sending your certificate...", allowOutsideClick: false });
  //     Swal.showLoading();

  //     try {
  //       const res = await fetch(`${domain}/send_certificate.php`, {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const result = await res.json();

  //       if (result.success) {
  //         Swal.fire({title:"Success", 
  //           text:"Certificate sent to your email ✅", 
  //           icon:"success", 
  //           allowOutsideClick:false}).then((result)=>{if(result.isConfirmed){
  //        window.location.reload();   
  //         }});
  //         if (navigate) navigate("/userdashboard");
  //       } else {
  //         Swal.fire("Error", result.error || "Failed to send certificate", "error");
  //       }
  //     } catch (err) {
  //       Swal.fire("Error", "Network error while sending certificate.", "error");
  //       console.error("Network error:", err);
  //     }
  //   };
  // };

const generateAndSendCertificate = async ({
  surname,
  othername,
  institution,
  id,
  membership_expiry,
  email,
  navigate,
  maxRetries = 3, // maximum number of retry attempts
  retryDelay = 2000, // delay between retries in ms
}) => {
  const fullName = `${surname?.toUpperCase() || ""} ${othername?.toUpperCase() || ""}`.trim();
  const expiryYear = membership_expiry ? membership_expiry : new Date().getFullYear();
  const issueDate = new Date().toLocaleDateString();

  const img = new Image();
  img.src = "/certificate_template.png";
  img.crossOrigin = "Anonymous";

  img.onload = async () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Background
    doc.addImage(img, "PNG", 0, 0, 210, 297);

    // Certificate details
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(fullName, 105, 143, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(institution, 105, 165, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(id.toString(), 119, 183, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`Valid from January to December ${expiryYear}`, 105, 220, { align: "center" });

    // Convert to blob
    const pdfBlob = doc.output("blob");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("fullname", fullName);
    formData.append("certificate", pdfBlob, `${fullName}_certificate.pdf`);

    let attempt = 0;

    const sendCertificate = async () => {
      attempt++;
      Swal.fire({ text: "Sending your certificate...", allowOutsideClick: false });
      Swal.showLoading();

      // alert('Click ok to proceed')

      try {
        const res = await fetch(`${domain}/send_certificate.php`, {
          method: "POST",
          body: formData,
        });
        const result = await res.json();

        if (result.success) {
          Swal.fire({
            title: "Success",
            text: "Certificate sent to your email ✅",
            icon: "success",
            allowOutsideClick: false,
          }).then((res) => {
            if (res.isConfirmed) {
              window.location.reload();
            }
          });
          if (navigate) navigate("/userdashboard");
        } else {
          if (attempt < maxRetries) {
            console.warn(`Attempt ${attempt} failed: ${result.error}. Retrying in ${retryDelay}ms...`);
            setTimeout(sendCertificate, retryDelay);
          } else {
            Swal.fire("Error", result.error || "Failed to send certificate after multiple attempts", "error");
          setTimeout(sendCertificate, retryDelay);
          }
        }
      } catch (err) {
        if (attempt < maxRetries) {
          console.warn(`Attempt ${attempt} network error. Retrying in ${retryDelay}ms...`, err);
          setTimeout(sendCertificate, retryDelay);
        } else {
          Swal.fire("Error", "Network error while sending certificate.", "error");
          console.error("Network error:", err);
          setTimeout(sendCertificate, retryDelay);
        }
      }
    };

    // Start the first attempt
    sendCertificate();
  };
};


  

 const membershipFees = [
  { id: 1, name: "Student", amount: 5000, currency:"₦" },
  { id: 2, name: "Fullmember ", amount: 10000, currency:"₦" },
  { id: 3, name: "Fellow ", amount: 20000, currency:"₦" },
  { id: 4, name: "Corporate ", amount: 50000, currency:"₦" },
  { id: 5, name: "Foreign (Undergraduate)", amount: 10 * dollarRate, currency:"$" },
  { id: 6, name: "Foreign (Graduate)", amount: 20 * dollarRate, currency:"$" },
  { id: 7, name: "Foreign (Fullmember)", amount: 50 * dollarRate, currency:"$" },
];



  return (
    <Context.Provider
      value={{
        domain,
        dollarRate,
        payStackTestKey,
        payStackLiveKey,
        generateAndSendCertificate, // 🔥 exposed globally
        membershipFees
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;






// database
// user: User “nisebnig_niseb” was added to the database “nisebnig_niseb”.
// pw: #Niseb123niseb