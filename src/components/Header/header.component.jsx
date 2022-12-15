import { ReactComponent as SideBarIcon } from "../../assets/Icons/SideBarIcon.svg";
import MessageIcon from "../../assets/Icons/MessageIcon.svg";
import WalletIcon from "../../assets/Icons/WalletIcon.svg";
import NoMan from "../../assets/no-main.jpg";
import { ReactComponent as LoginIcon } from "../../assets/Icons/LoginIcon.svg";
import { ReactComponent as CloseSideBarIcon } from "../../assets/Icons/CloseSideBar.svg";
import TwitterIcon from "../../assets/Social_Media_Icons/TwitterIcon.svg";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDisconnect } from "wagmi";
import { useAccount } from "wagmi";
import HomePage from "../HomePage/homePage.component";
import DarkIcon from "../../assets/dark_light/dark.png";
import LightIcon from "../../assets/dark_light/light.png";
import openSidebar from "../../assets/homeicons/openSidebar.png";
import wallet from "../../assets/homeicons/wallet.png";
import download from "../../assets/homeicons/download.png";
import twitter from "../../assets/homeicons/twitter.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";
import message from "../../assets/homeicons/message.png";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = ({ DarkMood, setDarkMood }) => {
  // const { disconnect } = useDisconnect()
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogoutOption, setIsLogoutOption] = useState(false);
  const [user, setUser] = useState("");
  const mobileversion = useMediaQuery("(max-width:900px)");
  const [showOpenState, setshowOpenState] = useState("hide-side-nav");
  const [background, setBackground] = useState("");

  const [showState, setshowState] = useState("");
  const [highlightNav, sethighlightNav] = useState({
    nav1: "",
    nav2: "",
    nav3: "",
  });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  //!LIGHT_DARK MOOD
  const [color, setcolor] = useState("#28262B");
  const [toggle, settoggle] = useState(1);
  //!SIDEBAR
  const [opnMenu, setopnMenu] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) {
      setshowState("show");
    } else if (isLeftSwipe) {
      setshowState("");
    }
    console.log(distance);
    // setshowOpenState("hide-side-nav");
  };

  const location = useLocation();

  const closeOpenSign = () => {
    if (showOpenState === "") {
      setshowOpenState("hide-side-nav");
    } else if (showOpenState === "hide-side-nav") {
      setshowOpenState("");
    }
  };

  useEffect(() => {
    console.log("sessionStorage", sessionStorage.getItem("walletAddress"));
    if (
      sessionStorage.getItem("walletAddress") != null &&
      sessionStorage.getItem("walletAddress") != undefined &&
      sessionStorage.getItem("walletAddress") != ""
    ) {
      console.log("LoggedIn");
      setIsLoggedIn(true);
    }
    if (
      sessionStorage.getItem("user") != null &&
      sessionStorage.getItem("user") != undefined &&
      sessionStorage.getItem("user") != ""
    ) {
      console.log(JSON.parse(sessionStorage.getItem("user")));
      console.log(sessionStorage.getItem("user"));
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, [location]);

  function handleWalletLogout() {
    if (window.location.href.includes("profile")) {
      navigate("/signin");
    }
    sessionStorage.setItem("walletAddress", "");
    sessionStorage.setItem("user", "");
    setUser("");
    setIsLoggedIn(false);
    setIsLogoutOption(false);
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleClickList = () => {
    setIsActive((current) => !current);
  };

  const isOpen = () => {
    setopnMenu(true);
  };

  const closeMenu = () => {
    setopnMenu(false);
  };

  return (
    <>
      {opnMenu ? (
        <>
          <div
            className={"menu"}
            style={{
              backgroundColor: DarkMood === true ? "#000" : "rgb(241 241 241)",
            }}
          >
            <div className="menuContent">
              {isActive && (
                <>
                  <Container
                    maxWidth={"xl"}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      display: mobileversion ? "none" : "block",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0%",
                        left: "69%",
                        backgroundColor: "#999B9E",
                      }}
                      p={5}
                    >
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Box
                          style={{
                            backgroundColor: "#fff",
                            width: "11%",
                            height: "44px",
                          }}
                          display="flex"
                          alignItems={"center"}
                          justifyContent="center"
                        >
                          <img src={download} />
                        </Box>
                        <Typography sx={{ color: "#000", fontSize: "40px" }}>
                          Your account
                        </Typography>
                      </Box>
                      <Box my={4}>
                        <Typography sx={{ color: "#000", fontSize: "16px" }}>
                          Reinventing Cooperation and Coproduction for an
                          Evolving Internet..
                        </Typography>
                      </Box>

                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Box
                          sx={{ backgroundColor: "#000", color: "#fff" }}
                          p={1}
                        >
                          Connect Wallet
                        </Box>
                        <Box sx={{ color: "#000" }} p={1}>
                          Sign in
                          <ChevronRightIcon sx={{ color: "#000" }} />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "40%",
                        left: "69%",
                        backgroundColor: "#fff",
                      }}
                      p={5}
                    >
                      <Box
                        display={"flex"}
                        alignItems={"start"}
                        justifyContent="space-between"
                        flexDirection={"column"}
                      >
                        <Box
                          style={{
                            backgroundColor: "#999B9E",
                            width: "11%",
                            height: "44px",
                          }}
                          display="flex"
                          alignItems={"center"}
                          justifyContent="center"
                        >
                          <img src={message} />
                        </Box>
                        <Typography
                          sx={{ color: "#000", fontSize: "33px" }}
                          mt={4}
                        >
                          Sovereign Community
                        </Typography>
                      </Box>
                      <Box my={1}>
                        <Typography sx={{ color: "#000", fontSize: "16px" }}>
                          Help us keep the community strong. Our community is
                          home for many different people from all walks of life.
                        </Typography>
                      </Box>

                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent="space-between"
                        my={4}
                      >
                        <Box
                          sx={{ border: "1px solid #000", color: "#000" }}
                          p={1}
                          display="flex"
                        >
                          <Box mr={1}>
                            <img src={message} />
                          </Box>
                          Sovereign Chat
                        </Box>
                        <Box sx={{ color: "#000" }} p={1} display="flex">
                          <Box mr={2}>
                            <img src={twitter} />
                          </Box>
                          Twitter
                        </Box>
                      </Box>
                    </Box>
                  </Container>
                </>
              )}
              <Box
                onClick={closeMenu}
                sx={{ position: "absolute", top: "4%", left: "4%" }}
              >
                <CloseIcon
                  sx={{ color: DarkMood === true ? "#fff" : "#000" }}
                />
              </Box>
              <ul
                className="list"
                style={{ color: DarkMood === true ? "#fff" : "#000" }}
              >
                <Link
                  to={"/About"}
                  onClick={closeMenu}
                  style={{ color: DarkMood === true ? "#fff" : "#000" }}
                >
                  <li
                    className={
                      DarkMood === true ? "hoverelement" : "hoverlight"
                    }
                  >
                    About
                  </li>
                </Link>
                <Link
                  to={"/manifesto"}
                  onClick={closeMenu}
                  style={{ color: DarkMood === true ? "#fff" : "#000" }}
                >
                  <li
                    className={
                      DarkMood === true ? "hoverelement" : "hoverlight"
                    }
                  >
                    Manifesto
                  </li>
                </Link>
                <Link
                  to={"/DAO"}
                  onClick={closeMenu}
                  style={{ color: DarkMood === true ? "#fff" : "#000" }}
                >
                  <li
                    className={
                      DarkMood === true ? "hoverelement" : "hoverlight"
                    }
                  >
                    DAO
                  </li>
                </Link>
                {/* <Link to={"/DAO"} onClick={closeMenu}> */}

                <li
                  className={DarkMood === true ? "hoverelement" : "hoverlight"}
                >
                  FAQ
                </li>
                {/* </Link> */}
                <li
                  className={
                    isActive && DarkMood === true ? "mintdark" : "hoverlight"
                  }
                  onClick={handleClickList}
                >
                  Mint
                </li>
                <li
                  className={DarkMood === true ? "hoverelement" : "hoverlight"}
                >
                  Release 1
                </li>
                <li
                  className={DarkMood === true ? "hoverelement" : "hoverlight"}
                >
                  Release 2
                </li>
                <li
                  className={DarkMood === true ? "hoverelement" : "hoverlight"}
                >
                  Swap
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <Box
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            // // className={`main-container ${background}`}
            // className={`main-container ${
            //   window.location.pathname === "/"
            //     ? background
            //     : DarkMood === true
            //     ? "dark_mood"
            //     : DarkMood === false
            //     ? "light_mood"
            //     : ""
            // }`}
            className={DarkMood === true ? "dark_mood" : "light_mood"}
          >
            <AppBar
              position="fixed"
              sx={{ backgroundColor: DarkMood === true ? "#000" : "#fff" }}
            >
              <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    // className="menu"
                    onClick={isOpen}
                    // style={{ transition: "all 0.3s ease-in-out" }}
                  >
                    <img
                      src={openSidebar}
                      style={{
                        filter:
                          DarkMood === true
                            ? ""
                            : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
                      }}
                    />
                  </IconButton>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: DarkMood === true ? "#fff" : "#000",
                      fontWeight: 700,
                    }}
                  >
                    SOVEREIGN
                  </Typography>
                </Box>
                <Box display="flex" alignItems={"center"}>
                  <div
                    style={{
                      border: "1px solid #28262B",
                      display: "flex",
                      width: "50px",
                    }}
                  >
                    <div
                      onClick={() => {
                        settoggle(1);

                        setDarkMood(true);
                      }}
                      style={{
                        backgroundColor: toggle == 1 ? "#28262B" : "",
                        padding: "9%",
                        filter:
                          DarkMood === true
                            ? ""
                            : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
                        // color: DarkMood === true ? "#fff" : "#000",
                      }}
                    >
                      <img src={DarkIcon} alt="" srcset="" />
                    </div>
                    <div
                      onClick={() => {
                        settoggle(2);

                        setDarkMood(false);
                      }}
                      style={{
                        backgroundColor: toggle == 2 ? "#28262B" : "",
                        padding: "9%",
                      }}
                    >
                      <img src={LightIcon} alt="" srcset="" />
                    </div>
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    {isLoggedIn == true ? (
                      <div className="button1" style={{ position: "relative" }}>
                        <Link
                          className="svgdimensions"
                          onMouseEnter={() =>
                            setIsLogoutOption(!isLogoutOption)
                          }
                        >
                          {user != "" ? (
                            <img
                              className="profileImage"
                              width="30"
                              height="30"
                              src={`${global.backendUrl}/nodeassets/${user.user_image}`}
                              alt=""
                            />
                          ) : (
                            <img width="24" height="24" src={NoMan} alt="" />
                          )}
                        </Link>
                        <div
                          className={`flex-column text-center ${
                            isLogoutOption ? "d-flex" : "d-none"
                          }`}
                          style={{
                            borderRadius: "6px",
                            position: "absolute",
                            top: "7px",
                            width: 100,
                            marginTop: 45,
                          }}
                        >
                          <div
                            className="item-dropdown-profile"
                            onMouseLeave={() =>
                              setIsLogoutOption(!isLogoutOption)
                            }
                          >
                            <div
                              className="dropdown-profile d-flex flex-column"
                              style={{
                                padding: "0px 12px",
                                background: "#1e1e1e",
                                borderRadius: "10px",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                className="row d-flex walletDropdownStyleProfle"
                                style={{
                                  padding: "5px 0px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  navigate("/myprofile");
                                }}
                              >
                                <div className="col-12">
                                  <span
                                    style={{
                                      borderRadius: "6px",
                                      color: "#fff",
                                    }}
                                  >
                                    My Profile
                                  </span>
                                </div>
                              </div>
                              <hr style={{ margin: "5px 0px", height: 2 }} />
                              <div
                                className="row d-flex walletDropdownStyleProfile"
                                style={{ padding: "5px 0px" }}
                                onClick={handleWalletLogout}
                              >
                                <div className="col-12">
                                  <span
                                    style={{
                                      borderRadius: "6px",
                                      color: "#fff",
                                      cursor: "pointer",
                                    }}
                                  >
                                    Logout
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <Link to="/signin" className="svgdimensions">
                          <img
                            width="24px"
                            height="24px"
                            style={{
                              filter:
                                DarkMood === true
                                  ? ""
                                  : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
                            }}
                            src={wallet}
                            alt=""
                          />
                        </Link>
                      </div>
                    )}
                    <div hidden className="button2">
                      <Link to="/signin">
                        <LoginIcon className="svgdimensions" />
                      </Link>
                    </div>
                  </div>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <Outlet />
        </>
      )}
    </>
  );
};

export default Header;
