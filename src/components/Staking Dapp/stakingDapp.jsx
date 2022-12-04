import React from 'react';
import GraphContainer from './Graph Container/graphContainer';
import Harvest from './Harvest/harvest';
import RecentTransactions from './Recent Transactions/recentTransactions';
import StakeInput from './Stake Input/stakeInput';
import './stakingDapp.scss';

const StakingDapp = () => {
  return (
    <>
        <div className='staking-dapp-parent'>
          <GraphContainer/>
          <StakeInput />
          <Harvest/>
          <RecentTransactions/>
        </div>
    </>
  )
}

export default StakingDapp
