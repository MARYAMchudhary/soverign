import React from 'react';
import './stakeInput.scss';

const StakeInput = () => {
  return (
    <>
      <div className='stake-parent-contain'>
        <div className='top-child-Stake'>
          <span className='stake-title'>Stake</span>
          <div className='second-child-stake'>
            <span>30%</span>
            <span>EST.APY</span>
          </div>
        </div>
        {/* <hr /> */}
        <span className='hr-line'></span>
        <div className='buttons-container'>
          <button>30 DAYS</button>
          <button>90 DAYS</button>
          <button>180 DAYS</button>
          <button>365 DAYS</button>
        </div>

        <div className='input-with-labels'>
          <div className='inp-childs'>
            <span>Balance: 2889.0</span>
            <input type='number' id='balance_inp' className='stake_inp' placeholder='256.6'/>
            <button className='inp_btns'>Stake</button>
          </div>
          <div className='inp-childs'>
            <span>Staked: 256.50</span>
            <input type='number' id='balance_inp' className='stake_inp' placeholder='0.00'/>
            <button className='inp_btns'>Unstake</button>
          </div>
          <div className='inp-childs'>
            <span>Rewards Earned: 106.90</span>
            <input type='number' id='balance_inp' className='stake_inp' placeholder='0.00'/>
            <button className='inp_btns'>Claim</button>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default StakeInput
