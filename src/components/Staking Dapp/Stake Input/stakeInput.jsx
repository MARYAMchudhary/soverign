import React from 'react';
import './stakeInput.scss';

const StakeInput = ({ DarkMood }) => {
  return (
    <>
      <div className="stake-parent-contain">
        <div className="top-child-Stake">
          <span
            className="stake-title"
            style={{ color: DarkMood === true ? "#fff" : "#000" }}
          >
            Stake
          </span>
          <div className="second-child-stake">
            <span   style={{ color: DarkMood === true ? "#fff" : "#000" }}>30%</span>
            <span>EST.APY</span>
          </div>
        </div>
        {/* <hr /> */}
        <span className="hr-line"></span>
        <div className="buttons-container">
          <button>30 DAYS</button>
          <button>90 DAYS</button>
          <button>180 DAYS</button>
          <button>365 DAYS</button>
        </div>

        <div className="input-with-labels">
          <div className="inp-childs">
            <span  style={{ color: DarkMood === true ? "#fff" : "#000" }}>Balance: 2889.0</span>
            <input
              type="number"
              id="balance_inp"
              className="stake_inp"
              placeholder="256.6"
            />
            <button className="inp_btns"  style={{ color: DarkMood === true ? "#fff" : "#000" }}>Stake</button>
          </div>
          <div className="inp-childs">
            <span  style={{ color: DarkMood === true ? "#fff" : "#000" }}>Staked: 256.50</span>
            <input
              type="number"
              id="balance_inp"
              className="stake_inp"
              placeholder="0.00"
            />
            <button className="inp_btns"  style={{ color: DarkMood === true ? "#fff" : "#000" }}>Unstake</button>
          </div>
          <div className="inp-childs">
            <span  style={{ color: DarkMood === true ? "#fff" : "#000" }}>Rewards Earned: 106.90</span>
            <input
              type="number"
              id="balance_inp"
              className="stake_inp"
              placeholder="0.00"
            />
            <button className="inp_btns"  style={{ color: DarkMood === true ? "#fff" : "#000" }}>Claim</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakeInput
