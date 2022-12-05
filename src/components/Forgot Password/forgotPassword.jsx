import React from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.scss";

const ForgotPassword = (DarkMood) => {
  return (
    <>
      <div className="main-forgot-pass-div">
        <div className="sec-forgot-pass">
          <div className="forgot-text">Forgot Password</div>
          <p style={{ color: DarkMood === true ? "#fff" : "#000" }}>
            Please enter your email address, and we'll send you a link to reset
            your password.'
          </p>
          <div className="form-container-forgot">
            <div className="email-input-container">
              <div className="signin-inputs-title">
                <h5 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Username
                </h5>
              </div>
              <input type="text" placeholder="username" />
            </div>
            <div className="email-input-container">
              <div className="signin-inputs-title">
                <h5 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Email Address
                </h5>
              </div>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <button className="submit-btn-forgot">
              <Link to="/reset-password" style={{ color: "black" }}>
                Submit
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
