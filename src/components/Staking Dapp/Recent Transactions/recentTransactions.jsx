import React from "react";
import "./recentTransactions.scss";
import downSign from "../../../assets/Icons/down-sign.svg";
import searchIcon from "../../../assets/Icons/search-icon.svg";
import LineBar from "../../../assets/Icons/Line 12.svg";
import upDownArrow from "../../../assets/Icons/up-and-down-arrows.svg";
import triangle from "../../../assets/homeicons/triangle.png";
import cross_icon from "../../../assets/homeicons/cross_icon.png";
const RecentTransactions = ({ DarkMood }) => {
  return (
    <>
      <div
        className="transactions-parent"
        style={{ backgroundColor: "rgba(24, 21, 27, 1)" }}
      >
        <div className="top-child-Stake12 mt-19">
          <span
            className="stake-title"
            style={{ color: DarkMood === true ? "#fff" : "#000" }}
          >
            <img src={triangle} />
            &nbsp; Recent transactions
          </span>
          <div className="sec-child1">
            <div className="inp-and-search-box py-4">
              <div
                className="drop-container px-3"
                style={{ borderRight: "1px solid grey" }}
              >
                <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Last 7 days
                </span>
                <img src={downSign} alt="Unavailable" />
              </div>
              <div>
                <img src={searchIcon} alt="Unavailable" />
                &nbsp;
                <input
                  type="text"
                  placeholder="Example : 0x321j3n4hdadad2riurh..."
                  className=""
                />
              </div>
              <div className="mr-3">
                <img src={cross_icon} />
              </div>
            </div>
            <div className="inp-and-search-box2">
              <div
                className="drop-container px-3 d-flex justify-content-between"
                // style={{ borderRight: "1px solid grey" }}
              >
                <span style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                  Last 7 Days
                </span>
                <img src={downSign} alt="Unavailable" />
              </div>
            </div>
          </div>
        </div>
        <div className="table-container mt-5">
          <table>
            <thead>
              <tr>
                <td>
                  #
                  <img src={upDownArrow} alt="Unavailable" />
                </td>
                <td>
                  TXN HASH
                  <img src={upDownArrow} alt="Unavailable" />
                </td>
                <td>
                  METHOD
                  <img src={upDownArrow} alt="Unavailable" />
                </td>
                <td>
                  AGE
                  <img src={upDownArrow} alt="Unavailable" />
                </td>
                <td>
                  FROM
                  <img src={upDownArrow} alt="Unavailable" />
                </td>
                <td>
                  QUANTITY
                  <img src={upDownArrow} alt="Unavailable" />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                <td>1</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>Deposit</td>
                <td>0 mins ago</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>LFG 500000</td>
              </tr>
              <tr style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                <td>2</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>Deposit</td>
                <td>0 mins ago</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>LFG 500000</td>
              </tr>
              <tr style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                <td>3</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>Deposit</td>
                <td>0 mins ago</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>LFG 500000</td>
              </tr>
              <tr style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                <td>4</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>Deposit</td>
                <td>0 mins ago</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>LFG 500000</td>
              </tr>
              <tr style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                <td>5</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>Deposit</td>
                <td>0 mins ago</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>LFG 500000</td>
              </tr>
              <tr style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                <td>6</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>Deposit</td>
                <td>0 mins ago</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>LFG 500000</td>
              </tr>
              <tr style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                <td>7</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>Deposit</td>
                <td>0 mins ago</td>
                <td>0x321j3n4hdadad2riurh...</td>
                <td>LFG 500000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentTransactions;
