
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
import React, { createContext, useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearPaymentSession } from "../Features/Slice";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const domain = "https://nisebnigeria.com/api_niseb";
  const dollarRate = 1600;

  const payStackTestKey = ''

// //  HADASSAH PREMIUM
//     // const payStackLiveKey = "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4";  //HADASAH PREMIUM TEST
//     const payStackLiveKey = "pk_live_afb3375b9a770a5a332904dcf1a26e77c2a5f170"; //HADASSAH PREMIUM LIVE


    // NISEB
  // const payStackLiveKey = "pk_test_cbf2eb06be3fa88fa337896bfa051e525d24ffe5"; // NISEB KEY TEST
  const payStackLiveKey = "pk_live_97c6ecd55b15f2d30a0903f69084bbacc042de40"; // NISEB KEY LIVE


  const userInfo = useSelector(state=>state.userInfo);
const userId = userInfo?.id
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const dispatch = useDispatch();




  const membershipFees = [
    { id: 8, name: "-- select from below 🔽-- ", amount: 100, currency:"₦" },
  { id: 1, name: "Student Member", amount: 5000, currency:"₦" },
  { id: 2, name: "Full Member", amount: 10000, currency:"₦" },
  { id: 3, name: "Fellow Member", amount: 20000, currency:"₦" },
  { id: 4, name: "Corporate Member", amount: 50000, currency:"₦" },
  { id: 5, name: "Foreign (Undergraduate) Member", amount: 10 * dollarRate, currency:"$" },
  { id: 6, name: "Foreign (Graduate) Member", amount: 20 * dollarRate, currency:"$" },
  { id: 7, name: "Foreign (Full Member)", amount: 50 * dollarRate, currency:"$" },
];


// console.log(user)


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
  membershipCategory,
  title,
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
  const fullName = `${title?.toUpperCase() || ""} ${surname?.toUpperCase() || ""} ${othername?.toUpperCase() || ""}`.trim();
  const expiryYear = membership_expiry ? membership_expiry : new Date().getFullYear();
  const issueDate = new Date().toLocaleDateString();
