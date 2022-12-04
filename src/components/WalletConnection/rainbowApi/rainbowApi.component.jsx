import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useProvider } from 'wagmi'
import React, { useEffect } from "react";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: "HBKG0GYpYGp-uBRJFa56N5n86-YAR8Ja" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Sovereign",
  chains,
});


const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function RainbowApi() {
  const provider = useProvider({
    chainId: 1,
  })
  
  useEffect(() => {
  }, []);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme({})} chains={chains}>
        <ConnectButton id="trigger_Btn" />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
