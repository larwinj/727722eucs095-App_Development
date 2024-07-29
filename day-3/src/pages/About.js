import React from "react";
import "./about.css";
import immg from "../asserts/team.png";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Partners from "../components/Partners";

function About() {
  return (
    <div className="about">
      {/* <!-- -----------------------------------------------company---------------------------------------------------------------- --> */}
      <div className="company">
        <div className="img">
          <img src={immg} alt="" />
        </div>
        <div className="company-info">
          <span>
            PAYEASE <span className="our">FOR EVERYONE</span>
          </span>
          <p className="about-p">
            <b style={{ color: "black", fontWeight:"20px"}}>PayEase</b> is a user-friendly online
            payment platform that aims to make financial transactions convenient
            and effortless. With our secure and reliable system, users can
            easily manage their bills, make online payments, and keep track of
            their transaction history.
          </p>
        </div>
      </div>
      <Team/>
      <Partners/>
      <Footer />
    </div>
  );
}

export default About;