const membership = membershipFees.find(fee => fee.id === Number(membershipCategory))?.name || membershipCategory;



  const img = new Image();
  img.src = "/certificate_template.jpg";
  img.crossOrigin = "Anonymous";

  img.onload = async () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Background
    doc.addImage(img, "JPEG", 0, 0, 210, 297);

    // Certificate details
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(fullName, 105, 130, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(institution, 105, 146, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(id.toString(), 118, 162.5, { align: "center" });

     doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(membership, 105, 183, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`Valid from January to December ${expiryYear}`, 105, 220, { align: "center" });

    // Convert to blob
    const pdfBlob = doc.output("blob");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("fullname", fullName);
    formData.append("certificate", pdfBlob, `${fullName}_certificate.pdf`);

 sendCertificateToTreasurer(formData);
    
 let attempt = 0;

    const sendCertificate = async () => {
      attempt++;
      Swal.fire({ text: "Sending your certificate...", allowOutsideClick: false });
      Swal.showLoading();

      // alert('Click ok to proceed')

      try {
        const res = await fetch(`${domain}/send_certificate2.php`, {
          method: "POST",
          body: formData,
        });
        const result = await res.json();

        if (result.success) {
    handleClearPaymentSession();
          Swal.fire({
            title: "Success",
            text: "Certificate sent to your email . Please go to your member login",
            icon: "success",
            allowOutsideClick: false,
            confirmButtonText:"Ok"
          }).then((res) => {
       if (res.isConfirmed) {
  if (window.location.pathname === "/admindashboard") {
    // ✅ Admin dashboard → just refresh
    window.location.reload();
  } else if (window.location.pathname !== "/userdashboard") {
    // ✅ Other pages (except userdashboard) → go to login
    window.location.href = "/userlogin";
    localStorage.removeItem("niseb_formData");
  } else {
    // ✅ userdashboard → refresh
    window.location.reload();
  }
}

          });
          // if (navigate) navigate("/userdashboard");
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


const handleClearPaymentSession = ()=>{
   dispatch(clearPaymentSession());
}




const sendCertificateToTreasurer = async (formData) => {
  try {
    // Swal.fire({
    //   text: "Sending certificate copy to Treasurer...",
    //   allowOutsideClick: false,
    //   didOpen: () => Swal.showLoading(),
    // });

    const res = await fetch(`${domain}/send_certificate_treasurer2.php`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    // Swal.close();

    if (result.success) {
      // Swal.fire({
      //   title: "✅ Copy Sent",
      //   text: "Certificate successfully..",
      //   icon: "success",
      // });
    } else {
      // Swal.fire({
      //   title: "⚠️ Treasurer Email Failed",
      //   text: result.message || "Could not send certificate to Treasurer.",
      //   icon: "warning",
      // });
    }
  } catch (err) {
    // Swal.close();
    // Swal.fire("Error", "Failed to send certificate to Treasurer.", "error");
    console.error("Treasurer send error:", err);
  }
};






// TEST certificate generation
const generateCertificateTest = async ({
  membershipCategory,
  title,
  surname,
  othername,
  institution,
  id,
  membership_expiry,
}) => {
  const fullName = `${title?.toUpperCase() || ""} ${surname?.toUpperCase() || ""} ${othername?.toUpperCase() || ""}`.trim();
  const expiryYear = membership_expiry ? membership_expiry : new Date().getFullYear();
  const membership = membershipFees.find(fee => fee.id === Number(membershipCategory))?.name || membershipCategory;

  // Load background image
  const img = new Image();
  img.src = "/certificate_template.jpg"; // use your .jpg file
  img.crossOrigin = "Anonymous";

  img.onload = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Background image
    doc.addImage(img, "JPEG", 0, 0, 210, 297);

    // Certificate text
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(fullName, 105, 130, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(institution, 105, 146, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(id.toString(), 118, 162.5, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(membership, 105, 183, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`Valid from January to December ${expiryYear}`, 105, 220, { align: "center" });

    // ✅ Open certificate in new browser tab
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  img.onerror = () => {
    Swal.fire("Error", "Failed to load certificate background image.", "error");
  };
};




// getting user
  const getUser=()=>{
    setLoading(true);
    fetch(`${domain}/get_user_dashboard.php?user_id=${userId}&_=${Date.now()}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.user);
          setTransactions(data.transactions);
             setLoading(false);
                  // ✅ Save user to localStorage for persistence
      localStorage.setItem("niseb_user", JSON.stringify(data.user));
      return data.user; // ✅ return fetched user
        } else {
          setError(data.error);
        }
        setLoading(false);
      })
      .catch(err => {
        setError("Error: " + err.message);
        setLoading(false);
      });
    }


useEffect(() => {
getUser();
  }, [domain, userId]);


  












// ======================polling for annula payment renew 
// function startPaymentPolling1(paymentType) {

//    // ✅ Get user email from localStorage
//   const savedForm = localStorage.getItem("niseb_formData");
//   const userEmail = savedForm ? JSON.parse(savedForm).email : null;

//   if (!userEmail || !paymentType) return;

//   const fetchPayment = async () => {
//     try {
//       const res = await fetch(`${domain}/fetch_user_payment1.php`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: userEmail,
//           custom_payment_type: paymentType,
//         }),
//       });

//       const data = await res.json();

//       if (data.success && data.payment && data.payment.status === "success") {
//         Swal.fire({
//           icon: "success",
//           title: "Payment Successful.!",
//           text: `Reference: ${data.payment.reference}\nAmount: ₦${data.payment.amount}`,
//           allowOutsideClick: false,
//           confirmButtonText: "Click here to proceed",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             handleSignup(
//               // data.payment.email,
//               data.payment.reference,
//               data.payment.amount,
//               // data.payment.year,
//               data.payment.membership,
//               data.payment.id
//             );
          
//           }
//         });
//       }
//     } catch (err) {
//       console.error("Polling error:", err);
//     }
//   };

//   // Run immediately
//   fetchPayment();

//   // Keep checking every 10 seconds
//   setInterval(fetchPayment, 10000);
// }

function startPaymentPolling1(paymentType) {
  // ✅ Get user email from localStorage
  const savedForm = localStorage.getItem("niseb_formData");
  const userEmail = savedForm ? JSON.parse(savedForm).email : null;

  if (!userEmail || !paymentType) {
    console.warn("Missing userEmail or paymentType for polling");
    return;
  }

  const fetchPayment = async () => {
    try {
      const res = await fetch(`${domain}/fetch_user_payment1.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          custom_payment_type: paymentType,
        }),
      });

      const text = await res.text(); // read raw text to handle any parsing issue
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Invalid JSON response:", text);
        return; // continue polling anyway
      }

      if (data.success && data.payment && data.payment.status === "success") {

            handleSignup(
              data.payment.reference,
              data.payment.amount,
              data.payment.membership,
              data.payment.id
            );

            console.log(data)
        // Swal.fire({
        //   icon: "success",
        //   title: "Payment Successful!",
        //   text: `Reference: ${data.payment.reference}\nAmount: ₦${data.payment.amount}`,
        //   allowOutsideClick: false,
        //   confirmButtonText: "Click here to proceed",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     handleSignup(
        //       data.payment.reference,
        //       data.payment.amount,
        //       data.payment.membership,
        //       data.payment.id
        //     );
           
        //   }
        // });
      }
    } catch (err) {
      console.error("Polling error:", err);
    }
  };

  // ✅ Run immediately once
  fetchPayment();

  // ✅ Then continue polling forever every 10 seconds
  const intervalId = setInterval(fetchPayment, 10000);

  // Optional: return cleanup function (in case component unmounts)
  return () => clearInterval(intervalId);
}



// useEffect(() => {
//   startPaymentPolling1("payment1");
// }, []);

useEffect(() => {
  const stopPolling = startPaymentPolling1("payment1");

  // Cleanup if component unmounts (optional)
  return () => {
    if (stopPolling) stopPolling();
  };
}, []);




const handleSignup = async (reference, amount,membership, transactionId) => {
  Swal.fire({text:"signing up..."});
  Swal.showLoading();
  try {
    setLoading(true);
    setError(null);

    // ✅ Get saved form data from localStorage
    const savedForm = localStorage.getItem("niseb_formData");
    if (!savedForm) {
      Swal.fire({
        icon: "error",
        title: "No Form Data Found",
        text: "Please fill out the application form before signing up.",
      });
      setLoading(false);
      return;
    }

    const formData = JSON.parse(savedForm); // parse it

    // ✅ Send to backend for signup
    const response = await fetch(`${domain}/user_signup.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // use stored form data
    });

    const data = await response.json();

    if (data.success) {
      // Swal.fire({
      //   icon: "success",
      //   title: "Registration Successful!",
      //   text: "Your account has been created successfully.",
      //   confirmButtonText: "Continue",
      // });

    savePayment1(data.user_id, reference, amount,membership, transactionId);

      // Optionally redirect or update user state
      // navigate("/userlogin");
      console.log(data)
    

    } else {
      // Swal.fire({
        // icon: "error",
        // title: "Signup Failed",
        // text: data.error || "An unknown error occurred.",
      // });
      console.log(data.error)
    }
  } catch (err) {
    console.error("Signup error:", err);
    // Swal.fire({
      // icon: "error",
      // title: "Network Error",
      // text: "Could not connect to the server. Please try again.",
    // });
  } finally {
    setLoading(false);
  }
};







// function startPaymentPolling2(userId, paymentType) {
//   if (!userId || !paymentType) return;

//   const fetchPayment = async () => {
//     try {
//       const res = await fetch(`${domain}/fetch_user_payment.php`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user_id: userId,
//           custom_payment_type: paymentType,
//         }),
//       });

//       const data = await res.json();

//       if (data.success && data.payment && data.payment.status === "success") {
//         Swal.fire({
//           icon: "success",
//           title: "Payment Successful..!",
//           text: `Reference: ${data.payment.reference}\nAmount: ₦${data.payment.amount}`,
//           allowOutsideClick:false,
//           confirmButtonText:"Click here to proceed"
//         }).then((result)=>{if(result.isConfirmed){
//             savePayment2(data.payment.user_id, 
//               data.payment.reference, 
//               data.payment.amount, 
//               data.payment.year,
//               data.payment.membership,
//               data.payment.id
//             )
//         }})
//         console.log(data)
//       }
//     } catch (err) {
//       console.error("Polling error:", err);
//     }
//   };

//   // Run immediately
//   fetchPayment();

//   // Keep running forever every 2 seconds
//   setInterval(fetchPayment, 10000);
// }

// useEffect(() => {
//   startPaymentPolling2(userInfo?.id, "payment2");
// }, []);





function startPaymentPolling2(userId, paymentType) {
  if (!userId || !paymentType) {
    console.warn("Missing userId or paymentType for polling");
    return;
  }

  const fetchPayment = async () => {
    try {
      const res = await fetch(`${domain}/fetch_user_payment.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          custom_payment_type: paymentType,
        }),
      });

      // Handle raw text to prevent crashes from invalid JSON
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Invalid JSON response:", text);
        return; // continue polling anyway
      }

      if (data.success && data.payment && data.payment.status === "success") {
       savePayment2(
              data.payment.user_id,
              data.payment.reference,
              data.payment.amount,
              data.payment.year,
              data.payment.membership,
              data.payment.id
            );

        // Swal.fire({
        //   icon: "success",
        //   title: "Payment Successful!",
        //   text: `Reference: ${data.payment.reference}\nAmount: ₦${data.payment.amount}`,
        //   allowOutsideClick: false,
        //   confirmButtonText: "Click here to proceed",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     savePayment2(
        //       data.payment.user_id,
        //       data.payment.reference,
        //       data.payment.amount,
        //       data.payment.year,
        //       data.payment.membership,
        //       data.payment.id
        //     );
        //   }
        // });
      }
    } catch (err) {
      console.error("Polling error:", err);
    }
  };

  // ✅ Run immediately on mount
  fetchPayment();

  // ✅ Keep running every 10 seconds forever
  const intervalId = setInterval(fetchPayment, 10000);

  // ✅ Return cleanup so React can clear it on unmount (optional safety)
  return () => clearInterval(intervalId);
}


