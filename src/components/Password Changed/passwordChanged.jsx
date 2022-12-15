import React from "react";
import "./passwordChanged.scss";
import { Link } from "react-router-dom";
import SuccessImg from "../../assets/Icons/success.png"

const PasswordChanged = ({ DarkMood }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <p className={`position-relative text-${DarkMood ? "light" : "dark"}`}><span className="position-absolute top-0 fs-5">Done</span> <span className="fs-1 ms-5">Successfully</span></p>

            <div className={`password-chaged-bg${DarkMood ? "" : "-light"} p-3 py-4 d-flex-all flex-column shadow`}>
              <img src={SuccessImg} className="img-fluid" alt="" />
              <p className={`mt-2 fs-2 text-${DarkMood ? "white" : "dark"}`}>“Password changed!”</p>
              <p className={`mt-2 text-${DarkMood ? "white" : "dark"}`}>Your password has been successfully reset.Click the button below to login.</p>
              <Link to="/sign-in" className={`btn btn-${DarkMood ? "light" : "dark"} rounded-0 mt-3`}>Go to log in</Link>
            </div>

          </div>
        </div>
      </div>
      {/* <div className="welcome-div-container">
        <div className="welcome-div-content">
          <img
            width={80}
            alt="Unavailable"
            src={require("../../assets/Icons/Tick Sign.png")}
            style={{
              cursor: "pointer",
              filter:
                DarkMood === false
                  ? "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)"
                  : "",
              // color: DarkMood === true ? "#fff" : "#000",
            }}
          />
          <div className="second-content">
            <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
              Password Changed
            </h3>
            <Link to="/chatcommunity">
              <button className="second-content-button">
                Take Me To Community Chat
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PasswordChanged;
