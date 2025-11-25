
// import React from "react";
// import styled from "styled-components";
// import { FaTimes } from "react-icons/fa";
// import UpdateProfileModal from "./UpdateProfileModal";

// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0,0,0,0.6);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 99999999;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 12px;
//   max-width: 600px;
//   width: 90%;
//   max-height: 90vh;
//   overflow-y: auto;
//   position: relative;
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   position: absolute;
//   right: 1rem;
//   top: 1rem;
//   cursor: pointer;
//   color: #555;
// `;

// const UserDetailRow = styled.div`
//   margin-bottom: 1rem;
//   font-size: 1rem;

//   strong {
//     color: #008000;
//   }
// `;

// const UserDetailModal = ({ user, onClose }) => {
//   if (!user) return null;

//   return (
//     <ModalOverlay>
//       <ModalContent>
//         <CloseButton onClick={onClose}>
//           <FaTimes />
//         </CloseButton>
//         <h2 style={{ color: "#008000", marginBottom: "1rem" }}>
//           User Details
//         </h2>

//    {Object.entries(user)
//   .filter(([key]) => !['password', 'membership_start', 'membership_expiry'].includes(key))
//   .map(([key, value]) => (
//     <UserDetailRow key={key}>
//       <strong>{key.toLocaleUpperCase()}: </strong> {value || "—"}
//     </UserDetailRow>
//   ))}

//     {showUpdate && (
//         <UpdateProfileModal
//           user={user}
//           onClose={() => setShowUpdate(false)}
//           onUpdated={updated => setUser({ ...user, ...updated })}
//         />
//       )}
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default UserDetailModal;





import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import UpdateProfileModal from "./UpdateProfileModal";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  color: #555;
`;

const UserDetailRow = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;

  strong {
    color: #008000;
  }
`;

const UpdateButton = styled.button`
  background: #008000;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  // margin-top: 1.5rem;

  &:hover {
    opacity: 0.9;
  }
`;

const UserDetailModal = ({ user, onClose }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);

  if (!user) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
<div style={{marginBottom:"1rem", display:"flex",gap:"20px"}}>
 <h2 style={{ color: "#008000"}}>
          User Details         
        </h2>
<UpdateButton onClick={() => setShowUpdate(true)}>
          Edit Info...
        </UpdateButton>
</div>
       

              {/* Update Button */}
     

        {/* Display fields except excluded ones */}
        {Object.entries(currentUser)
          .filter(([key]) => ![
            "password",
            "membership_start",
            "membership_expiry"
          ].includes(key))
          .map(([key, value]) => (
            <UserDetailRow key={key}>
              <strong>{key.toUpperCase()}: </strong> {value || "—"}
            </UserDetailRow>
          ))}

  

        {/* Update Modal */}
        {showUpdate && (
          <UpdateProfileModal
            user={currentUser}
            onClose={() => setShowUpdate(false)}
            onUpdated={(updated) => {
              setCurrentUser({ ...currentUser, ...updated });
            }}
          />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserDetailModal;
