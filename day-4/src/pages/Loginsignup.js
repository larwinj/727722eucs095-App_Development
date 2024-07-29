import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginsignup.css";
import axios from "axios";
import ls from "../asserts/ls3.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch  } from "react-redux";
import { login } from "../redux/Action";

function Loginsignup() {
  const navigate = useNavigate();

  const [isSliderMoved, setSliderMoved] = useState(false);
  const [isFormSectionMoved, setFormSectionMoved] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupMobile, setSignupMobile] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const [emailExistsError, setEmailExistsError] = useState("");
  const [mobileNumberExistsError, setMobileNumberExistsError] = useState("");
  const [Incorrect, setIncorrect] = useState("");

  const dispatch = useDispatch();

  const handleSignupClick = () => {
    setSliderMoved(true);
    setFormSectionMoved(true);
  };
  const handleLoginClick = () => {
    setSliderMoved(false);
    setFormSectionMoved(false);
  };

  const handleClick = () => {
    // toast.success("Registered Successfully");
  };
  const handleEmailBlur = async () => {
    if (signupEmail) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8181/api/v1/auth/email-exists?email=${signupEmail}`
        );
        if (response.status === 200) {
          setEmailExistsError("");
        }
      } catch (error) {
        console.error("Error checking email:", error);
        setEmailExistsError("*Email already exists");
      }
    } else {
      setEmailExistsError("");
    }
  };

  const handleMobileNumberBlur = async () => {
    if (signupMobile) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8181/api/v1/auth/mobile-number-exists?mobileNumber=${signupMobile}`
        );
        if (response.status === 200) {
          const { exists } = response.data;
          if (exists) {
            setMobileNumberExistsError("*Mobile number already exists");
          } else {
            setMobileNumberExistsError("");
          }
        } else {
          setMobileNumberExistsError("");
        }
      } catch (error) {
        console.error("Error checking mobile number:", error);
        setMobileNumberExistsError("");
      }
    } else {
      setMobileNumberExistsError("");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // toast.success("Registered Successfully", { className: "tst" });
    if (!isValidEmail(loginEmail)) {
      alert("Invalid Email");
      return;
    }
    if (!isPasswordValid(loginPassword)) {
      alert("Invalid password format");
      return;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/api/v1/auth/authenticate",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(response.data.email);
      console.log(response.data.name);
      dispatch(login(response.data.email, response.data.name));
      toast.success("Welcome Back!");
      navigate("/");
    } catch (error) {
      console.error("Error: ", error);
      setIncorrect("*Invalid credentials");
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (
      signupName.trim() === "" ||
      signupEmail.trim() === "" ||
      signupPassword.trim() === "" ||
      signupConfirmPassword.trim() === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (!isValidEmail(signupEmail)) {
      alert("Invalid Email!");
      return;
    }
    if (!isValidMobileNumber(signupMobile)) {
      alert("Invalid mobile number");
      return;
    }
    if (!isPasswordValid(signupPassword)) {
      alert(
        "Invalid password!\nPassword should be at least 8 characters long\nPassword should contain at least one lowercase letter\nPassword should contain at least one uppercase letter\nPassword should contain at least one digit\nPassword should contain at least one special character"
      );
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords doesn't match");
      return;
    }
    userSubmit();
  };

  const userSubmit = async () => {
    const signupData = {
      name: signupName,
      email: signupEmail,
      mobilenumber: signupMobile,
      password: signupPassword,
    };
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/register",
        signupData
      );
      alert("Sign up successful!");
      handleLoginClick();
    } catch (e) {
      console.log(e);
    }
  };

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const isValidMobileNumber = (input) => {
    const numericValue = input.replace(/[^0-9]/g, "");
    return numericValue.length === 10;
  };

  const isPasswordValid = (password) => {
    const minLength = 8;
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (password.length < minLength) {
      return false;
    }

    if (!complexityRegex.test(password)) {
      return false;
    }

    return true;
  };

  return (
    <div className="col">
      <div className="col1">
        <img src={ls} alt="login-img" className="ig updownanimate" />
      </div>
      <div className="bod col2">
        <div className="container">
          <div className="btn">
            <button className="login" onClick={handleLoginClick}>
              Login
            </button>
            <button className="signup" onClick={handleSignupClick}>
              Signup
            </button>
          </div>

          <div className={`slider ${isSliderMoved ? "moveslider" : ""}`}></div>
          <div
            className={`form-section ${
              isFormSectionMoved ? "form-section-move" : ""
            }`}
          >
            <form className="login-box">
              <input
                type="text"
                className="email ele"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <div className="message">{Incorrect && <p>{Incorrect}</p>}</div>
              <div className="cc">
                <button className="clkbtn" onClick={handleLoginSubmit}>
                  Login
                </button>
                <button className="clkbtn" onClick={handleClick}>
                  Cancel
                </button>
              </div>
            </form>

            <form className="signup-box">
              <input
                type="text"
                className="name ele"
                placeholder="Enter your name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
              <input
                type="email"
                className="email ele"
                placeholder="Enter your email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                onBlur={handleEmailBlur}
              />
              <div className="message">
                {emailExistsError && <p>{emailExistsError}</p>}
              </div>
              <input
                type="text"
                className="email ele"
                placeholder="Mobile number"
                value={signupMobile}
                maxLength="10"
                onChange={(e) => setSignupMobile(e.target.value)}
                onBlur={handleMobileNumberBlur}
              />
              <div className="message">
              {mobileNumberExistsError && <p>{mobileNumberExistsError}</p>}
            </div>
              <input
                type="password"
                className="password ele"
                placeholder="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <input
                type="password"
                className="password ele"
                placeholder="Confirm password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
              />
              <div className="cc">
                <button className="clkbtn" onClick={handleSignupSubmit}>
                  Signup
                </button>
                <button className="clkbtn" onClick={handleClick}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
