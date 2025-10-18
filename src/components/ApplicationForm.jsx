

// import React, { useContext, useState, useEffect } from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";
// import Swal from "sweetalert2";
// import PaystackPop from "@paystack/inline-js";
// import heroBg from "../Images/appliationform.jpg";
// import { Context } from "./Context";
// import { useNavigate } from "react-router-dom";
// import MembershipInfo from "./MembershipInfo";
// import { jsPDF } from "jspdf";

// const PageWrapper = styled.div`
//   font-family: Inter, ui-sans-serif, system-ui;
//   background: #fffefc;
//   color: #1a1a1a;
//   min-height: 100vh;
// `;

// const Hero = styled.div`
//   position: relative;
//   background: url(${heroBg}) center/cover no-repeat;
//   padding: 120px 20px;
//   text-align: center;
//   color: white;
//   z-index: 1;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0; left: 0;
//     width: 100%; height: 100%;
//     background: rgba(0, 0, 0, 0.55);
//     z-index: -1;
//   }

//   h1 {
//     font-size: 3rem;
//     font-weight: 800;
//     margin-bottom: 10px;
//     color: #f97316;
//     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
//   }

//   p {
//     font-size: 1.2rem;
//     color: #fefefe;
//   }
// `;

// const FormWrapper = styled.div`
//   max-width: 900px;
//   margin: 60px auto;
//   background: white;
//   padding: 40px;
//   border-radius: 16px;
//   box-shadow: 0 6px 20px rgba(0,0,0,0.3);
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: 700;
//   color: #16a34a;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 18px;
//   label {
//     display: block;
//     font-weight: 600;
//     margin-bottom: 6px;
//     color: #374151;
//   }
//   input, select, textarea {
//     width: 100%;
//     padding: 12px 14px;
//     border-radius: 10px;
//     border: 1px solid #d1d5db;
//     font-size: 1rem;
//     outline: none;
//     transition: border 0.2s;
//     &:focus { border-color: #f97316; }
//   }
// `;

// const SubmitButton = styled.button`
//   background: #f97316;
//   color: white;
//   padding: 14px 30px;
//   border: none;
//   border-radius: 30px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: background 0.3s;
//   &:hover { background: #ea580c; }
// `;



// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({});
//   const {domain, dollarRate, payStackTestKey, payStackLiveKey, generateAndSendCertificate, membershipFees} = useContext(Context);
//   const navigate = useNavigate();


//   // Load from localStorage when component mounts
//   useEffect(() => {
//     const savedForm = localStorage.getItem("niseb_formData");
//     if (savedForm) {
//       setFormData(JSON.parse(savedForm));
//     }
//   }, []);

//   // Save to localStorage whenever formData changes
//   useEffect(() => {
//     localStorage.setItem("niseb_formData", JSON.stringify(formData));
//   }, [formData]);
  




//   const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;

//   // Basic form update
//   let updatedValue = type === "checkbox" ? checked : value;
//   let updatedForm = { ...formData, [name]: updatedValue };

//   // 💡 When membership category changes, find the amount automatically
//   if (name === "membershipCategory") {
//     const selectedId = Number(value);
//     const selected = membershipFees.find((item) => item.id === selectedId);
//     if (selected) {
//       updatedForm.amount = selected.amount;
//       updatedForm.membershipName = selected.name; // optional: if you also want to store the category name
//     } else {
//       updatedForm.amount = "";
//       updatedForm.membershipName = "";
//     }
//   }

//   setFormData(updatedForm);
// };





// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const { email, confirmEmail, password, confirmPassword, membershipCategory, amount } = formData;

//   // --- Basic Validation ---
//   if (email !== confirmEmail) {
//     Swal.fire("Error", "Emails do not match!", "error");
//     return;
//   }
//   if (password !== confirmPassword) {
//     Swal.fire("Error", "Passwords do not match!", "error");
//     return;
//   }
//   if (password.length < 6) {
//     Swal.fire("Error", "Passwords must be at least 6 characters!", "error");
//     return;
//   }

//   // const amount = membershipFees[membershipCategory];
//   if (!amount) {
//     Swal.fire("Error", "Please select a membership category.", "error");
//     return;
//   }

