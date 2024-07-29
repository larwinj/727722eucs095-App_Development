import React, { useState, useEffect, useRef } from 'react';
import "./navbar.css";
import lottie from "lottie-web";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import BackgroundLetterAvatars from "./Avator";
import ProfileDropdown from "./ProfileDropdown";
import { defineElement } from "lord-icon-element";
defineElement(lottie.loadAnimation);

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openbt, setOpenbt] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="line">
        <AiOutlineMenu className="line" />
      </div>
      <Link to="/" className="logo">
        <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/pimvysaa.json"
          trigger="hover"
          colors="outline:#121331,primary:#b26836,secondary:#ffc738"
          style={{ width: "6vh", height: "6vh" }}
        ></lord-icon>
        <h3>PayEase</h3>
      </Link>
      <div className="top-links">
        <nav>
          <ul className="links">
            <li className="child">
              <Link to="/" className="hov">
                Home
              </Link>
            </li>
            <li className="child li">
              <Link to="/paybill">Pay Bill</Link>
            </li>
            <li className="child">
              <Link to="/mybills">My Bills</Link>
            </li>
            <li className="child">
              <Link to="/history">History</Link>
            </li>
            <li className="child">
              <Link to="/support">Support</Link>
            </li>
            <li className="child">
              <Link to="/about">About</Link>
            </li>
            <li className="child ls">
              <Link to="/login">Login/Signup</Link>
            </li>
          </ul>
        </nav>
        <div className="profile" onClick={()=> setOpen(!open)}>
          <BackgroundLetterAvatars/>
        </div>
        {open && <ProfileDropdown/>}
      </div>
      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
    </div>
  );
}

export default Navbar;
