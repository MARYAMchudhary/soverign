import React from "react";
import "./walletconnect.styles.scss";
import WalletOptions from "./walletoptions/walletOptions";
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { ethers, Contract, providers } from 'ethers';

const WalletConnect = ({ DarkMood }) => {
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
  } = useWeb3React();
  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  };
  return (
    <>
      <div className="main-Wallet-parent">
        <Web3ReactProvider getLibrary={getLibrary}>
          <WalletOptions DarkMood={DarkMood} />
        </Web3ReactProvider>
      </div>
    </>
  );
};

export default WalletConnect;