useEffect(() => {
  const stopPolling = startPaymentPolling2(userInfo?.id, "payment2");

  // Optional cleanup on unmount
  return () => {
    if (stopPolling) stopPolling();
  };
}, [userInfo?.id]);











// function startPaymentPolling3(userId, paymentType) {
//   if (!userId || !paymentType) return;

//   const fetchPayment = async () => {
//     try {
//       const res = await fetch(`${domain}/fetch_user_payment.php`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user_id: userId,
//           custom_payment_type: paymentType,
//         }),
//       });

//       const data = await res.json();

//       if (data.success && data.payment && data.payment.status === "success") {
//         Swal.fire({
//           icon: "success",
//           title: "Payment Successful...!",
//           text: `Reference: ${data.payment.reference}\nAmount: ₦${data.payment.amount}`,
//           allowOutsideClick:false,
//           confirmButtonText:"Click here to proceed"
//         }).then((result)=>{if(result.isConfirmed){
//             savePayment3(data.payment.user_id, 
//               data.payment.reference, 
//               data.payment.amount, 
//               data.payment.year,
//               data.payment.membership,
//               data.payment.id
//             )
//         }})
//         console.log(data)
//       }
//     } catch (err) {
//       console.error("Polling error:", err);
//     }
//   };

//   // Run immediately
//   fetchPayment();

