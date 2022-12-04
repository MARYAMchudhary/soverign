import React from "react";
import { Link } from "react-router-dom";
import "./resetPassword.scss";

const ResetPassword = () => {
  return (
    <>
      <div className="main-forgot-pass-div">
        <div className="sec-forgot-pass">
          <div className="forgot-text">Reset Password</div>
          <p>
            8 characters or longer. Combine upper and lowercase letters and
            numbers.'
          </p>
          <div className="form-container-forgot">
            <div className="email-input-container">
              <div className="signin-inputs-title">
                <h5>New password</h5>
              </div>
              <input type="password" placeholder="New password" />
            </div>
            <div className="email-input-container">
              <div className="signin-inputs-title">
                <h5>Confirm new password</h5>
              </div>
              <input type="password" placeholder="Confirm password" />
            </div>
            <button className="submit-btn-reset">
              <Link to="/password-changed" style={{ color: "black" }}>
                Change Password
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
