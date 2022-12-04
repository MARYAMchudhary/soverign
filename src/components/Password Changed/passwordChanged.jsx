import React from 'react';
import './passwordChanged.scss';
import { Link } from "react-router-dom";

const PasswordChanged = () => {
  return (
    <>
      <div className='welcome-div-container'>
        <div className='welcome-div-content'>
          <img width={80} alt='Unavailable' src={require("../../assets/Icons/Tick Sign.png")} />
          <div className='second-content'>
            <h3>Password Changed</h3>
            <Link to="/chatcommunity">
              <button className="second-content-button" >Take Me To Community Chat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordChanged;