//   // Keep running forever every 2 seconds
//   setInterval(fetchPayment, 10000);
// }

// useEffect(() => {
//   startPaymentPolling3(userInfo?.id, "payment3");
// }, []);


function startPaymentPolling3(userId, paymentType) {
  if (!userId || !paymentType) {
    console.warn("Missing userId or paymentType for polling");
    return;
  }

  const fetchPayment = async () => {
    try {
      const res = await fetch(`${domain}/fetch_user_payment.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          custom_payment_type: paymentType,
        }),
      });

      // Handle raw response safely
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Invalid JSON response:", text);
        return; // continue polling regardless
      }

      // ✅ Check for success and handle payment
      if (data.success && data.payment && data.payment.status === "success") {
           savePayment3(
              data.payment.user_id,
              data.payment.reference,
              data.payment.amount,
              data.payment.year,
              data.payment.membership,
              data.payment.id
            );
        // Swal.fire({
        //   icon: "success",
        //   title: "Payment Successful!",
        //   text: `Reference: ${data.payment.reference}\nAmount: ₦${data.payment.amount}`,
        //   allowOutsideClick: false,
        //   confirmButtonText: "Click here to proceed",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     savePayment3(
        //       data.payment.user_id,
        //       data.payment.reference,
        //       data.payment.amount,
        //       data.payment.year,
        //       data.payment.membership,
        //       data.payment.id
        //     );
        //   }
        // });
        console.log("✅ Payment success:", data);
      }
    } catch (err) {
      console.error("Polling error:", err);
    }
  };

  // ✅ Run immediately once
  fetchPayment();

  // ✅ Keep running forever every 10 seconds
  const intervalId = setInterval(fetchPayment, 10000);

  // ✅ Return cleanup function to clear interval when component unmounts
  return () => clearInterval(intervalId);
}


useEffect(() => {
  const stopPolling = startPaymentPolling3(userInfo?.id, "payment3");

  // Optional cleanup on unmount
  return () => {
    if (stopPolling) stopPolling();
  };
}, [userInfo?.id]);







async function savePayment1(user_id, reference, amount,membership, transactionId) {

  Swal.fire({text:"Please wait...", allowOutsideClick:false});
  Swal.showLoading();
  try {
    const res = await fetch(`${domain}/save_payment.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
        reference: reference,
        amount,
        membership: membership,
        description: `Membership Registration`,
      }),
    });

    const text = await res.text();

    if (!text) {
      throw new Error("Empty response from server");
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON response from server");
    }

    if (!data.success) {
      throw new Error(data.error || "Payment saving failed");
    }
