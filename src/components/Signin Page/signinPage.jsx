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
      email,
      password,
    };

    if (!email.trim() || !password.trim()) return setErrorMessage("Invalid email or password")

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
      <div className="container">

        <div className="row">
          <div className="col-7 bg-card p-4 d-none d-md-flex text-dark flex-column justify-content-end">
            <p><span>02/</span><span className="fs-1">Sign In</span></p>
            <p>More than a digital currency, Sovereign will serve as an evolving social platform</p>
          </div>
          <div className={`col-12 col-md-5 ${DarkMood ? "bg-signin-card text-white" : "bg-light text-dark"} p-3 p-md-4 px-md-5`}>
            <p className="fs-1"><i class="bi bi-box-arrow-in-right me-2"></i>Sign In</p>
            <hr />
            <div className="row mt-4">
              <div className="col-12">
                <label htmlFor="email" className="w-100">
                  Email
                  <input onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMessage("");
                  }} value={email} placeholder="Email" type="text" id="email" className={`form-control bg-transparent text-${DarkMood ? "white" : "dark"} w-100`} />
                </label>
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="password" className="w-100">
                  Password
                  <div class="input-group mb-3">
                    <input onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMessage("");
                    }} value={password} type="password" id="password" class={`form-control bg-transparent text-${DarkMood ? "white" : "dark"} border-end-0`} placeholder=" Password" />
                    <span class="input-group-text border-start-0 bg-transparent"><i class={`bi bi-eye text-${DarkMood ? "white" : "dark"}`}></i></span>
                  </div>
                </label>
              </div>
              <div className="col-12 mt-4">
                <Link
                  to="/forgot-password" className={`${DarkMood ? "text-white" : "text-dark"}`}
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="col-12">
                <div className="signin-error mt-3">
                  <p className="mb-0 text-danger">{errorMessage}</p>
                </div>
                <button onClick={signin} className={`btn btn-${DarkMood ? "light" : "dark"} mt-1 w-100`}>Countinue<i class="bi bi-arrow-right ms-2"></i></button>
                <p className="mt-5">Don't have an account? <Link className={`text-${DarkMood ? "white" : "dark"}`} to="/Connectwallet">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
