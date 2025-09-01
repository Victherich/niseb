
// import React, { useState } from "react";

// const EmailVerification = () => {
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [verifiedEmail, setVerifiedEmail] = useState("");

//   const handleSendEmail = async () => {
//     const res = await fetch("http://localhost/email_verification.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ action: "send", email }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       setShowModal(true);
//     } else {
//       alert(data.error);
//     }
//   };

//   const handleVerify = async () => {
//     const res = await fetch("http://localhost/email_verification.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ action: "verify", email, code }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       setVerifiedEmail(data.email);
//       setShowModal(false);
//       alert("Email verified: " + data.email);
//     } else {
//       alert(data.error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2>Email Verification</h2>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         className="border p-2"
//       />
//       <button
//         onClick={handleSendEmail}
//         className="ml-2 bg-blue-500 text-white px-4 py-2"
//       >
//         Send Code
//       </button>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow">
//             <h3>Enter Verification Code</h3>
//             <input
//               type="text"
//               placeholder="9-digit code"
//               value={code}
//               onChange={e => setCode(e.target.value)}
//               className="border p-2 mt-2"
//             />
//             <div className="mt-4">
//               <button
//                 onClick={handleVerify}
//                 className="bg-green-500 text-white px-4 py-2"
//               >
//                 Verify
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="ml-2 bg-gray-400 text-white px-4 py-2"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {verifiedEmail && (
//         <p className="mt-4 text-green-600">Verified: {verifiedEmail}</p>
//       )}
//     </div>
//   );
// };

// export default EmailVerification;





// DROP TABLE IF EXISTS email_verifications;

// CREATE TABLE email_verifications (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     email VARCHAR(255) NOT NULL,
//     code CHAR(9) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
















// <?php
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');

// include 'config.php'; // DB connection

// function logError($message) {
//     file_put_contents("error_log.txt", date('Y-m-d H:i:s') . " - " . $message . PHP_EOL, FILE_APPEND);
// }

// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     http_response_code(204);
//     exit();
// }

// if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
//     echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
//     exit();
// }

// $data = json_decode(file_get_contents("php://input"), true);
// $action = trim($data['action'] ?? '');

// if (!$action) {
//     echo json_encode(['success' => false, 'error' => 'Action is required.']);
//     exit();
// }

// if ($action === 'send') {
//     $email = trim($data['email'] ?? '');

//     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//         echo json_encode(['success' => false, 'error' => 'Invalid email format.']);
//         exit();
//     }

//     $code = str_pad(rand(0, 999999999), 9, '0', STR_PAD_LEFT);

//     $stmt = $conn->prepare("INSERT INTO email_verifications (email, code) VALUES (?, ?)");
//     $stmt->bind_param("ss", $email, $code);

//     if (!$stmt->execute()) {
//         logError("DB insert error: " . $stmt->error);
//         echo json_encode(['success' => false, 'error' => 'Database error.']);
//         exit();
//     }

//     $subject = "Your Verification Code";
//     $message = "<p>Hello,</p><p>Your verification code is: <b>$code</b></p>";
//     $headers = "From: noreply@yourdomain.com\r\nContent-Type: text/html; charset=UTF-8\r\n";

//     if (@mail($email, $subject, $message, $headers)) {
//         echo json_encode(['success' => true, 'message' => 'Verification code sent.']);
//     } else {
//         logError("Email sending failed for $email");
//         echo json_encode(['success' => false, 'error' => 'Failed to send email.']);
//     }

//     $stmt->close();
//     $conn->close();
//     exit();
// }

// if ($action === 'verify') {
//     $email = trim($data['email'] ?? '');
//     $code  = trim($data['code'] ?? '');

//     if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match('/^[0-9]{9}$/', $code)) {
//         echo json_encode(['success' => false, 'error' => 'Invalid email or code format.']);
//         exit();
//     }

//     $stmt = $conn->prepare("SELECT id FROM email_verifications WHERE email = ? AND code = ? ORDER BY created_at DESC LIMIT 1");
//     $stmt->bind_param("ss", $email, $code);
//     $stmt->execute();
//     $result = $stmt->get_result();

//     if ($result && $result->num_rows > 0) {
//         // Delete ALL codes for this email after verification
//         $del = $conn->prepare("DELETE FROM email_verifications WHERE email = ?");
//         $del->bind_param("s", $email);
//         $del->execute();

//         echo json_encode(['success' => true, 'email' => $email]);
//     } else {
//         echo json_encode(['success' => false, 'error' => 'Invalid or expired code.']);
//     }

//     $stmt->close();
//     $conn->close();
//     exit();
// }

// echo json_encode(['success' => false, 'error' => 'Invalid action.']);
// ?>

