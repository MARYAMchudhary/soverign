import React, { useState, useEffect } from "react";
import "./homePage.css";
import FedUp from "../../assets/HomePageAudio/Site Audio.mp3";

import { ReactComponent as PlayIcon } from "../../assets/Icons/PlayIcon.svg";
import { ReactComponent as NextArrowIcon } from "../../assets/Icons/NextArrowIcon.svg";
import { ReactComponent as MessageIconWhite } from "../../assets/Icons/MessageIconWhite.svg";

import { ReactComponent as PauseIcon } from "../../assets/Icons/PauseIcon.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const HomePage = () => {
  const [showPauseIcon, setShowPauseIcon] = useState(false);
  const [getAudio, setGetAudio] = useState({ siteAudio: new Audio(FedUp) });
  // const playpause = () => {
  //   if (showPauseIcon === false) {
  //     getAudio.siteAudio.play();
  //     setShowPauseIcon(true);
  //   } else if (showPauseIcon === true) {
  //     setGetAudio({ ...getAudio });
  //     getAudio.siteAudio.pause();
  //     setShowPauseIcon(false);
  //   }
  // };

  useEffect(() => {
    // playpause();
    // setShowPauseIcon(true);
  }, []);

  return (
    <>
      <div className="audio-buttons-container">
        <div className="play-community me-1 me-sm-5">
          {/* <div className="play-button-1">
            {showPauseIcon === false ? (
              <PlayIcon className="audio-buttons" onClick={playpause} />
            ) : (
              <PauseIcon onClick={playpause} />
            )}
          </div> */}

          <div className=" me-5 me-sm-0">
            <Link to="/Connectwallet" className="position-relative d-flex">
              <div className="play-button-3">
                <span className="me-2">SIGN UP</span>
                <NextArrowIcon className="next-icon me-3" fill="#ffffff" />
              </div>
              <div className="community1">
                <MessageIconWhite className="b-icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
