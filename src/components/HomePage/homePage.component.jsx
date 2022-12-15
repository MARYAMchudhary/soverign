import React, { useState, useEffect } from "react";
import "./homePage.css";
import FedUp from "../../assets/HomePageAudio/Site Audio.mp3";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Container,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { ReactComponent as PlayIcon } from "../../assets/Icons/PlayIcon.svg";
import { ReactComponent as NextArrowIcon } from "../../assets/Icons/NextArrowIcon.svg";
import { ReactComponent as MessageIconWhite } from "../../assets/Icons/MessageIconWhite.svg";
import message from "../../assets/homeicons/message.png";
import whitemessage from "../../assets/homeicons/whitemessage.png";
// import { ReactComponent as PauseIcon } from "../../assets/Icons/PauseIcon.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import main from "../../assets/homeicons/main.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import left from "../../assets/homeicons/left.png";
import center from "../../assets/homeicons/center.png";
import darkcenter from "../../assets/homeicons/darkCircle.png";

import right from "../../assets/homeicons/right.png";
import styled, { keyframes } from "styled-components";
import FaqList from "./FaqList";

const Boxx = styled.div`
  display: flex;
  cursor: pointer;
  left: 8rem;
  top: 3rem;
  z-index: 10;
  color: #ffff;
  & > *:nth-child(1) {
    animation-delay: 0.1s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.5s;
  }
`;
const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100% {
    transform: scaleY(1);
  } `;
const Line = styled.span`
  background: #000;
  border: ${(props) => (props.DarkMood ? "2px solid #fff" : "2px solid #000")};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const HomePage = ({ DarkMood }) => {
  const [showPauseIcon, setShowPauseIcon] = useState(false);
  const [click, setclick] = useState(true);
  const tabversion = useMediaQuery("(max-width:1300px )");
  const midversion = useMediaQuery("(max-width:1100px )");
  const eightversion = useMediaQuery("(max-width:800px )");
  const mobileversion = useMediaQuery("(max-width:600px )");
  const shortversion = useMediaQuery("(max-width:500px)");
  const handleClick = () => {
    setclick(!click);
  };

  return (
    <>
      <Box
        className={DarkMood === true ? "dark_mood mt-n3" : "light_mood mt-n3"}
      >
        <Box p={6} sx={{ backgroundColor: "#000" }}>
          <img
            src={main}
            style={{ width: "100%", height: "100%", backgroundColor: "#000" }}
          />
        </Box>

        {/* //!LOWER BAR */}
        <Box
          sx={{
            borderTop:
              DarkMood === true ? "  1px solid #fff" : "1px solid #000",
            borderBottom:
              DarkMood === true ? " 1px solid #fff" : "1px solid #000",
          }}
          display="flex"
          justifyContent={"space-around"}
          alignItems="center"
          p={2}
        >
          {/* <Box > */}
          <Box display={"flex"} alignItems="center">
            <IconButton
              sx={{
                border:
                  DarkMood === true ? "  1px solid #fff" : "1px solid #000",
                borderRadius: "25px",
                // padding: "1%",
              }}
              onClick={handleClick}
            >
              {click === false ? (
                <PlayArrowIcon
                  sx={{ color: DarkMood === true ? "#fff" : "#000" }}
                />
              ) : (
                <PauseIcon
                  sx={{ color: DarkMood === true ? "#fff" : "#000" }}
                />
              )}
            </IconButton>
            <Typography
              sx={{
                color: DarkMood === true ? "#fff" : "#000",
                fontSize: "16px",
                marginLeft: "11px",
                width: "100px",
              }}
            >
              {click === false ? "Play vedio" : "Stop vedio"}
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{
                border:
                  DarkMood === true ? "  1px solid #fff" : "1px solid #000",
                borderRadius: "25px",
                // padding: "1%",
              }}
            >
              <KeyboardArrowDownIcon
                sx={{ color: DarkMood === true ? "#fff" : "#000" }}
              />
            </IconButton>
          </Box>
          <Boxx onClick={() => handleClick()}>
            <Typography
              sx={{
                color: DarkMood === true ? "#fff" : "#000",
                fontSize: "16px",
                marginRight: "11px",
                width: "100px",
              }}
            >
              {click === false ? "Sound off" : "Sound on"}
            </Typography>
            <Line click={click} DarkMood={DarkMood} />
            <Line click={click} DarkMood={DarkMood} />
            <Line click={click} DarkMood={DarkMood} />
            <Line click={click} DarkMood={DarkMood} />
            <Line click={click} DarkMood={DarkMood} />
          </Boxx>
          {/* </Box> */}
        </Box>
        {/* //!Image CIRCLE */}
        <Box
          display="flex"
          justifyContent={
            mobileversion || tabversion ? "center" : "space-between"
          }
          // sx={{ borderBottom: "0.5px solid #fff" }}
        >
          <img
            src={right}
            alt=""
            srcset=""
            style={{
              width: "24%",
              display: mobileversion || tabversion ? "none" : "block",
              filter:
                DarkMood === true
                  ? ""
                  : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
            }}
          />
          <Box
            sx={{
              backgroundImage:
                DarkMood === true ? `url(${center})` : `url(${darkcenter})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",

              padding:
                mobileversion || shortversion
                  ? "20.4%"
                  : tabversion
                  ? "17.1%"
                  : midversion
                  ? "14.6%"
                  : eightversion
                  ? "15.6%"
                  : "11.6%",
            }}
            display={mobileversion ? "flex" : "block"}
            justifyContent={mobileversion ? "center" : ""}
            // p={3}
          >
            <Box
            // sx={{
            //   position: "absolute",
            //   top: mobileversion ? "79%" : "173%",
            //   left: mobileversion ? "23%" : "27.3%",
            // }}
            >
              <Box
                display={"flex"}
                justifyContent="center"
                flexDirection={"column"}
                textAlign="center"
              >
                <Typography
                  sx={{
                    fontSize: mobileversion ? "16px" : "19px",
                    color: DarkMood === true ? "#fff" : "#000",
                  }}
                >
                  Sovereign is designed to be a force of good
                </Typography>
                <Box my={5}>
                  <Typography
                    sx={{
                      fontSize: mobileversion ? "32px" : "44px",
                      color: DarkMood === true ? "#fff" : "#000",
                    }}
                  >
                    Sovereign is More than a digital currency
                  </Typography>
                </Box>
                <Box mt={mobileversion ? 3 : 4}>
                  <Button
                    variant="contained"
                    startIcon={
                      <img src={DarkMood === true ? message : whitemessage} />
                    }
                    size="medium"
                    sx={{
                      backgroundColor: DarkMood === true ? "#fff" : "#000",
                      color: DarkMood === true ? "#000" : "#fff",
                      padding: "3%",
                    }}
                  >
                    Sovereign community
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <img
            src={left}
            alt=""
            srcset=""
            style={{
              width: "24%",
              display: mobileversion || tabversion ? "none" : "block",

              filter:
                DarkMood === true
                  ? ""
                  : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            borderTop: DarkMood === true ? "1px solid #fff" : "1px solid #000",
          }}
          // my={4}
        ></Box>
        <FaqList DarkMood={DarkMood} />
      </Box>
    </>
  );
};

export default HomePage;