//   try {
//     // --- Step 1: Check if email exists ---
//     Swal.fire({
//       text: "Checking email availability...",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     const res = await fetch(`${domain}/check_user.php?email=${encodeURIComponent(email)}`);
//     const check = await res.json();

//     if (!check.success) {
//       Swal.fire("Error", check.message || "Server error while checking email.", "error");
//       return;
//     }
//     if (check.exists) {
//       Swal.fire("Error", "This email is already registered. Please log in instead.", "error");
//       return;
//     }

//     // --- Step 2: Proceed with Paystack payment ---
//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//       // key: payStackTestKey,
//       key: payStackLiveKey,
//       amount: Number(amount) * 100, // in kobo
//       email,
//       firstname: formData.surname,
//       phone: formData.mobile,

//        // ✅ Add your metadata here
//     metadata: {
//       custom_payment_type: "payment1",   // identifies this payment
//       // user_id: user.id,
//       membership: formData.membershipCategory,
//       description: `Membership Registration`,
//       // year: selectedYear,
//     },

//       onSuccess: async (transaction) => {
//         Swal.fire({
//           text: "Verifying payment with Paystack...",
//           allowOutsideClick: false,
//         });
//         Swal.showLoading();

//         try {
//           // --- Step 3: Verify payment with backend ---
//           const verifyRes = await fetch(`${domain}/verify_payment.php`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ reference: transaction.reference }),
//           });

//           const verifyData = await verifyRes.json();

//           if (!verifyData.success) {
//             Swal.fire("Error", verifyData.message || "Payment verification failed!", "error");
//             return;
//           }

//           // --- Step 4: Proceed with user registration ---
//           Swal.update({ text: "Creating your account..." });

//           const signupRes = await fetch(`${domain}/user_signup.php`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               ...formData,
//               reference: transaction.reference,
//               amount,
//             }),
//           });

//           const signupResult = await signupRes.json();

//           if (signupResult.success) {
//             Swal.fire(
//               "Success",
//               "Payment and registration successful! Generating your certificate...",
//               "success"
//             );

//             // --- Step 5: Generate and send certificate ---
//             await generateAndSendCertificate({
//               membershipCategory:formData.membershipCategory,
//               title:formData.title,
//               surname: formData.surname,
//               othername: formData.othername,
//               institution: formData.institution,
//               id: signupResult.user_id, // ensure backend returns user_id
//               membership_expiry: null, // e.g., +1 year
//               email: formData.email,
//               navigate
//             });

//             // --- Step 6: Done ---
//             Swal.fire(
//               "Completed",
//               "Your certificate has been sent to your email!",
//               "success"
//             );

//             setFormData({});
//             // navigate("/userlogin");
//           } else {
//             Swal.fire("Error", signupResult.error || "Signup failed!", "error");
//           }
//         } catch (err) {
//           console.error(err);
//           Swal.fire("Error", "Server verification error. Try again later.", "error");
//         }
//       },

//       onCancel: () => Swal.fire("Cancelled", "You cancelled the payment.", "info"),
//       onError: (error) => Swal.fire("Payment Failed", error.message, "error"),
//     });
//   } catch (error) {
//     console.error(error);
//     Swal.fire("Error", "Something went wrong. Please try again later.", "error");
//   }
// };




//   return (
//     <PageWrapper>
//       <Hero>
//         <Fade duration={2000}><h1>NISEB Application Form</h1></Fade>
//         <p>Join the Society and be part of an innovative Life Sciences network.</p>
//       </Hero>

//       <MembershipInfo/>

//       <FormWrapper>
//         <Title>Membership Application</Title>
//         <form onSubmit={handleSubmit}>
//           {/* Membership Category */}
//           <FormGroup>
//             <label>Membership Category *</label>
       
//                 <select name="membershipCategory" required onChange={handleChange}>
//   <option value="">...Choose...</option>
//   {membershipFees.map((item) => (
//     <option key={item.id} value={item.id}>
//       {item.name} 
//     </option>
//   ))}
// </select>

//           </FormGroup>

//           {/* Title */}
//           <FormGroup>
//             <label>Title *</label>
//             <select name="title" required onChange={handleChange}>
//               <option value="">...Choose...</option>
//               <option value="mr">Mr</option>
//               <option value="mrs">Mrs</option>
//               <option value="miss">Miss</option>
//               <option value="dr">Dr</option>
//               <option value="prof">Prof</option>
//             </select>
//           </FormGroup>

