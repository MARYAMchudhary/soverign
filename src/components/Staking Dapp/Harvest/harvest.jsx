import React from "react";
import "./harvest.scss";
import triangle from "../../../assets/homeicons/triangle.png";
const Harvest = ({ DarkMood }) => {
  return (
    <>
      <div
        className="main-harvest-parent"
        style={{ backgroundColor: DarkMood === true ? "#0F0D11" : "#fff" }}
       >
        <div className="top-child-Stake">
          <span
            className="stake-title"
            style={{ color: DarkMood === true ? "#fff" : "#000" }}
          >
            <img src={triangle} /> Harvest
          </span>
          <div className="second-child-stake">
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <span className="hr-line"></span> */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <td>POOL NAME</td>
                <td>UNLOCK DATE</td>
                <td>AMOUNT STACKED</td>
                <td>REWARDS TO HARVEST</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Rewards Pool
                </td>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  18.04.23 12:50 UTC
                </td>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  1,960
                </td>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  1,961.672
                </td>
                <td>
                  <button
                    className="cell-btn"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Harvest
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Rewards Pool
                </td>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  18.04.23 12:50 UTC
                </td>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  1,960
                </td>
                <td style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  1,96
                </td>
                <td>
                  <button
                    className="cell-btn"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Harvest
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Harvest;
