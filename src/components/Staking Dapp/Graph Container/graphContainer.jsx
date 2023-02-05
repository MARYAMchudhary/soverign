import React, { useState } from "react";
import "./graphContainer.scss";
import { BarChart } from "../Bar Chart/barChart";
import { UserData } from "./data";

const GraphContainer = ({ DarkMood }) => {
  const [userData, setuserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        borderRadius: 1000,
        backgroundColor: "#333333",
        barPercentage: 0.5,
        maxBarThickness: 10,
        borderSkipped: false,
      },
    ],
  });
  return (
    <>
      <div className="graph-container py-7">
        <div
          className="graph-childs"
          style={{ backgroundColor: DarkMood === true ? "#0F0D11" : "#fff" }}
        >
          <div className="top-text">
            <div style={{ borderLeft: "2px solid #3BBCA4" }}>
              <div className="ml-3">
                <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  $0,000,000.00
                </h3>
                <span>Total Value Locked</span>
              </div>
            </div>
          </div>
          <div className="chart-cont">
            <BarChart chartData={userData} />
          </div>
        </div>
        <div
          className="graph-childs"
          style={{ backgroundColor: DarkMood === true ? "#0F0D11" : "#fff" }}
        >
          <div className="top-text">
            <div style={{ borderLeft: "2px solid #3BBCA4" }}>
              <div className="ml-3">
                <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  000%
                </h3>
                <span>Maximum Est.APY</span>
              </div>
            </div>
          </div>
          <div className="chart-cont">
            <BarChart chartData={userData} />
          </div>
        </div>
        <div
          className="graph-childs"
          style={{ backgroundColor: DarkMood === true ? "#0F0D11" : "#fff" }}
        >
          <div className="top-text">
            <div style={{ borderLeft: "2px solid #E27625" }}>
              <div className="ml-3">
                <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  0000
                </h3>
                <span>Number of Stakers</span>
              </div>
            </div>
          </div>
          <div className="chart-cont">
            <BarChart chartData={userData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphContainer;