//           <FormGroup><label>Surname *</label><input type="text" name="surname" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Other Names *</label><input type="text" name="othername" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Gender *</label><select name="gender" required onChange={handleChange}><option value="">...Choose...</option><option value="male">Male</option><option value="female">Female</option></select></FormGroup>
//           <FormGroup><label>Date of Birth *</label><input type="date" name="dob" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Academic Qualifications *</label><input type="text" name="qualifications" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Present Occupation *</label><input type="text" name="occupation" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Correspondence Address *</label><textarea name="address" rows="3" required onChange={handleChange}></textarea></FormGroup>
//           <FormGroup><label>Mobile Number *</label><input type="tel" name="mobile" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>City *</label><input type="text" name="city" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>State *</label><input type="text" name="state" required onChange={handleChange} /></FormGroup>
          
//           <FormGroup><label>Country *</label><input type="text" name="country" required onChange={handleChange} /></FormGroup>
          
//           <FormGroup><label>Email *</label><input type="email" name="email" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Confirm Email *</label><input type="email" name="confirmEmail" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Password *</label><input type="password" name="password" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Confirm Password *</label><input type="password" name="confirmPassword" required onChange={handleChange} /></FormGroup>
//           <FormGroup>
//   <label>Mailbag (Optional)</label>
//   <input type="text" name="mailbag" onChange={handleChange} />
// </FormGroup>

// <FormGroup>
//   <label>Postcode (Optional)</label>
//   <input type="text" name="postcode" onChange={handleChange} />
// </FormGroup>

//           <FormGroup><label>Institution *</label><input type="text" name="institution" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Department *</label><input type="text" name="department" required onChange={handleChange} /></FormGroup>

//           <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <SubmitButton type="submit">Submit Application</SubmitButton>

        
//           </div>
//         </form>
//       </FormWrapper>
//     </PageWrapper>
//   );
// }







// import React, { useContext, useState, useEffect } from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";
// import Swal from "sweetalert2";
// import PaystackPop from "@paystack/inline-js";
// import heroBg from "../Images/appliationform.jpg";
// import { Context } from "./Context";
// import { useNavigate } from "react-router-dom";
// import MembershipInfo from "./MembershipInfo";
// import { jsPDF } from "jspdf";

// const PageWrapper = styled.div`
//   font-family: Inter, ui-sans-serif, system-ui;
//   background: #fffefc;
//   color: #1a1a1a;
//   min-height: 100vh;
// `;

// const Hero = styled.div`
//   position: relative;
//   background: url(${heroBg}) center/cover no-repeat;
//   padding: 120px 20px;
//   text-align: center;
//   color: white;
//   z-index: 1;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0; left: 0;
//     width: 100%; height: 100%;
//     background: rgba(0, 0, 0, 0.55);
//     z-index: -1;
//   }

//   h1 {
//     font-size: 3rem;
//     font-weight: 800;
//     margin-bottom: 10px;
//     color: #f97316;
//     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
//   }

//   p {
//     font-size: 1.2rem;
//     color: #fefefe;
//   }
// `;

// const FormWrapper = styled.div`
//   max-width: 900px;
//   margin: 60px auto;
//   background: white;
//   padding: 40px;
//   border-radius: 16px;
//   box-shadow: 0 6px 20px rgba(0,0,0,0.3);
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: 700;
//   color: #16a34a;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 18px;
//   label {
//     display: block;
//     font-weight: 600;
//     margin-bottom: 6px;
//     color: #374151;
//   }
//   input, select, textarea {
//     width: 100%;
//     padding: 12px 14px;
//     border-radius: 10px;
//     border: 1px solid #d1d5db;
//     font-size: 1rem;
//     outline: none;
//     transition: border 0.2s;
//     &:focus { border-color: #f97316; }
//   }
// `;

// const SubmitButton = styled.button`
//   background: #f97316;
//   color: white;
//   padding: 14px 30px;
//   border: none;
//   border-radius: 30px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: background 0.3s;
//   &:hover { background: #ea580c; }
// `;



// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({});
//   const {domain, dollarRate, payStackTestKey, payStackLiveKey, generateAndSendCertificate, membershipFees} = useContext(Context);
//   const navigate = useNavigate();


//   // Load from localStorage when component mounts
//   useEffect(() => {
//     const savedForm = localStorage.getItem("niseb_formData");
//     if (savedForm) {
//       setFormData(JSON.parse(savedForm));
//     }
//   }, []);

//   // Save to localStorage whenever formData changes
//   useEffect(() => {
//     localStorage.setItem("niseb_formData", JSON.stringify(formData));
//   }, [formData]);
  




//   const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;

//   // Basic form update
//   let updatedValue = type === "checkbox" ? checked : value;
//   let updatedForm = { ...formData, [name]: updatedValue };

//   // 💡 When membership category changes, find the amount automatically
//   if (name === "membershipCategory") {
//     const selectedId = Number(value);
//     const selected = membershipFees.find((item) => item.id === selectedId);
//     if (selected) {
//       updatedForm.amount = selected.amount;
//       updatedForm.membershipName = selected.name; // optional: if you also want to store the category name
//     } else {
//       updatedForm.amount = "";
//       updatedForm.membershipName = "";
//     }
//   }

//   setFormData(updatedForm);
// };





// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const { email, confirmEmail, password, confirmPassword, membershipCategory, amount } = formData;

//   // --- Basic Validation ---
//   if (email !== confirmEmail) {
//     Swal.fire("Error", "Emails do not match!", "error");
//     return;
//   }
//   if (password !== confirmPassword) {
//     Swal.fire("Error", "Passwords do not match!", "error");
//     return;
//   }
//   if (password.length < 6) {
//     Swal.fire("Error", "Passwords must be at least 6 characters!", "error");
//     return;
//   }

//   // const amount = membershipFees[membershipCategory];
//   if (!amount) {
//     Swal.fire("Error", "Please select a membership category.", "error");
//     return;
//   }

//   try {
//     // --- Step 1: Check if email exists ---
//     Swal.fire({
//       text: "Checking email availability...",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     const res = await fetch(`${domain}/check_user.php?email=${encodeURIComponent(email)}`);
//     const check = await res.json();

//     if (!check.success) {
//       Swal.fire("Error", check.message || "Server error while checking email.", "error");
//       return;
//     }
//     if (check.exists) {
//       Swal.fire("Error", "This email is already registered. Please log in instead.", "error");
//       return;
//     }

//     // --- Step 2: Proceed with Paystack payment ---
//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//       // key: payStackTestKey,
//       key: payStackLiveKey,
//       amount: Number(amount) * 100, // in kobo
//       email,
//       firstname: formData.surname,
//       phone: formData.mobile,

//        // ✅ Add your metadata here
//     metadata: {
//       custom_payment_type: "payment1",   // identifies this payment
//       // user_id: user.id,
//       membership: formData.membershipCategory,
//       description: `Membership Registration`,
//       // year: selectedYear,
//     },

//       onSuccess: async (transaction) => {
//         Swal.fire({
//           text: "Verifying payment with Paystack...",
//           allowOutsideClick: false,
//         });
//         Swal.showLoading();

     
//       },

//       onCancel: () => Swal.fire("Cancelled", "You cancelled the payment.", "info"),
//       onError: (error) => Swal.fire("Payment Failed", error.message, "error"),
//     });
//   } catch (error) {
//     console.error(error);
//     Swal.fire("Error", "Something went wrong. Please try again later.", "error");
//   }
// };




//   return (
//     <PageWrapper>
//       <Hero>
//         <Fade duration={2000}><h1>NISEB Application Form</h1></Fade>
//         <p>Join the Society and be part of an innovative Life Sciences network.</p>
//       </Hero>

//       <MembershipInfo/>

//       <FormWrapper>
//         <Title>Membership Application</Title>
//         <form onSubmit={handleSubmit}>
//           {/* Membership Category */}
//           <FormGroup>
//             <label>Membership Category *</label>
       
//                 <select name="membershipCategory" required onChange={handleChange}>
//   <option value="">...Choose...</option>
//   {membershipFees.map((item) => (
//     <option key={item.id} value={item.id}>
//       {item.name} 
//     </option>
//   ))}
// </select>

