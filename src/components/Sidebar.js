import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/LogoWithText.svg";
import HomeIcon from "../assets/HomeIcon.svg";
import CodeIcon from "../assets/CodeIcon.svg";
import CloudIcon from "../assets/CloudIcon.svg";
import SettingsIcon from "../assets/SettingsIcon.svg";
import SignOutIcon from "../assets/sign-outIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
import BookIcon from "../assets/BookIcon.svg";
import MenuIcon from "../assets/MenuIcon.svg";
import CloseIcon from "../assets/closeIcon.svg";
import DropDown from '../assets/dropdownIcon.svg'

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 440);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen ? (
    <div className="navbar">
      <div className="small-screen-navbar">
        <div>
          <img src={logo} alt="logo with text" className="logo" />
        </div>
        <button className="menu-icon" onClick={toggleMenu}>
          <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="Menu Toggle" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="nav-list">
        <div>
          <button className="user-profile">
            Aradhya Yadav <img src= {DropDown} alt="dropdown icon "/>
          </button>
        </div>
         <div className="nav-menu modal">
           <NavLink to="/dashboard/repo" className="nav-link">
             <img src={HomeIcon} alt="Home" />
             Repositories
           </NavLink>
           <NavLink to="/dashboard/ai-review" className="nav-link">
             <img src={CodeIcon} alt="AI Review" />
             AI Code Review
           </NavLink>
           <NavLink to="/dashboard/cloud-security" className="nav-link">
             <img src={CloudIcon} alt="Cloud Security" />
             Cloud Security
           </NavLink>
           <NavLink to="/dashboard/how-to-use" className="nav-link">
             <img src={BookIcon} alt="How to Use" />
             How to Use
           </NavLink>
           <NavLink to="/dashboard/settings" className="nav-link">
             <img src={SettingsIcon} alt="Settings" />
             Settings
           </NavLink>
           <NavLink to="/dashboard/support" className="nav-link">
             <img src={PhoneIcon} alt="Support" />
             Support
           </NavLink>
           <NavLink to="/dashboard/logout" className="nav-link">
             <img src={SignOutIcon} alt="Logout" />
             Logout
           </NavLink>
         </div>
     </div>
      )}
    </div>
   
  ) : (
    <div className={`sidebar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="nav-header">
        <div className="toggle-menu">
          <div>
            <img src={logo} alt="logo with text" className="logo" />
          </div>
          <button className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <img src={CloseIcon} alt="Close Menu" />
            ) : (
              <img src={MenuIcon} alt="Open Menu" />
            )}
          </button>
        </div>
        <div>
          <button className="user-profile">
          UtkarshDhairyaPan..<img src= {DropDown} alt="dropdown icon "/>
          </button>
        </div>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="top-nav-links">
          <NavLink
            to="/dashboard/repo"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={HomeIcon} className="nav-icon" alt="home icon" />{" "}
            Repositories
          </NavLink>
          <NavLink
            to="/dashboard/ai-review"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={CodeIcon} className="nav-icon" alt="code icon" /> AI Code
            Review
          </NavLink>
          <NavLink
            to="/dashboard/cloud-security"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={CloudIcon} className="nav-icon" alt="cloud icon" /> Cloud
            Security
          </NavLink>
          <NavLink
            to="/dashboard/how-to-use"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={BookIcon} className="nav-icon" alt="book icon" /> How to
            Use
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={SettingsIcon} className="nav-icon" alt="settings icon" />{" "}
            Settings
          </NavLink>
        </div>
        <div className="bottom-nav-links">
          <NavLink
            to="/dashboard/support"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={PhoneIcon} className="nav-icon" alt="phone icon" />{" "}
            Support
          </NavLink>
          <NavLink
            to="/dashboard/logout"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={SignOutIcon} className="nav-icon" alt="logout icon" />{" "}
            Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
