import React from "react";
import { Link } from "react-router-dom";
import "./resetPassword.scss";

const ResetPassword = ({ DarkMood }) => {
  return (
    <>
      <div className="container">

        <div className="row">
          <div className={`col-7 bg-card p-4 d-none d-md-flex text-dark flex-column justify-content-end`}>
            <p className="fw-bold"><span>RESET</span><span className="fs-1">YOUR PASSWORD</span></p>
          </div>
          <div className={`col-12 col-md-5 ${DarkMood ? "bg-signin-card text-white" : "bg-light text-dark"} p-3 p-md-4 px-md-5`}>
            <p className="fs-2"><i class="bi bi-lock me-2"></i>Reset Password</p>
            <hr className={`text-${DarkMood ? "white" : "dark"}`} />
            <li className="mt-1">  8 characters or longer. Combine upper and lowercase letters and
              numbers.</li>
            <div className="row mt-5">
              <div className="col-12">
                <label htmlFor="password" className="w-100">
                  New Password
                  <input placeholder="New Password" type="password" id="password" className={`form-control bg-transparent text-${DarkMood ? "white" : "dark"} w-100`} />
                </label>
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="confirmPassword" className="w-100">
                  Confirm New Password
                  <div class="input-group mb-3">
                    <input type="password" id="confirmPassword" class={`form-control bg-transparent text-${DarkMood ? "white" : "dark"}`} placeholder="Confirm Password" />
                  </div>
                </label>
              </div>
              <div className="col-12">
                <Link className={`btn btn-${DarkMood ? "light" : "dark"} mt-4 w-100`} to="/password-changed">
                  Submit<i class="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
