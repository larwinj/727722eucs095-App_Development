import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { BiSupport } from "react-icons/bi";
import { useDispatch  } from "react-redux";
import { logout } from "../redux/Action";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import BackgroundLetterAvatars from "./Avator";
import { useSelector } from "react-redux";
defineElement(lottie.loadAnimation);

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  return (
    <div className="dropdown-content">
      <ul>
        <li className="dd-li-username">
          <BackgroundLetterAvatars/>
          <p>{name}</p>
        </li>
        <li className="dd-li dli">
          {/* <lord-icon
            src="https://cdn.lordicon.com/dqxvvqzi.json"
            trigger="hover"
            colors="outline:#121331,primary:#ffc738,secondary:#4bb3fd"
            style={{ width: "5vh", height: "5vh" }}
          ></lord-icon> */}
          <p className="dd-li-p">Profile</p>
        </li>
        <li className="dd-li">
          <Link to="/paybill" className="black-c">
            Pay Bill
          </Link>
        </li>
        <li className="dd-li">
          {/* <lord-icon
            src="https://cdn.lordicon.com/ttioogfl.json"
            trigger="morph"
            colors="primary:#121331,secondary:#ebe6ef,tertiary:#4bb3fd,quaternary:#92140c,quinary:#f9c9c0"
            style={{ width: "5vh", height: "5vh" }}
          ></lord-icon> */}
          <Link to="/mybills" className="black-c">
            My Bills
          </Link>
        </li>
        <li className="dd-li">
          <Link to="/history" className="black-c">
            History
          </Link>
        </li>
        <li className="dd-li">
            {/* <BiSupport className="dd-ico"/> */}
          <Link to="/support" className="black-c">
            Support
          </Link>
        </li>
        <li className="dd-li">
          {/* <lord-icon
            src="https://cdn.lordicon.com/oncyjozz.json"
            trigger="hover"
            colors="outline:#121331,primary:#646e78"
            style={{ width: "5vh", height: "5vh" }}
          ></lord-icon> */}
          <p className="dd-li-p">Settings</p>
        </li>
        <li className="dd-li-btn">
          <button onClick={()=> dispatch(logout())}>Logout</button>
        </li>
      </ul>
      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
    </div>
  );
};

export default ProfileDropdown;