//           </FormGroup>

//           {/* Title */}
//           <FormGroup>
//             <label>Title *</label>
//             <select name="title" required onChange={handleChange}>
//               <option value="">...Choose...</option>
//               <option value="mr">Mr</option>
//               <option value="mrs">Mrs</option>
//               <option value="miss">Miss</option>
//               <option value="dr">Dr</option>
//               <option value="prof">Prof</option>
//             </select>
//           </FormGroup>

//           <FormGroup><label>Surname *</label><input type="text" name="surname" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Other Names *</label><input type="text" name="othername" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Gender *</label><select name="gender" required onChange={handleChange}><option value="">...Choose...</option><option value="male">Male</option><option value="female">Female</option></select></FormGroup>
//           <FormGroup><label>Date of Birth *</label><input type="date" name="dob" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Academic Qualifications *</label><input type="text" name="qualifications" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Present Occupation *</label><input type="text" name="occupation" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Correspondence Address *</label><textarea name="address" rows="3" required onChange={handleChange}></textarea></FormGroup>
//           <FormGroup><label>Mobile Number *</label><input type="tel" name="mobile" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>City *</label><input type="text" name="city" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>State *</label><input type="text" name="state" required onChange={handleChange} /></FormGroup>
          
//           <FormGroup><label>Country *</label><input type="text" name="country" required onChange={handleChange} /></FormGroup>
          
//           <FormGroup><label>Email *</label><input type="email" name="email" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Confirm Email *</label><input type="email" name="confirmEmail" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Password *</label><input type="password" name="password" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Confirm Password *</label><input type="password" name="confirmPassword" required onChange={handleChange} /></FormGroup>
//           <FormGroup>
//   <label>Mailbag (Optional)</label>
//   <input type="text" name="mailbag" onChange={handleChange} />
// </FormGroup>

// <FormGroup>
//   <label>Postcode (Optional)</label>
//   <input type="text" name="postcode" onChange={handleChange} />
// </FormGroup>

//           <FormGroup><label>Institution *</label><input type="text" name="institution" required onChange={handleChange} /></FormGroup>
//           <FormGroup><label>Department *</label><input type="text" name="department" required onChange={handleChange} /></FormGroup>

//           <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <SubmitButton type="submit">Submit Application</SubmitButton>

        
//           </div>
//         </form>
//       </FormWrapper>
//     </PageWrapper>
//   );
// }





import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";
import heroBg from "../Images/appliationform.jpg";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";
import MembershipInfo from "./MembershipInfo";
import { useDispatch } from "react-redux";
import { setPaymentSession , clearPaymentSession} from "../Features/Slice";

const PageWrapper = styled.div`
  font-family: Inter, ui-sans-serif, system-ui;
  background: #fffefc;
  color: #1a1a1a;
  min-height: 100vh;
`;

const Hero = styled.div`
  position: relative;
  background: url(${heroBg}) center/cover no-repeat;
  padding: 120px 20px;
  text-align: center;
  color: white;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.55);
    z-index: -1;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #f97316;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 1.2rem;
    color: #fefefe;
  }
`;

const FormWrapper = styled.div`
  max-width: 900px;
  margin: 60px auto;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #16a34a;
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 18px;
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
    color: #374151;
  }
  input, select, textarea {
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 1rem;
    outline: none;
    transition: border 0.2s;
    &:focus { border-color: #f97316; }
  }
`;

const SubmitButton = styled.button`
  background: #f97316;
  color: white;
  padding: 14px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  &:hover { background: #ea580c; }
`;

