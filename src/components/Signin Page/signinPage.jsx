import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signinPage.scss";
import axios from "axios";
import RainbowApi from "./rainbowApi/rainbowApi.component";
import { useAccount } from 'wagmi'

let loggedInWalletAddress = ""
const SigninPage = ({ DarkMood }) => {
  const navigate = useNavigate();
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [connectRainbow, setConnectRainbow] = useState(false);
  useEffect(() => {
    if (connectRainbow == true) {
      getWallet();
    }
  }, [isConnected]);
  function getWallet() {
    console.log("Address: ", address);
    if (isConnected) {
      sessionStorage.setItem("walletAddress", address);
      let walletAddress = JSON.stringify(address);
      console.log(walletAddress);
      console.log(address);
      console.log(loggedInWalletAddress);
      if (address.toLowerCase() == loggedInWalletAddress.toLowerCase()) {
        axios
          .get(`${global.backendUrl}/getUserByWalletAddress/${walletAddress}`)
          .then((responseUser) => {
            console.log(responseUser);
            // return
            if (responseUser.data.length > 0) {
              sessionStorage.setItem(
                "user",
                JSON.stringify(responseUser.data[0])
              );
              setConnectRainbow(false);
              navigate("/welcome-page/");
            }
          });
      } else {
        setConnectRainbow(false);
        setErrorMessage(
          "Your connected wallet is not integrated with provided email."
        );
      }
    }
  }
  function signin() {
    let formData = {
      email: email,
      password: password,
    };
    axios.post(`${global.backendUrl}/signin`, formData).then((response) => {
      console.log(response);
      if (response.data.result == true) {
        setConnectRainbow(true);
        loggedInWalletAddress = response.data.data[0].user_wallet_address;
        getWallet();
        // verifyMetamask(response.data.data[0].user_wallet_address,response.data.data[0])
        // navigate("/welcome-page");
      } else {
        setErrorMessage("Invalid Email Or Password!");
      }
    });
  }
  function verifyMetamask(walletAddressValue, user) {
    console.log("ABC");
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        console.log(res);
        console.log(walletAddressValue);
        if (res[0] == walletAddressValue) {
          sessionStorage.setItem("walletAddress", res[0]);
          sessionStorage.setItem("user", JSON.stringify(user));
          navigate("/welcome-page");
        } else {
          setErrorMessage(
            "Your connected wallet is not integrated with provided email."
          );
        }
      });
    } else {
      alert(`install MetaMask extension!!`);
    }
  }
  return (
    <>
      <div className="signin-container">
        {connectRainbow == false ? (
          <div className="signin-form">
            <h2
              className="signin-heading"
              style={{ color: DarkMood === true ? "#fff" : "#000" }}
            >
              Sign in
            </h2>
            <div className="email-input-container">
              <div className="signin-inputs-title">
                <h5 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Email Address
                </h5>
              </div>
              <input
                value={email}
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>
            <div className="password-input-container">
              <div className="signin-inputs-title">
                <h5 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  {" "}
                  Password
                </h5>
              </div>
              <input
                value={password}
                type="password"
                placeholder="......."
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>
            <div className="signin-error">
              <p>{errorMessage}</p>
            </div>
            <button
              onClick={(e) => {
                signin();
              }}
              className="continue-button"
            >
              Continue
            </button>
            <h5
              className="forgot"
              style={{ color: DarkMood === true ? "#fff" : "#000" }}
            >
              <Link
                to="/forgot-password"
                style={{ color: DarkMood === true ? "#fff" : "#000" }}
              >
                Forgot Password?
              </Link>
            </h5>
            <p style={{ color: DarkMood === true ? "#fff" : "#000" }}>
              Don't have a community account?{" "}
              <Link className="signupLink" to="/Connectwallet">
                <strong style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  {" "}
                  Sign Up
                </strong>
              </Link>
            </p>
          </div>
        ) : (
          <RainbowApi />
        )}
      </div>
    </>
  );
};

export default SigninPage;
