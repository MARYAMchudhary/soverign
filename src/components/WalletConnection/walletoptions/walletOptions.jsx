import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./walletOptions.styles.scss";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import axios from "axios";
import RainbowApi from "../rainbowApi/rainbowApi.component";
import { useAccount } from "wagmi";
import Web3 from "web3";
import Portis from "@portis/web3";
import { ethers, Contract, providers } from 'ethers';
// import { useAddress, useWalletConnect,useDisconnect } from "@thirdweb-dev/react";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { connectors } from "./WalletConnectModels/connectors";
import { toHex, truncateAddress } from "./WalletConnectModels/utils";

let visitorIdValue = "";
const WalletOptions = ({ DarkMood }) => {
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
  } = useWeb3React();
  const navigate = useNavigate();
  // const connectWallet = useWalletConnect();
  // const addressWalletConnect = useAddress();
  // const disconnect = useDisconnect();

  const [selectedOne, setselectedOne] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
  });
  const [walletName, setwalletName] = useState("");
  const [walletAdress, setwalletAdress] = useState("");
  const [whichFunction, setwhichFunction] = useState("");
  const [visitorId, setVisitorId] = useState("");

  const [ENS, setENS] = useState();
  useEffect(() => {
    console.log("Address: ", address);
    // if (isConnected) {
    //   sessionStorage.setItem("walletAddress", address);
    //   let walletAddress = JSON.stringify(address);
    //   console.log(walletAddress);
    //   // return
    //   axios
    //     .get(`${global.backendUrl}/getUserByWalletAddress/${walletAddress}`)
    //     .then((responseUser) => {
    //       console.log(responseUser);
    //       // return
    //       if (responseUser.data.length > 0) {
    //         sessionStorage.setItem(
    //           "user",
    //           JSON.stringify(responseUser.data[0])
    //         );
    //         navigate("/welcome-page/");
    //       } else {
    //         let formData = {
    //           user_wallet_address: address,
    //           user_uid: visitorId,
    //         };
    //         axios
    //           .post(`${global.backendUrl}/storeUser`, formData)
    //           .then((response) => {
    //             console.log(response);
    //             navigate("/Communitysignup/" + response.data.insertId);
    //           });
    //       }
    //     });
    // }
    getVisitorId();
  }, []);
  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  };
  // Set MM/walletConnect provider in localStorage
  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  // Unset MM/walletConnect provider in localStorage
  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
  };
  const connectMetaMaskWC = async () => {
    let isCancelled = false;
    await activate(connectors.injected, () => {
      console.log("Connection Rejected");
      isCancelled = true;
    });

    if (!isCancelled) {
      setProvider("injected");
      console.log("Connected Successfully");
    }
  };

  const lookupENS = async () => {
    const provider = await library.provider;
    const web3Provider = new providers.Web3Provider(provider);
    console.log({ account });
    const _ens = await web3Provider.lookupAddress(account);
    if (_ens) setENS(_ens);
  };

  const connectWalletConnect = async () => {
    let isCancelled = false;
    await activate(connectors.walletConnect, () => {
      console.log("Connection Rejected");
      isCancelled = true;
    });
    console.log(isCancelled);
    if (!isCancelled) {
      setProvider("walletConnect");
      console.log("Connected Successfully");
    }
  };
  async function getVisitorId() {
    console.log("visitorId");
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise;
    const result = await fp.get();

    visitorIdValue = result.visitorId;
    console.log("visitorId", result.visitorId);
    setVisitorId(result.visitorId);
  }
  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    console.log("provider", provider);
    if (provider) activate(connectors[provider]);
  }, [activate]);

  useEffect(() => {
    if (!account) return;
    if (!library) return;
    lookupENS()
      .then(() => {
        console.log("DONE");
      })
      .catch((err) => console.log("err", err));
  }, [account, library]);
  const connectMetaMask = () => {
    setselectedOne({ box1: "add-border" });
    setwhichFunction("runMetaMask");
  };

  const runWalletConnect = () => {
    console.log("WalletConnect");
    connectWalletConnect();
    // connectWallet()
  };
  const runMetaMask = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setwalletName("MetaMask");
        console.log(res);
        setwalletAdress(res[0]);
        sessionStorage.setItem("walletAddress", res[0]);
        let walletAddress = JSON.stringify(res[0]);
        console.log(walletAddress);
        // return
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
              navigate("/welcome-page/");
            } else {
              let formData = {
                user_wallet_address: res[0],
                user_uid: visitorId,
              };
              axios
                .post(`${global.backendUrl}/storeUser`, formData)
                .then((response) => {
                  console.log(response);
                  navigate("/Communitysignup/" + response.data.insertId);
                });
            }
          });

        // alert("Connected To MetaMask Wallet.");
      });
    } else {
      alert(`install MetaMask extension!!`);
      window.location.assign(
        "https://metamask.app.link/dapp/sovereign.unialsolutions.com/"
      );
    }
  };

  //Coinbase Wallet
  const runCoinbase = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setwalletName("Coinbase");
        setwalletAdress(res[0]);
        navigate("/Communitysignup");
        alert("Connected To Coinbase Wallet.");
      });
    } else {
      alert(`Install Coinbase Extension!!`);
    }
  };

  const connectCoinbase = () => {
    setselectedOne({ box2: "add-border" });
    setwhichFunction("runCoinbase");
  };

  //Trust Wallet
  const connectTrustWallet = () => {
    setselectedOne({ box4: "add-border" });
    setwhichFunction("runTrustWallet");
  };

  const runTrustWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setwalletName("Trust Wallet");
        setwalletAdress(res[0]);
        navigate("/Communitysignup");
        alert("Connected To Trust Wallet.");
      });
    } else if (window.site.isMobile) {
      alert("You're on mobile.");
      // window.location = 'https://metamask.app.link/dapp/http://localhost:3000/';
    } else {
      alert(`Install Trust Wallet Extension!!`);
    }
  };

  //Phantom Wallet
  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }

    window.open("https://phantom.app/", "_blank");
  };

  const runPhantom = async (value) => {
    const provider = getProvider(); // see "Detecting the Provider"
    try {
      const resp = await provider.connect();
      console.log(resp.publicKey.toString());
      setwalletName(value);
      setwalletAdress(resp.publicKey.toString());
    } catch (err) {
      // { code: 4001, message: 'User rejected the request.' }
    }
  };

  const connectPhantom = () => {
    setwhichFunction("runPhantom");
  };

  //Portis Wallet
  const runPortis = (value) => {
    const portis = new Portis(
      "09f599e6-359c-4423-991f-541c746f4e04",
      "mainnet"
    );
    const web3 = new Web3(portis.provider);
    web3.eth.getAccounts((error, accounts) => {
      console.log(accounts);
      setwalletAdress(accounts);
      setwalletName(value);
    });
  };

  const connectPortis = () => {
    setwhichFunction("runPortis");
  };

  //Core Wallet
  const runCore = (value) => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setwalletName(value);
        setwalletAdress(res[0]);
        console.log(res[0]);
        console.log(value);
      });
    } else if (value === "Portis") {
      runPortis(value);
    } else {
      alert(`Install Core extension!!`);
    }
  };

  const connectCore = () => {
    setwhichFunction("runCore");
  };

  //Glow Wallet
  const runGlow = async (value) => {
    try {
      const resp = await window.glow.connect();
      setwalletAdress(resp.address);
      setwalletName(value);
    } catch (err) {}
  };

  const connectGlow = () => {
    setwhichFunction("runGlow");
  };
  //Kaikas Wallet
  const runKaikas = async (value) => {
    if (typeof window.klaytn !== "undefined") {
      // Kaikas user detected. You can now use the provider.
      const res = await window["klaytn"].enable();
      console.log(res);
      setwalletAdress(res);
      setwalletName(value);
    }
  };

  const connectKaikas = () => {
    setwhichFunction("runKaikas");
  };

  //Solflare Wallet
  const runSolflare = async (value) => {
    let res = await window.solflare.connect();
    let dataObj = window.solflare.publicKey;
    setwalletName(value);
    setwalletAdress(dataObj.toString());
  };

  const connectSolflare = () => {
    setwhichFunction("runSolflare");
  };

  const connectToWallet = () => {
    if (whichFunction === "runMetaMask") {
      runMetaMask();
    } else if (whichFunction === "runCoinbase") {
      runCoinbase();
    } else if (whichFunction === "runTrustWallet") {
      runTrustWallet();
    } else if (whichFunction === "runPhantom") {
      runPhantom();
    } else if (whichFunction === "runCore") {
      runCore();
    } else if (whichFunction === "runGlow") {
      runGlow();
    } else if (whichFunction === "runKaikas") {
      runKaikas();
    } else if (whichFunction === "runSolflare") {
      runSolflare();
    } else if (whichFunction === "runPortis") {
      runPortis();
    } else if (whichFunction === "runWalletConnect") {
      connectWalletConnect();
    } else if (whichFunction === "") {
      alert("Please select a wallet to connect to.");
    }
  };

  return (
    <>
      <div className="wallets-container">
        <span
          className="heading"
          style={{ color: DarkMood === false ? "#000" : "" }}
        >
          Connect Wallet
        </span>
        <div className="wallets-list">
          <div
            onClick={connectMetaMask}
            className={`list-item space-y mb-2 `}
            tabIndex="1"
          >
            <img width={50} alt="Unavailable" src="/Images/MetaMask-logo.svg" />
            <span>MetaMask</span>
          </div>
          <div
            onClick={connectCoinbase}
            className={`list-item space-y mb-2 `}
            tabIndex="2"
          >
            <img width={50} alt="Unavailable" src="/Images/Coinbase-logo.svg" />
            <span>Coinbase</span>
          </div>
          <div
            tabIndex="3"
            onClick={() => {
              setselectedOne({ box3: "add-border" });
              setwhichFunction("runWalletConnect");
            }}
            className={`list-item space-y mb-2 `}
          >
            <img width={50} alt="Unavailable" src="/Images/walletconnect.svg" />
            <span>WalletConnect</span>
          </div>
          <div
            onClick={connectTrustWallet}
            className={`list-item space-y mb-2`}
            tabIndex="4"
          >
            <img
              width={40}
              alt="Unavailable"
              src="/Images/trust-wallet-logo.svg"
            />
            <span>Trust Wallet</span>
          </div>
          <div
            onClick={(e) => connectPhantom(e.target.value)}
            className={`list-item space-y mb-2 `}
            tabIndex="5"
          >
            <img width={40} alt="Unavailable" src="/Images/phantom-logo.webp" />
            <span>Phantom</span>
          </div>
          <div
            value="Core"
            onClick={(e) => connectCore(e.target.value)}
            className={`list-item space-y mb-2`}
            tabIndex="6"
          >
            <img width={40} alt="Unavailable" src="/Images/Core.svg" />
            <span>Core</span>
          </div>
          <div
            onClick={(e) => connectGlow(e.target.value)}
            className={`list-item space-y mb-2`}
            tabIndex="7"
          >
            <img width={40} alt="Unavailable" src="/Images/Glow.png" />
            <span>Glow</span>
          </div>
          <div
            onClick={(e) => connectKaikas(e.target.value)}
            className={`list-item space-y mb-2`}
            tabIndex="8"
          >
            <img width={40} alt="Unavailable" src="/Images/Kaikas.png" />
            <span>Kaikas</span>
          </div>
          <div
            onClick={(e) => connectSolflare(e.target.value)}
            className={`list-item space-y mb-2`}
            tabIndex="9"
          >
            <img width={40} alt="Unavailable" src="/Images/Solflare.svg" />
            <span>Solflare</span>
          </div>
          <div
            onClick={(e) => connectPortis(e.target.value)}
            className={`list-item space-y `}
            tabIndex="10"
          >
            <img width={40} alt="Unavailable" src="/Images/Portis.png" />
            <span>Portis</span>
          </div>
        </div>
        <Link onClick={connectToWallet} className="connection-btn my-3">
          Connect
        </Link>
        {/* <RainbowApi /> */}
      </div>
    </>
  );
};

export default WalletOptions;
