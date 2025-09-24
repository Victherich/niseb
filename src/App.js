import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizFormPage from './components/QuizFormPage';
import ScrollToTop from './components/ScrollToTop';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUs';
import EditorsPage from './components/Editors';
import BulletinPage from './components/BulletinPage';
import BoardOfTrusteesPage from './components/BoardOfTrustees';
import NationalExecutives from './components/NationalExecutives';
import FellowsPage from './components/Fellows';
import MembershipPage from './components/MembershipPage';
import RenewMembershipPage from './components/RenewMembershipPage';
import ApplicationForm from './components/ApplicationForm';
import TermsPage from './components/TermsAndConditions';
import PrivateAdminDashboard from './components/PrivateAdminDashboard';
import AdminDashboard from './components/AdminDashborad';
import AdminSignup from './components/AdminSignUp';
import AdminLogin from './components/AdminLogin';
import AdminResetPassword from './components/AdminResetPassword';
import AdminForgotPassword from './components/AdminForgotPassword';
import UserDashboard from './components/UserDashboard';
import PrivateUserDashboard from './components/PrivateUserDashboard';
import UserForgotPassword from './components/UserForgotPassword';
import UserResetPassword from './components/UserResetPassword';
import UserLogin from './components/UserLogin';
import AppUpdate from './components/AppUpdate';
import ConferencePage from './components/ConferencePage';
import wp from './Images/whatsapplogo.png';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop/>
   <AppUpdate/>
   <Header/>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/quizform' element={<QuizFormPage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
        <Route path ='/editors' element={<EditorsPage/>}/>
        <Route path ='/bulletin' element={<BulletinPage/>}/>
        <Route path='/bot' element={<BoardOfTrusteesPage/>}/>
        <Route path='/ne' element={<NationalExecutives/>}/>
        <Route path='/fellow' element={<FellowsPage/>}/>
        <Route path='/membership' element ={<MembershipPage/>}/>
        <Route path='/renewmembership' element={<RenewMembershipPage/>}/>
       <Route path='/conferencepage' element={<ConferencePage/>}/>
        <Route path='/termsandconditions' element={<TermsPage/>}/>
        <Route path='gallery' element={<GalleryPage/>}/>


        {/* admin routes */}
        <Route path='/admindashboard' element={<PrivateAdminDashboard/>}>
          <Route path='' element={<AdminDashboard/>}/>
        </Route> 
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminforgotpassword' element={<AdminForgotPassword/>}/>
        <Route path='/adminresetpassword/:token' element={<AdminResetPassword/>}/>
        {/* <Route path='/adminsignup' element={<AdminSignup/>}/> */}



   {/* user routes */}
        <Route path='/userdashboard' element={<PrivateUserDashboard/>}>
          <Route path='' element={<UserDashboard/>}/>
        </Route> 
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userforgotpassword' element={<UserForgotPassword/>}/>
        <Route path='/userresetpassword/:token' element={<UserResetPassword/>}/>
        <Route path='/applicationform' element={<ApplicationForm/>}/>
        

    </Routes>
    <a><img src={wp} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/2349162035216", "_blank")} /></a> 
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
