import React from "react";
import GraphContainer from "./Graph Container/graphContainer";
import Harvest from "./Harvest/harvest";
import RecentTransactions from "./Recent Transactions/recentTransactions";
import StakeInput from "./Stake Input/stakeInput";
import "./stakingDapp.scss";

const StakingDapp = ({ DarkMood }) => {
  return (
    <>
      <div
        className={
          DarkMood === true
            ? "staking-dapp-parent dark_mood mt-n3"
            : "staking-dapp-parent light_mood mt-n3"
        }
      >
        <GraphContainer DarkMood={DarkMood} />
        <StakeInput DarkMood={DarkMood} />
        <Harvest DarkMood={DarkMood} />
        <RecentTransactions DarkMood={DarkMood} />
      </div>
    </>
  );
};

export default StakingDapp;
