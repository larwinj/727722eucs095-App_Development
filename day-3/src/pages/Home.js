import React from "react";
import "./home.css";
import hm from "../asserts/bg4.png";
import GetStart from "../components/getstart/GetStart";
import About from "./About";
import Stats from "../components/Stats";
import { useSelector } from 'react-redux';

function Home() {
  const email = useSelector((state) => state.user.email);
  return (
    <div className="home">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div
        class="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="column">
          <img className="img-s" src={hm} alt="img"  onClick={() => console.log(email)}/>
        </div>
        <div class="column" id="c2">
          <div class="typewriter">
            <h1>Empower Your Finances</h1>
          </div>
          <p className="p">with Convenient Online Bill Payments</p>
          <GetStart />
        </div>
      </div>
      <Stats/>
      <About/>
    </div>
  );
}

export default Home;
