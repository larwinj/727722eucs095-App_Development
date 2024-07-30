import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./paybill.css";
import Footer from "./Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

  const handleSubmit = async () => {
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
      <div className="left-section">
        <p className="trusted">Trusted by over 140M customers</p>
        <h1>Instant Prepaid Mobile Recharge Solution</h1>
        <p className="description">
          Empower your connectivity with seamless prepaid mobile recharges, where convenience meets innovation.
        </p>
        <button className="download-button">
          Download App
        </button>
      </div>
      <div className="right-section">
        <div className="form-container">
          <h2>Mobile Recharge</h2>

          <div className="radio-group">
            <label htmlFor="prepaid">
            <input
              type="radio"
              id="prepaid"
              name="option"
              value="prepaid"
              checked={option === "prepaid"}
              onChange={(event) => setOption(event.target.value)}
            />
              Prepaid</label>
              <label htmlFor="postpaid">
            <input
              type="radio"
              id="postpaid"
              name="option"
              value="postpaid"
              checked={option === "postpaid"}
              onChange={(event) => setOption(event.target.value)}
            />
                Postpaid</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              maxLength="10"
              placeholder=" "
              onChange={(event) => setMobileNumber(event.target.value)}
            />
            <label htmlFor="mobileNumber">Mobile Number</label>
          </div>
          <div className="input-group">
            <select
              id="operator"
              name="operator"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="" disabled>
                Operator
              </option>
              <option value="Jio">Jio</option>
              <option value="Airtel">Airtel</option>
              <option value="Vodafone">VI</option>
            </select>
            <label htmlFor="operator">Operator</label>
          </div>
          <div className="input-group">
            <select
              value={selectedCircle}
              onChange={handleCircleChange}
            >
              <option value="" disabled>
                Circle
              </option>
              {circles.map((circle, index) => (
                <option key={index} value={circle}>
                  {circle}
                </option>
              ))}
            </select>
            <label htmlFor="circle">Circle</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder=" "
              onChange={(e) => setAmount(e.target.value)}
            />
            <label htmlFor="amount">Amount</label>
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
        <div className="offers-section">
          <h3>Best Recharge Offers</h3>
          <div className="offers">
            <div className="offer">₹ 10<br />Top up<br />Validity: - days</div>
            <div className="offer">₹ 19<br />Special Offer: 1 GB<br />Validity: NA days</div>
            <div className="offer">₹ 20<br />Top up<br />Validity: - days</div>
            <div className="offer">₹ 29<br />Special Offer: 2 GB<br />Validity: NA days</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayBill;
