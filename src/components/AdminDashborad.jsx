
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import { adminLogout } from '../Features/Slice';
import AdminDetailsPage from './AdminProfile';
// import AllAdmin from './AllAdmin';
// import AllStudents from './AllStudents';
// import LecturerScoring from './LecturerScoring';
// import Announcements from './Announcements';
// import LiveLecture from './LiveLecture';
// import PostAssignment from './Assignments.jsx';
// import PostLectureNotes from './PostLectureNotes.jsx';
// import LecturerOnlineClass from './LecturerOnlineClass.jsx';
// import MeetingLinkUploader from './MeetingLinkUploader.jsx';
import AdminSignup from './AdminSignUp.jsx';
import AdminListPage from './AllAdmin.jsx';
import UserListPage from './Allusers.jsx';
import PaymentHistoryPage from './PaymentHistory.jsx';
// import AccessCodeManager from './AccessCodeManager';
// import AllLecturers from './AllLecturers';


// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  // background: #f8f9fa;
  overflow: hidden;
  // padding-top:100px;
`;

const Sidebar = styled.div`
  // background: #4caf50;
  // background:rgba(128,0,128,0.3);
  // background:rgba(255,0,43,0.2);
  background:#F4F4F4;
  color: white;
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height:100vh;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-top:100px;

  @media (min-width: 768px) {
    width: 250px;
    position: static;
    transition: none;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color:green;
  // background: #3b8d41;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  background: ${(props) => (props.active ? 'green;' : 'transparent')};
  color: ${(props)=>(props.active ? 'white':"green")};
  // color:white;

  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: green;
    // background:lightgreen;
    color:white;
  }
`;

const ContentArea = styled.div`
  flex-grow: 1;
  margin-left: ${(props) => (props.isOpen ? '250px' : '0')};
  transition: margin-left 0.3s ease-in-out;
  // padding: 20px;

  @media (min-width: 768px) {
    // margin-left: 250px;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  top: 70px;
  left: 20px;
  // background: #4caf50;
  background:green;
  color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1100;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;

// Content Components
const HomeContent = () => <h1 style={{color:"purple"}}>Home Content</h1>;
const ProfileContent = () => <h1>Profile Content</h1>;
const SettingsContent = () => <h1>Settings Content</h1>;
const HelpContent = () => <h1>Help Content</h1>;

// Main Component
const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');
  const adminInfo = useSelector(state=>state.adminInfo)
  
  console.log(adminInfo)

  const dispatch = useDispatch();


  
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the logout actions
        dispatch(adminLogout());
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
  
      
      }
    });
  };
  



  const handleMenuClick = (menu) => {
    window.scroll(0,0);
    setActiveMenu(menu);
    setMenuOpen(false); // Close menu on mobile when a menu item is clicked
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenuOnOutsideClick = () => setMenuOpen(false);

  // Map menu options to content
  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return <AdminDetailsPage adminId={adminInfo.id}/>;

          case 'alluser':
        return <UserListPage/>;

         case 'alladmin':
        return <AdminListPage/>;

         case 'paymenthistory':
        return <PaymentHistoryPage/>;
       
        case 'adminsignup':
        return <AdminSignup/>;
      
      default:
        return <h1 style={{color:"green",textAlign:"center",width:"100%"}}>Welcome to your Dashboard</h1>;
    }
  };

  return (
    <DashboardContainer>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />
      <Sidebar isOpen={menuOpen}>
        <SidebarHeader>Admin Dashboard</SidebarHeader>
        <SidebarMenu>
       
          <SidebarMenuItem
            active={activeMenu === 'profile'}
            onClick={() => handleMenuClick('profile')}
          >
            Hi, {adminInfo.name}
          </SidebarMenuItem>

            <SidebarMenuItem
            active={activeMenu === 'alluser'}
            onClick={() => handleMenuClick('alluser')}
          >
            All User
          </SidebarMenuItem>

            <SidebarMenuItem
            active={activeMenu === 'alladmin'}
            onClick={() => handleMenuClick('alladmin')}
          >
            All Admin
          </SidebarMenuItem>


  <SidebarMenuItem
            active={activeMenu === 'paymenthistory'}
            onClick={() => handleMenuClick('paymenthistory')}
          >
            Payment History
          </SidebarMenuItem>


       <SidebarMenuItem
            active={activeMenu === 'adminsignup'}
            onClick={() => handleMenuClick('adminsignup')}
          >
           Register Admin
          </SidebarMenuItem>
            
          <SidebarMenuItem
            onClick={handleLogout}
          >
            Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
      <ContentArea isOpen={menuOpen}>{renderContent()}</ContentArea>
    </DashboardContainer>
  );
};

export default AdminDashboard;