export default function ApplicationForm() {
  const { domain, dollarRate, payStackLiveKey, membershipFees } = useContext(Context);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Initialize from localStorage immediately (prevents flicker)
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("niseb_formData");
    return saved ? JSON.parse(saved) : {};
  });

  // ✅ Always save to localStorage when data changes
  useEffect(() => {
    localStorage.setItem("niseb_formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let updatedValue = type === "checkbox" ? checked : value;
    let updatedForm = { ...formData, [name]: updatedValue };

    // Auto-update membership name and amount
    if (name === "membershipCategory") {
      const selectedId = Number(value);
      const selected = membershipFees.find((item) => item.id === selectedId);
      if (selected) {
        updatedForm.amount = selected.amount;
        updatedForm.membershipName = selected.name;
      } else {
        updatedForm.amount = "";
        updatedForm.membershipName = "";
      }
    }

    setFormData(updatedForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, confirmEmail, password, confirmPassword, amount } = formData;

    if (email !== confirmEmail)
      return Swal.fire("Error", "Emails do not match!", "error");
    if (password !== confirmPassword)
      return Swal.fire("Error", "Passwords do not match!", "error");
    if (password.length < 6)
      return Swal.fire("Error", "Password must be at least 6 characters!", "error");
    if (!amount)
      return Swal.fire("Error", "Please select a membership category.", "error");

    try {
      Swal.fire({
        text: "Checking email availability...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const res = await fetch(
        `${domain}/check_user.php?email=${encodeURIComponent(email)}`
      );
      const check = await res.json();

      if (!check.success)
        return Swal.fire("Error", check.message || "Server error.", "error");
      if (check.exists)
        return Swal.fire(
          "Error",
          "This email is already registered. Please log in instead.",
          "error"
        );

         // ✅ Save the session data before the popup opens
    // localStorage.setItem("niseb_payment_session", JSON.stringify('payment'));
dispatch(setPaymentSession("payment"));
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: payStackLiveKey,
        amount: Number(amount) * 100,
        email,
        firstname: formData.surname,
        phone: formData.mobile,
        metadata: {
          custom_payment_type: "payment1",
          membership: formData.membershipCategory,
          description: `Membership Registration`,
        },
        onSuccess: async (transaction) => {
          Swal.fire({
                  text: "Verifying payment with Paystack...",
                  allowOutsideClick: false,
                  didOpen: () => Swal.showLoading(),
                });
          // localStorage.removeItem("niseb_formData"); // ✅ Clear saved form
          refreshAfter10Seconds();
        },
        onCancel: () =>{
          Swal.fire("Cancelled", "You cancelled the payment.", "info");
            //  localStorage.removeItem("niseb_payment_session");
            dispatch(clearPaymentSession());

            },
        onError: (error) =>
          Swal.fire("Payment Failed", error.message, "error"),
      });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    }
  };



// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const { email, confirmEmail, password, confirmPassword, amount } = formData;

//   if (email !== confirmEmail)
//     return Swal.fire("Error", "Emails do not match!", "error");
//   if (password !== confirmPassword)
//     return Swal.fire("Error", "Passwords do not match!", "error");
//   if (password.length < 6)
//     return Swal.fire("Error", "Password must be at least 6 characters!", "error");
//   if (!amount)
//     return Swal.fire("Error", "Please select a membership category.", "error");

//   try {
//     Swal.fire({
//       text: "Checking email availability...",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     const res = await fetch(
//       `${domain}/check_user.php?email=${encodeURIComponent(email)}`
//     );
//     const check = await res.json();

//     if (!check.success)
//       return Swal.fire("Error", check.message || "Server error.", "error");
//     if (check.exists)
//       return Swal.fire(
//         "Error",
//         "This email is already registered. Please log in instead.",
//         "error"
//       );

//     // ✅ Optionally, generate your own reference
//     const reference = `NISEB-${Date.now()}-${Math.random()}`;

//     // ✅ Prepare data to persist
//     const paymentSession = {
//       reference,
//       email,
//       amount: Number(amount),
//       surname: formData.surname,
//       phone: formData.mobile,
//       membership: formData.membershipCategory,
//       custom_payment_type: "payment1",
//       timestamp: new Date().toISOString(),
//     };

//     // ✅ Save the session data before the popup opens
//     localStorage.setItem("niseb_payment_session", JSON.stringify(paymentSession));

//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//       key: payStackLiveKey,
//       amount: Number(amount) * 100,
//       email,
//       firstname: formData.surname,
//       phone: formData.mobile,
//       reference: reference, // ✅ keep this consistent
//       metadata: {
//         custom_payment_type: "payment1",
//         membership: formData.membershipCategory,
//         description: `Membership Registration`,
//       },

//       onSuccess: async (transaction) => {
//         // ✅ Update stored session with Paystack’s actual reference
//         const updatedSession = {
//           ...paymentSession,
//           paystack_reference: transaction.reference,
//           status: "success",
//         };
//         localStorage.setItem(
//           "niseb_payment_session",
//           JSON.stringify(updatedSession)
//         );

//         Swal.fire({
//           text: "Verifying payment with Paystack...",
//           allowOutsideClick: false,
//           didOpen: () => Swal.showLoading(),
//         });

//         refreshAfter10Seconds();
//       },

//       onCancel: () => {
//         Swal.fire("Cancelled", "You cancelled the payment.", "info");
//         localStorage.removeItem("niseb_payment_session");
//       },

//       onError: (error) => {
//         Swal.fire("Payment Failed", error.message, "error");
//         console.error("Paystack Error:", error);
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     Swal.fire("Error", "Something went wrong. Please try again later.", "error");
//   }
// };




function refreshAfter10Seconds() {
  setTimeout(() => {
    // Store a flag in localStorage before reload
    localStorage.setItem("showPaystackAlert", "true");

    // Reload the page
    window.location.reload();
  }, 10000);
}

// ✅ Then, run this once when the page loads
window.addEventListener("load", () => {
  const shouldShowAlert = localStorage.getItem("showPaystackAlert");

  if (shouldShowAlert) {
    Swal.fire({
      text: "Verifying payment with Paystack...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    // Clear the flag so it doesn't show again on future reloads
    localStorage.removeItem("showPaystackAlert");
  }
});


  return (
    <PageWrapper>
      <Hero>
        <Fade duration={2000}>
          <h1>NISEB Application Form</h1>
        </Fade>
        <p>Join the Society and be part of an innovative Life Sciences network.</p>
      </Hero>

      <MembershipInfo />

      <FormWrapper>
        <Title>Membership Application</Title>
        <form onSubmit={handleSubmit}>
          {/* Membership Category */}
          <FormGroup>
            <label>Membership Category *</label>
            <select
              name="membershipCategory"
              required
              value={formData.membershipCategory || ""}
              onChange={handleChange}
            >
              <option value="">...Choose...</option>
              {membershipFees.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </FormGroup>

          {/* Title */}
          <FormGroup>
            <label>Title *</label>
            <select
              name="title"
              required
              value={formData.title || ""}
              onChange={handleChange}
            >
              <option value="">...Choose...</option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="miss">Miss</option>
              <option value="dr">Dr</option>
              <option value="prof">Prof</option>
            </select>
          </FormGroup>

          {/* Personal Details */}
          <FormGroup>
            <label>Surname *</label>
            <input
              type="text"
              name="surname"
              required
              value={formData.surname || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Other Names *</label>
            <input
              type="text"
              name="othername"
              required
              value={formData.othername || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Gender *</label>
            <select
              name="gender"
              required
              value={formData.gender || ""}
              onChange={handleChange}
            >
              <option value="">...Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              required
              value={formData.dob || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Academic Qualifications *</label>
            <input
              type="text"
              name="qualifications"
              required
              value={formData.qualifications || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Present Occupation *</label>
            <input
              type="text"
              name="occupation"
              required
              value={formData.occupation || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Correspondence Address *</label>
            <textarea
              name="address"
              rows="3"
              required
              value={formData.address || ""}
              onChange={handleChange}
            ></textarea>
          </FormGroup>

          <FormGroup>
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>City *</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>State *</label>
            <input
              type="text"
              name="state"
              required
              value={formData.state || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Country *</label>
            <input
              type="text"
              name="country"
              required
              value={formData.country || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Confirm Email *</label>
            <input
              type="email"
              name="confirmEmail"
              required
              value={formData.confirmEmail || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Password *</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Mailbag (Optional)</label>
            <input
              type="text"
              name="mailbag"
              value={formData.mailbag || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Postcode (Optional)</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Institution *</label>
            <input
              type="text"
              name="institution"
              required
              value={formData.institution || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Department *</label>
            <input
              type="text"
              name="department"
              required
              value={formData.department || ""}
              onChange={handleChange}
            />
          </FormGroup>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <SubmitButton type="submit">Submit Application</SubmitButton>
          </div>
        </form>
      </FormWrapper>
    </PageWrapper>
  );
}
