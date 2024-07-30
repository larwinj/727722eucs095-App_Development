import React from "react";
import "./about.css";
import immg from "../asserts/team.png";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Partners from "../components/Partners";

function About() {
  return (
    <div className="about">
      <div className="company">
        <div className="img">
          <img src={immg} alt="Company Team" />
        </div>
        <div className="company-info">
          <h1 className="company-title">
            PAYEASE <span className="our">FOR EVERYONE</span>
          </h1>
          <p className="about-p">
            <b>PayEase</b>, your ultimate destination for seamless and hassle-free online payments!
             Experience the future of financial transactions with our intuitive platform designed to make your life easier. 
             With PayEase, you can effortlessly manage your bills, execute online payments, and monitor your transaction history—all
              within a secure and reliable environment. Join us and discover the convenience and 
              peace of mind that comes with using PayEase.
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
