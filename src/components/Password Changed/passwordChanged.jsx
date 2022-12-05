import React from "react";
import "./passwordChanged.scss";
import { Link } from "react-router-dom";

const PasswordChanged = ({ DarkMood }) => {
  return (
    <>
      <div className="welcome-div-container">
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
      </div>
    </>
  );
};

export default PasswordChanged;
