
// import React, { useState } from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";
// import heroBg from "../Images/appliationform.jpg"; // replace with your hero background image

// const PageWrapper = styled.div`
//   font-family: Inter, ui-sans-serif, system-ui;
//   background: #fffefc;
//   color: #1a1a1a;
//   min-height: 100vh;
// `;

// /* Hero Section */
// const Hero = styled.div`
//   position: relative;
//   background: url(${heroBg}) center/cover no-repeat;
//   padding: 120px 20px;
//   text-align: center;
//   color: white;
//   z-index: 1; /* ensure content is above overlay */

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0; left: 0;
//     width: 100%; height: 100%;
//     background: rgba(0, 0, 0, 0.55); /* overlay */
//     z-index: -1; /* push behind content */
//   }

//   h1 {
//     font-size: 3rem;
//     font-weight: 800;
//     margin-bottom: 10px;
//     color: #f97316; /* orange */
//     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
//   }

//   p {
//     font-size: 1.2rem;
//     color: #fefefe;
//   }
// `;


// const FormWrapper = styled.div`
//   max-width: 800px;
//   margin: 60px auto 40px auto; /* overlap effect */
//   background: white;
//   padding: 40px;
//   border-radius: 16px;
//   box-shadow: 0 6px 20px rgba(0,0,0,0.08);
//   position: relative;
//   z-index: 999;
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

//     &:focus {
//       border-color: #f97316;
//     }
//   }
// `;

// const Declaration = styled.div`
//   background: #f9fafb;
//   padding: 15px;
//   border-radius: 12px;
//   font-size: 0.95rem;
//   margin-bottom: 20px;
//   border: 1px solid #e5e7eb;
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

//   &:hover {
//     background: #ea580c;
//   }
// `;

// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted successfully!");
//   };

//   return (
//     <PageWrapper>
//       <Hero>
//         <Fade duration={3000} cascade triggerOnce={false}>
//           <h1>NISEB Application Form</h1>
//           <p>Join the Society and be part of an innovative Life Sciences network.</p>
//         </Fade>
//       </Hero>

//       <Fade duration={3000} cascade triggerOnce={false}>
//         <FormWrapper>
//           <Title>Membership Application</Title>
//           <form onSubmit={handleSubmit}>
//             <FormGroup>
//               <label>Membership Category *</label>
//               <select name="membershipCategory" required onChange={handleChange}>
//                 <option value="">...Choose...</option>
//                 <option value="student">Student Membership</option>
//                 <option value="fullmember">Full Membership</option>
//                 <option value="fellow">Fellow Membership</option>
//                 <option value="corporate">Corporate Bodies Membership</option>
//                 <option value="foreign (undergraduate)">Foreign Membership (Undergraduate)</option>
//                 <option value="foreign (graduate)">Foreign Membership (Graduate Student)</option>
//                 <option value="foreign (fullmember)">Foreign Membership (Full Member)</option>
//               </select>
//             </FormGroup>

//             <FormGroup>
//               <label>Title *</label>
//               <select name="title" required onChange={handleChange}>
//                 <option value="">...Choose...</option>
//                 <option value="mr">Mr</option>
//                 <option value="mrs">Mrs</option>
//                 <option value="miss">Miss</option>
//                 <option value="dr">Dr</option>
//                 <option value="prof">Prof</option>
//               </select>
//             </FormGroup>

//             <FormGroup>
//               <label>Surname *</label>
//               <input type="text" name="surname" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Othernames *</label>
//               <input type="text" name="othername" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Gender *</label>
//               <select name="gender" required onChange={handleChange}>
//                 <option value="">...Choose...</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </FormGroup>

//             <FormGroup>
//               <label>Date of Birth *</label>
//               <input type="date" name="dob" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Academic Qualifications *</label>
//               <input type="text" name="qualifications" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Present Occupation *</label>
//               <input type="text" name="occupation" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Correspondence Address (Place of work) *</label>
//               <textarea name="address" rows="3" required onChange={handleChange}></textarea>
//             </FormGroup>

//             <FormGroup>
//               <label>Mobile Number *</label>
//               <input type="tel" name="mobile" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>City *</label>
//               <input type="text" name="city" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>State *</label>
//               <input type="text" name="state" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Country *</label>
//               <input type="text" name="country" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Mailbag</label>
//               <input type="text" name="mailbag" onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Post Code</label>
//               <input type="text" name="postcode" onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Email *</label>
//               <input type="email" name="email" required onChange={handleChange} />
//             </FormGroup>

//              <FormGroup>
//               <label>Confirm Email *</label>
//               <input type="confirmemail" name="email" required onChange={handleChange} />
//             </FormGroup>

//              <FormGroup>
//               <label>Password *</label>
//               <input type="confirmpassword" name="email" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Institution *</label>
//               <input type="text" name="institution" required onChange={handleChange} />
//             </FormGroup>

//             <FormGroup>
//               <label>Department *</label>
//               <input type="text" name="department" required onChange={handleChange} />
//             </FormGroup>

//             <Declaration>
//               <label>
//                 <input type="checkbox" name="declaration" required onChange={handleChange} />{" "}
//                 I hereby declare that I will abide by the rules and regulations of the society.
//               </label>
//             </Declaration>