deleteTransactionById(transactionId);

const storedUser = JSON.parse(localStorage.getItem("niseb_formData"));

if (storedUser) {
  generateAndSendCertificate({
    membershipCategory: storedUser.membershipCategory,
    title: storedUser.title,
    surname: storedUser.surname,
    othername: storedUser.othername,
    institution: storedUser.institution,
    id: user_id,
    membership_expiry: null,
    email: storedUser.email,
  });
}
    
    return data;
  } catch (err) {
    console.error("❌ Error saving payment:", err);
    throw err;
  }
}







async function savePayment2(user_id, reference, amount, selectedYear,membership, transactionId) {

  Swal.fire({text:"Please wait..."});
  Swal.showLoading();
  try {
    const res = await fetch(`${domain}/save_payment.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
        reference: reference,
        amount,
        membership: membership,
        description: `Annual Due payment for ${selectedYear}`,
      }),
    });

    const text = await res.text();

    if (!text) {
      throw new Error("Empty response from server");
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON response from server");
    }

    if (!data.success) {
      throw new Error(data.error || "Payment saving failed");
    }
deleteTransactionById(transactionId);

const storedUser = JSON.parse(localStorage.getItem("niseb_user"));

if (storedUser) {
  generateAndSendCertificate({
    membershipCategory: storedUser.membershipCategory,
    title: storedUser.title,
    surname: storedUser.surname,
    othername: storedUser.othername,
    institution: storedUser.institution,
    id: storedUser.id,
    membership_expiry: selectedYear,
    email: storedUser.email,
  });
}
    
    return data;
  } catch (err) {
    console.error("❌ Error saving payment:", err);
    throw err;
  }
}


async function savePayment3(user_id, reference, amount, selectedYear,membership, transactionId) {

  Swal.fire({text:"Please wait..."});
  Swal.showLoading();
  try {
    const res = await fetch(`${domain}/save_payment.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
        reference: reference,
        amount,
        membership: membership,
        description: `Certificate generation for ${selectedYear}`,
      }),
    });

    const text = await res.text();

    if (!text) {
      throw new Error("Empty response from server");
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON response from server");
    }

    if (!data.success) {
      throw new Error(data.error || "Payment saving failed");
    }
deleteTransactionById(transactionId);

const storedUser = JSON.parse(localStorage.getItem("niseb_user"));

if (storedUser) {
  generateAndSendCertificate({
    membershipCategory: storedUser.membershipCategory,
    title: storedUser.title,
    surname: storedUser.surname,
    othername: storedUser.othername,
    institution: storedUser.institution,
    id: storedUser.id,
    membership_expiry: selectedYear,
    email: storedUser.email,
  });
}
    
    return data;
  } catch (err) {
    console.error("❌ Error saving payment:", err);
    throw err;
  }
}






async function deleteTransactionById(id) {
  try {
    const res = await fetch(`${domain}/delete_transaction_confirmation.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      cache: "no-store",
    });

    const data = await res.json();

    if (data.success) {
      // Swal.fire("Deleted!", data.message, "success");
    } else {
      // Swal.fire("Error", data.error || "Failed to delete transaction", "error");
    }
  } catch (err) {
    console.error("Delete error:", err);
    // Swal.fire("Error", "Network/server error: " + err.message, "error");
  }
}




  return (
    <Context.Provider
      value={{
        domain,
        dollarRate,
        payStackTestKey,
        payStackLiveKey,
        generateAndSendCertificate, // 🔥 exposed globally
        membershipFees,
        user,
        setUser,
        handleClearPaymentSession,
        generateCertificateTest,
        startPaymentPolling1,
        startPaymentPolling2,
        startPaymentPolling3

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










