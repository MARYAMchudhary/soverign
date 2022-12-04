import React from "react";
import "./welcomePage.scss";
import TwitterIcon from "../../assets/Social_Media_Icons/TwitterIcon.svg";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className="welcome-div-container">
        <div className="welcome-div-content">
          <img
            width={80}
            alt="Unavailable"
            src={require("../../assets/Icons/Tick Sign.png")}
          />
          <div className="second-content">
            <h3>Welcome To Sovereign</h3>
            <p>
              We are thrilled that you have chosen to join us on yet another
              journey into the future. Thank you for coming along with us on
              this journey.
            </p>
            <Link to="/chatcommunity">
              <button className="second-content-button" >Take Me To Community Chat</button>
            </Link>
            <a hidden href="https://twitter.com/SVRNDAO" target="_blank">
              <img src={TwitterIcon} className="twitterIcon" alt="Icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
