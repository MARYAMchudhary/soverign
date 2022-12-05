import React, { useState, useEffect } from "react";
import "./twitterVerification.scss";
import TwitterWhite from "../../assets/Social_Media_Icons/TwitterPureWhite.svg";
import WalletWhite from "../../assets/Icons/WalletWhite.svg";
import { Link } from "react-router-dom";
import Web3 from "web3/dist/web3.min.js";
const TwitterVerification = ({ DarkMood }) => {
  const [isWalletVerified, setIsWalletVerified] = useState("Not Checked");

  const twitterHandle = (e) => {
    console.log(e.data.user_id);
  };
  return (
    <>
      <div className="container1">
        <div className="container-2">
          <h2 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
            COMMUNITY SIGN UP
          </h2>
          <div className="twitter-info">
            <div className="first-section">
              <div className="twt">
                <img
                  width={25}
                  alt="Unavailable"
                  src={TwitterWhite}
                  style={{
                    cursor: "pointer",
                    filter:
                      DarkMood === false
                        ? "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)"
                        : "",
                    // color: DarkMood === true ? "#fff" : "#000",
                  }}
                />
                <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Twitter
                </span>
              </div>
              {/* <a
                // href="https://twitter.com/SVRNDAO?ref_src=twsrc%5Etfw"
                href="https://twitter.com/SVRNDAO"
                target="_blank"
                class="twitter-follow-button"
                data-show-count="false"
              >
                Follow @SVRNDAO
              </a> */}
              {/* <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script> */}

              <a
                href="https://twitter.com/SVRNDAO?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="true"
                size="large"
                onClick={twitterHandle}
              >
                Follow @SVRNDAO
              </a>

              <button>Verify</button>
            </div>
            <div
              className="second-section"
              style={{ color: DarkMood === true ? "#fff" : "#000" }}
            >
              Follow @SAVANDRO
            </div>
            <hr />
            <div className="first-section">
              <div className="twt">
                <img
                  width={25}
                  alt="Unavailable"
                  src={WalletWhite}
                  style={{
                    cursor: "pointer",
                    filter:
                      DarkMood === false
                        ? "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)"
                        : "",
                    // color: DarkMood === true ? "#fff" : "#000",
                  }}
                />
                <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Wallet
                </span>
              </div>
              <button
                className={isWalletVerified == "True" ? "verified" : ""}
                onClick={(e) => {
                  console.log(window.ethereum);
                  if (window.ethereum) {
                    // Modern dapp browsers...
                    window.web3 = new Web3(window.ethereum);
                  } else if (window.web3) {
                    // Legacy dapp browsers...
                    window.web3 = new Web3(window.web3.currentProvider);
                  }
                  window.web3.eth
                    .getBalance(window.ethereum.selectedAddress)
                    .then(async function(result) {
                      console.log(result);
                      const value = Web3.utils.fromWei(result, "ether");
                      console.log(value);
                      if (value > 0.1) {
                        setIsWalletVerified("True");
                      } else {
                        setIsWalletVerified("False");
                      }
                    });
                }}
              >
                {isWalletVerified == "True" ? "Verified" : "Verify"}
              </button>
            </div>
            <div className="second-section paragraph-section">
              <p
                className="mb-0"
                style={{ color: DarkMood === true ? "#fff" : "#000" }}
              >
                Registered wallets must contain at least 0.1 ETH on the Ethereum
                Network to access community features
              </p>
            </div>
          </div>
          <button className="signup-button">
            <Link style={{ color: "black" }} to="/welcome-page">
              Complete Signup
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default TwitterVerification;
