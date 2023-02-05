import React from "react";
import "./stakeInput.scss";
import triangle from "../../../assets/homeicons/triangle.png";
import { Divider } from "@mui/material";
const StakeInput = ({ DarkMood }) => {
  return (
    <>
      <div
        className="stake-parent-contain"
        style={{ backgroundColor: DarkMood === true ? "#0F0D11" : "#fff" }}
      >
        <div className="top-child-Stake">
          <span
            className="stake-title"
            style={{ color: DarkMood === true ? "#fff" : "#000" }}
          >
            <img src={triangle} /> Stake
            <span
              style={{
                color: DarkMood === true ? "#fff" : "#000",
                fontSize: "14px",
              }}
              className="ml-3"
            >
              30%
            </span>
            <span
              style={{
                color: DarkMood === true ? "#828282" : "#828282",
                fontSize: "14px",
              }}
              className="ml-1"
            >
              EST.APY
            </span>
          </span>
          <div className="second-child-stake">
            <div
              style={{ border: "1px solid #fff", color: "#ffff" }}
              className="p-1 px-4"
            >
              30
            </div>
            <div
              style={{ border: "1px solid #fff", color: "#ffff" }}
              className="p-1 px-4"
            >
              90
            </div>
            <div
              style={{ border: "1px solid #fff", color: "#ffff" }}
              className="p-1 px-4"
            >
              180
            </div>
            <div
              style={{ border: "1px solid #fff", color: "#ffff" }}
              className="p-1 px-4"
            >
              All
            </div>
          </div>
        </div>
        {/* <hr /> */}
        {/* <span className="hr-line"></span>
        <div className="buttons-container">
          <button>30 DAYS</button>
          <button>90 DAYS</button>
          <button>180 DAYS</button>
          <button>365 DAYS</button>
        </div> */}

        <div className="input-with-labels mt-4">
          <div className="inp-childs">
            <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
              Balance: 2889.0
            </span>
            <div className="stake_inp d-flex justify-content-between align-items-center">
              <div
                className="stake_inp d-flex justify-content-between align-items-center"
                style={{ color: "rgba(0, 132, 255, 1)" }}
              >
                <input
                  type="number"
                  id="balance_inp"
                  style={{
                    backgroundColor: "#282828",
                    border: "none",
                    width: "20%",
                  }}
                  // className="stake_inp"
                  placeholder="256.6"
                />
              </div>

              <div style={{ color: "#3CC0A1" }} className="mr-2">
                Max
              </div>
            </div>

            <button
              className="inp_btns my-2"
              // style={{ color: DarkMood === true ? "#fff" : "#000" }}
            >
              Stake
            </button>
          </div>
          <hr style={{ width: "0.2%", height: "128px" }} />
          <div className="inp-childs ">
            <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
              Staked: 256.50
            </span>
            <div
              className="stake_inp d-flex justify-content-between align-items-center"
              style={{ color: "rgba(0, 132, 255, 1)" }}
            >
              <input
                type="number"
                id="balance_inp"
                style={{
                  backgroundColor: "#282828",
                  border: "none",
                  width: "20%",
                }}
                placeholder="0.00"
              />

              <div style={{ color: "#3CC0A1" }} className="mr-2">
                Max
              </div>
            </div>

            <button
              className="inp_btns my-2"
              // style={{ color: DarkMood === true ? "#fff" : "#000" }}
            >
              Unstake
            </button>
          </div>
          <hr style={{ width: "0.2%", height: "128px" }} />
          <div className="inp-childs ">
            <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
              Rewards Earned: 106.90
            </span>
            <input
              type="number"
              id="balance_inp"
              className="stake_inp"
              placeholder="0.00"
            />
            <button
              className="inp_btns my-2"
              // style={{ color: DarkMood === true ? "#fff" : "#000" }}
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakeInput;
