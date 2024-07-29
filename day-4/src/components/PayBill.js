import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./paybill.css";
import Footer from "./Footer";
import gas from "../asserts/gas-cylinder.png";
import toll from "../asserts/toll.png";
import edu from "../asserts/education.png";
import mobile from "../asserts/smartphone.png";
import postm from "../asserts/smartphone_5449015.png";
import dth from "../asserts/smart-tv.png";
import broad from "../asserts/router.png";
import water from "../asserts/water-drop.png";
import gplay from "../asserts/google-play.png";
import elec from "../asserts/electrical-energy.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const circles = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

function PayBill() {
  const [option, setOption] = useState("prepaid");
  const [mobileNumber, setMobileNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("");
  const [amount, setAmount] = useState("");
  const email = useSelector((state) => state.user.email);

  const handleCircleChange = (event) => {
    setSelectedCircle(event.target.value);
  };
  const handlsubmit = async () => {
    const data = {
      email: email,
      bmobilenumber: mobileNumber,
      type: option,
      operator: operator,
      circle: selectedCircle,
      amount: amount,
    };
    console.log(data);
    try {
      const response = await axios.post("http://localhost:8183/addUserBill", data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="paybill-container">
      <h2 className="paybill-h">
        No Wallet KYC Required😊to pay using UPI on Payease.Learn more.
      </h2>
      <div className="billing">
        <div className="bill-section">
          <div>
            <h2 className="tle-h">Recharge billls</h2>
            <div className="option">
              <div>
                <img src={mobile} className="img-paybill" />
                <h4>Mobile Recharge</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-section">
          <div className="form-bg-color"></div>
          <div className="bill-form-container">
            <h2>Recharge or Pay Mobile Bill</h2>

            <div className="pre-post">
              <div className="prem">
                <input
                  type="radio"
                  id="prepaid"
                  name="option"
                  value="prepaid"
                  onChange={(event) => setOption(event.target.value)}
                />
                <label for="prepaid">Prepaid</label>

                <input
                  type="radio"
                  id="postpaid"
                  name="option"
                  value="postpaid"
                  onChange={(event) => setOption(event.target.value)}
                />
                <label for="postpaid">Postpaid</label>
              </div>
            </div>
            <div className="bill-inputs">
              <div class="input-container">
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  maxLength="10"
                  placeholder=" "
                  onChange={(event) => setMobileNumber(event.target.value)}
                />
                <label for="mobileNumber">Mobile number</label>
              </div>

              <div class="input-container">
                <select
                  id="operator"
                  name="operator"
                  placeholder=" "
                  value={operator}
                  onChange={(e) => setOperator(e.target.value)}
                >
                  <option value="operator" disabled selected></option>
                  <option value="Jio">Jio</option>
                  <option value="Airtel">Airtel</option>
                  <option value="Vodafone">VI</option>
                </select>
                <label for="operator">Operator</label>
              </div>

              <div class="input-container">
                <select value={selectedCircle} onChange={handleCircleChange}>
                  <option value="" disabled>
                    Circle
                  </option>
                  {circles.map((circle, index) => (
                    <option key={index} value={circle}>
                      {circle}
                    </option>
                  ))}
                </select>
              </div>

              <div class="input-container">
                <input
                  type="text"
                  id="Amount"
                  name="Amount"
                  placeholder=" "
                  onChange={(e) => setAmount(e.target.value)}
                />
                <label for="Amount">Amount</label>
              </div>
              <div class="input-container">
                <button onClick={handlsubmit}>Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PayBill;
