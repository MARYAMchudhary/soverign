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
import DarkIcon from "../../assets/dark_light/dark.png";
import LightIcon from "../../assets/dark_light/light.png";
const Header = ({ DarkMood, setDarkMood }) => {
  // const { disconnect } = useDisconnect()
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogoutOption, setIsLogoutOption] = useState(false);
  const [user, setUser] = useState("");

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
    if (window.location.pathname === "/") {
      setBackground("homepage-bg");
    }
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

  // const BACKGROUNDS = {
  //   homepage: "homepage-bg",
  //   aboutpage: "aboutpage-bg",
  //   otherpages: "otherpages-bg",
  // };
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
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      // className={`main-container ${background}`}
      className={`main-container ${
        window.location.pathname === "/"
          ? background
          : DarkMood === true
          ? "dark_mood"
          : DarkMood === false
          ? "light_mood"
          : ""
      }`}
      style={{ backgroundColor: DarkMood === true ? "#000" : "#fff" }}
      // data-bs-toggle="offcanvas"
      // data-bs-target="#offcanvasExample"
      // aria-controls="offcanvasExample"
    >
      {/* Bootstrap Off Canvas */}

      <div
        style={{
          backgroundColor: DarkMood === true ? "#000" : "",
          width: "250px",
        }}
        className={`offcanvas offcanvas-start ${showState}`}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <CloseSideBarIcon
            onClick={() => {
              setshowState("");
            }}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            className="close-sign"
            style={{
              cursor: "pointer",
              filter:
                DarkMood === true
                  ? ""
                  : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
              // color: DarkMood === true ? "#fff" : "#000",
            }}
          />
        </div>
        <div class="offcanvas-body">
          <div className="menu-items">
            <span
              data-bs-dismiss="offcanvas"
              onClick={() => {
                sethighlightNav({ nav1: "highlighted" });
                setshowOpenState("hide-side-nav");
              }}
              style={{ color: DarkMood === false ? "#000" : "" }}
              className={`${highlightNav.nav1}`}
            >
              <Link style={{ color: "inherit" }} to="/About">
                ABOUT
              </Link>
            </span>
            <span
              data-bs-dismiss="offcanvas"
              onClick={() => {
                sethighlightNav({ nav2: "highlighted" });
                setshowOpenState("hide-side-nav");
              }}
              style={{ color: DarkMood === false ? "#000" : "" }}
              className={`${highlightNav.nav2}`}
            >
              <a
                href="https://manifesto.sovereigndao.com"
                target="_blank"
                style={{ color: "inherit" }}
              >
                MANIFESTO
              </a>
            </span>
            <Link to="/DAO" style={{ color: "inherit" }}>
              <span
                data-bs-dismiss="offcanvas"
                onClick={() => {
                  sethighlightNav({ nav3: "highlighted" });
                  setshowOpenState("hide-side-nav");
                }}
                style={{ color: DarkMood === false ? "#000" : "" }}
                className={`${highlightNav.nav3}`}
              >
                DAO
              </span>
            </Link>
          </div>
          <div
            style={{ marginTop: "15%" }}
            className="d-flex d-sm-none justify-content-center"
          >
            {isLoggedIn == true ? (
              <div className="button1 ">
                <Link to="/">
                  <img width="24" height="24" src={NoMan} alt="" />
                </Link>
              </div>
            ) : (
              <div className="button1 ">
                <Link to="/signin">
                  <img width="24" height="24" src={WalletIcon} alt="" />
                </Link>
              </div>
            )}
            <div hidden className="button2 ms-2">
              <Link to="/signin">
                <LoginIcon />
              </Link>
            </div>
          </div>
          <div className="social-icons-for-hamburger">
            <Link to="/Connectwallet">
              <img
                src={MessageIcon}
                alt=""
                className="hambrger-social"
                style={{
                  cursor: "pointer",
                  filter:
                    DarkMood === true
                      ? ""
                      : "saturate(519%) contrast(904%) brightness(374%) invert(0%) sepia(50%) hue-rotate(57deg)",
                  // color: DarkMood === true ? "#fff" : "#000",
                }}
              />
            </Link>
            <a href="https://twitter.com/SVRNDAO" target="_blank">
              <img
                src={TwitterIcon}
                alt=""
                className="hambrger-social"
                style={{
                  cursor: "pointer",
                  filter:
                    DarkMood === true
                      ? ""
                      : "saturate(519%) contrast(904%) brightness(374%) invert(0%) sepia(50%) hue-rotate(57deg)",
                  // color: DarkMood === true ? "#fff" : "#000",
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="sidenav">
        <div className="sideBarIcon">
          <SideBarIcon
            onClick={closeOpenSign}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            style={{
              cursor: "pointer",
              filter:
                DarkMood === true
                  ? ""
                  : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
              // color: DarkMood === true ? "#fff" : "#000",
            }}
          />
        </div>
        <div className="sidenav-social-icons d-none d-sm-flex">
          <Link to="/Connectwallet">
            <img
              src={MessageIcon}
              className="navsvg"
              alt="Icon"
              style={{
                cursor: "pointer",
                filter:
                  DarkMood === true
                    ? ""
                    : "saturate(519%) contrast(904%) brightness(374%) invert(0%) sepia(50%) hue-rotate(57deg)",
                // color: DarkMood === true ? "#fff" : "#000",
              }}
            />
          </Link>
          <a href="https://twitter.com/SVRNDAO" target="_blank">
            <img
              src={TwitterIcon}
              className="navsvg"
              alt="Icon"
              style={{
                cursor: "pointer",
                filter:
                  DarkMood === true
                    ? ""
                    : "saturate(519%) contrast(904%) brightness(374%) invert(0%) sepia(50%) hue-rotate(57deg)",
                // color: DarkMood === true ? "#fff" : "#000",
              }}
            />
          </a>
        </div>
      </div>
      <div className="right-side-container">
        <div
          className="top-nav justify-content-start justify-content-sm-between"
          style={{
            boxShadow: DarkMood === false ? "0px 1px 11px #bbb7b747" : "",
          }}
        >
          <div className="mobile-sideBarIcon d-sm-none">
            <SideBarIcon
              onClick={closeOpenSign}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              style={{
                cursor: "pointer",
                filter:
                  DarkMood === true
                    ? ""
                    : "saturate(519%) contrast(904%) brightness(374%) invert(118%) sepia(50%) hue-rotate(57deg)",
              }}
            />
          </div>
          <div className="site-name-container ms-sm-5">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1
                className="site-name"
                style={{ color: DarkMood === false ? "#000" : "" }}
              >
                {" "}
                SOVEREIGN
              </h1>
              {/* <img
                
                src={require("../../assets/Logo/SOVEREIGN.png")}
                alt=""
              /> */}
            </Link>
          </div>
          <div className="top-wallet-buttons d-none d-sm-flex">
            <div
              style={{
                border: "1px solid #28262B",
                display: "flex",
                width: "23%",
              }}
            >
              <div
                onClick={() => {
                  settoggle(1);
                  if (window.location.pathname === "/") {
                    setDarkMood(true);
                  } else {
                    setDarkMood(true);
                  }
                  // setDarkMood(true);
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
                  if (window.location.pathname === "/") {
                    setDarkMood(true);
                  } else {
                    setDarkMood(false);
                  }
                }}
                style={{
                  backgroundColor: toggle == 2 ? "#28262B" : "",
                  padding: "9%",
                }}
              >
                <img src={LightIcon} alt="" srcset="" />
              </div>
            </div>
            <div>
              {isLoggedIn == true ? (
                <div className="button1" style={{ position: "relative" }}>
                  <Link
                    className="svgdimensions"
                    onMouseEnter={() => setIsLogoutOption(!isLogoutOption)}
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
                      onMouseLeave={() => setIsLogoutOption(!isLogoutOption)}
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
                          style={{ padding: "5px 0px", cursor: "pointer" }}
                          onClick={() => {
                            navigate("/myprofile");
                          }}
                        >
                          <div className="col-12">
                            <span
                              style={{ borderRadius: "6px", color: "#fff" }}
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
                <div className="button1">
                  <Link to="/signin" className="svgdimensions">
                    <img width="24" height="24" src={WalletIcon} alt="" />
                  </Link>
                </div>
              )}
              <div hidden className="button2">
                <Link to="/signin">
                  <LoginIcon className="svgdimensions" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
