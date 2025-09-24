





import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import niseblogo from '../Images/nisebLogo.png'
import BeautifulDropdown from './DropDown';
import BeautifulDropdown2 from './DropDown2';
import { FaUser } from 'react-icons/fa';
// import logo from '../Images/logo.png'

// --- Styled Components for the Header ---
const HeaderContainer = styled.header`
  position: fixed;   /* was absolute */
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 1000;     /* raise z-index so it stays above content */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #fff;
  background-color:transparent; /* stays transparent until you scroll */
  transition: background-color 0.3s ease;
`;


const Logo = styled.div`
  display: flex;
  align-items: center;
cursor:pointer;

  img {
    height: 40px;
    margin-right: 10px;
    border-radius:50%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  margin: 0 1rem;
  position: relative;
  padding-bottom: 5px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #ff5722;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    font-weight: 700;
    color: #ff5722;
  }
`;

const NavLink2 = styled.a`
  color: green;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  margin: 0 1rem;
  position: relative;
  padding-bottom: 5px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #ff5722;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    font-weight: 700;
    color: #ff5722;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.25rem;
  margin-left: 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff5722;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed; /* make it overlay entire screen */
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  transform: translateX(${props => (props.isOpen ? '0' : '100%')});
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  z-index: 9999; /* ensure it’s above everything */

  ${NavLink2} {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    
  }

  ${SocialLink} {
    margin-top: 1rem;
  }
`;


// Main Header component with Active Menu logic
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location object

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const socialIconsRef = useRef(null);
   const mobileMenuRef = useRef(null);
  const mobileMenuIconRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };





// ✅ Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuIconRef.current &&
        !mobileMenuIconRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);




  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add('animate__animated');
            if (target.tagName === 'HEADER' || (target.tagName === 'DIV' && target.id === 'logo') || target.tagName === 'NAV') {
              target.classList.add('animate__zoomIn');
            } else if (target.tagName === 'DIV' && target.id === 'social-icons') {
              target.classList.add('animate__zoomIn');
            }
          } else {
            target.classList.remove('animate__animated');
            target.classList.remove('animate__zoomIn');
          }
        });
      },
      { threshold: 0.5 }
    );

    const allRefs = [headerRef.current, logoRef.current, navRef.current, socialIconsRef.current].filter(Boolean);
    allRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      allRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Helper function to check if a path is active
  const isActive = (path) => {
    // Check if the current location's pathname matches the link's path
    return location.pathname === path;
  };




  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // threshold
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);




  return (
    <HeaderContainer 
    // ref={headerRef}  
    // style={{ backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "transparent" }}


          ref={headerRef}
      style={{
        backgroundColor:
          location.pathname === "/admindashboard" ||
          location.pathname === "/userdashboard"
            ? "rgba(34, 121, 34, 0.5)" // ✅ Solid green for dashboard routes
            : scrolled
            ? "rgba(0,0,0,0.85)"
            : "transparent",
      }}
    
    >
      <Logo ref={logoRef} id="logo" onClick={()=>navigate('/')}>
         {/* Placeholder for the logo image. Replace with your actual logo. */}
         <img src={niseblogo} alt="Logo" />
         {/* <span className="font-bold text-xl">NISEB</span> */}
      </Logo>

      {/* Main navigation for desktop */}
      <Nav ref={navRef}>
        <NavLink onClick={() => handleNavLinkClick('/')} className={isActive('/') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Home</NavLink>
         <NavLink onClick={() => handleNavLinkClick('/aboutus')} className={isActive('/aboutus') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>About Us</NavLink>
      
          <NavLink onClick={() => handleNavLinkClick('/bulletin')} className={isActive('/bulletin') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Bulletin</NavLink>
       <NavLink onClick={() => handleNavLinkClick('/editors')} className={isActive('/editors') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Editors</NavLink>
      <BeautifulDropdown2 color={"white"} fontSize={"1rem"}/>
         <NavLink onClick={() => handleNavLinkClick('/gallery')} className={isActive('/gallery') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Gallery</NavLink>
      
        <NavLink onClick={() => handleNavLinkClick('/contactus')} className={isActive('/contactus') ? 'active' : ''} style={{ '--animate-duration': '5s' }}>Contact Us</NavLink>
      
      </Nav>
      <BeautifulDropdown/>
    

      {/* Social media icons for desktop */}
      {/* <SocialIcons ref={socialIconsRef} id="social-icons">
        <SocialLink href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></SocialLink>
        <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></SocialLink>
      </SocialIcons> */}

      {/* Hamburger menu icon for mobile */}
      <MobileMenuIcon onClick={toggleMobileMenu} ref={mobileMenuIconRef}>
        <i className="fas fa-bars fa-2x"></i>
      </MobileMenuIcon>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} ref={mobileMenuRef}>
        <NavLink2 onClick={() => handleNavLinkClick('/')} className={isActive('/') ? 'active' : ''}>Home</NavLink2>
        <NavLink2 onClick={() => handleNavLinkClick('/aboutus')} className={isActive('/aboutus') ? 'active' : ''}>About Us</NavLink2>
       
        {/* <NavLink onClick={() => handleNavLinkClick('/services')} className={isActive('/services') ? 'active' : ''}>Membership</NavLink> */}
         <NavLink2 onClick={() => handleNavLinkClick('/bulletin')} className={isActive('/bulletin') ? 'active' : ''}>Bulletin</NavLink2>
       <NavLink2 onClick={() => handleNavLinkClick('/editors')} className={isActive('/editors') ? 'active' : ''}>Editors</NavLink2>
        <BeautifulDropdown2 color={"green"} fontSize={"1.2rem"}/>
        
           <NavLink2 onClick={() => handleNavLinkClick('/gallery')} className={isActive('/gallery') ? 'active' : ''} style={{marginTop:"20px"}}>Gallery</NavLink2>
      <NavLink2 onClick={() => handleNavLinkClick('/contactus')} className={isActive('/contactus') ? 'active' : ''} >Contact Us</NavLink2>
      
        {/* <SocialIcons>
          <SocialLink href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></SocialLink>
          <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></SocialLink>
        </SocialIcons> */}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;