//             <p><b>Note:</b> Items marked (*) are required</p>

//             <div style={{ textAlign: "center", marginTop: "20px" }}>
//               <SubmitButton type="submit">Submit Application</SubmitButton>
//             </div>
//           </form>
//         </FormWrapper>
//       </Fade>
//     </PageWrapper>
//   );
// }



import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";
import heroBg from "../Images/appliationform.jpg";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";

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
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
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
  const [formData, setFormData] = useState({});
  const {domain, dollarRate, payStackTestKey, payStackLiveKey} = useContext(Context);
  const navigate = useNavigate();


  

  const membershipFees = {
    student: 5000,
    fullmember: 10000,
    fellow: 20000,
    corporate: 50000,
    "foreign (undergraduate)": 10*dollarRate,
    "foreign (graduate)": 20*dollarRate,
    "foreign (fullmember)": 50*dollarRate,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, confirmEmail, password, confirmPassword, membershipCategory } = formData;

    if (email !== confirmEmail) {
      Swal.fire("Error", "Emails do not match!", "error");
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match!", "error");
      return;
    }

    const amount = membershipFees[membershipCategory];
    if (!amount) {
      Swal.fire("Error", "Please select a membership category.", "error");
      return;
    }

    const paystack = new PaystackPop();
    Swal.fire({ title: "Processing Payment...", text: "Please wait", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    paystack.newTransaction({
      key: payStackTestKey,
      //  key: payStackLiveKey,
      amount: Number(amount) * 100,
      email,
      firstname: formData.surname,
      phone: formData.mobile,
      onSuccess: async (transaction) => {
        Swal.fire({text:"Please wait..."});
        Swal.showLoading();

        try {
          const response = await fetch(`${domain}/user_signup.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
              reference: transaction.reference,
              amount,
            }),
          });
          const result = await response.json();

          if (result.success) {
            Swal.fire("Success", "Payment and registration successful! You can now login to your account. Please check your email inbox or spam folder for your confirmation.", "success");
            navigate('/userlogin')
            setFormData({});
          } else {
            Swal.fire("Error", result.error || "Something went wrong!", "error");
          }
        } catch (err) {
          Swal.fire("Error", "Server error. Try again later.", "error");
        }
      },
      onCancel: () => Swal.fire("Cancelled", "You cancelled the payment.", "info"),
      onError: (error) => Swal.fire("Payment Failed", error.message, "error"),
    });
  };

  return (
    <PageWrapper>
      <Hero>
        <Fade duration={2000}><h1>NISEB Application Form</h1></Fade>
        <p>Join the Society and be part of an innovative Life Sciences network.</p>
      </Hero>

      <FormWrapper>
        <Title>Membership Application</Title>
        <form onSubmit={handleSubmit}>
          {/* Membership Category */}
          <FormGroup>
            <label>Membership Category *</label>
            <select name="membershipCategory" required onChange={handleChange}>
              <option value="">...Choose...</option>
              <option value="student">Student Membership</option>
              <option value="fullmember">Full Membership</option>
              <option value="fellow">Fellow Membership</option>
              <option value="corporate">Corporate Bodies Membership</option>
              <option value="foreign (undergraduate)">Foreign Membership (Undergraduate)</option>
              <option value="foreign (graduate)">Foreign Membership (Graduate Student)</option>
              <option value="foreign (fullmember)">Foreign Membership (Full Member)</option>
            </select>
          </FormGroup>

          {/* Title */}
          <FormGroup>
            <label>Title *</label>
            <select name="title" required onChange={handleChange}>
              <option value="">...Choose...</option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="miss">Miss</option>
              <option value="dr">Dr</option>
              <option value="prof">Prof</option>
            </select>
          </FormGroup>

          <FormGroup><label>Surname *</label><input type="text" name="surname" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Other Names *</label><input type="text" name="othername" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Gender *</label><select name="gender" required onChange={handleChange}><option value="">...Choose...</option><option value="male">Male</option><option value="female">Female</option></select></FormGroup>
          <FormGroup><label>Date of Birth *</label><input type="date" name="dob" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Academic Qualifications *</label><input type="text" name="qualifications" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Present Occupation *</label><input type="text" name="occupation" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Correspondence Address *</label><textarea name="address" rows="3" required onChange={handleChange}></textarea></FormGroup>
          <FormGroup><label>Mobile Number *</label><input type="tel" name="mobile" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>City *</label><input type="text" name="city" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>State *</label><input type="text" name="state" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Country *</label><input type="text" name="country" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Email *</label><input type="email" name="email" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Confirm Email *</label><input type="email" name="confirmEmail" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Password *</label><input type="password" name="password" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Confirm Password *</label><input type="password" name="confirmPassword" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Institution *</label><input type="text" name="institution" required onChange={handleChange} /></FormGroup>
          <FormGroup><label>Department *</label><input type="text" name="department" required onChange={handleChange} /></FormGroup>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <SubmitButton type="submit">Submit Application</SubmitButton>
          </div>
        </form>
      </FormWrapper>
    </PageWrapper>
  );
}
