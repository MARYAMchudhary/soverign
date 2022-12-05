import "./otherusersprofile.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as NextArrowIcon } from "../../assets/Icons/NextArrowIcon.svg";
import { ReactComponent as MessageIconWhite } from "../../assets/Icons/MessageIconWhite.svg";

import { useState } from "react";
import MoneyIcon from "../../assets/Icons/MoneyIcon.svg";
import CodeIcon from "../../assets/Icons/CodeIcon.svg";
import MemoryIcon from "../../assets/Icons/MemoryIcon.svg";
import WebDevIcon from "../../assets/Icons/WebDevIcon.svg";
import EducationIcon from "../../assets/Icons/EducationIcon.svg";
import UIUXIcon from "../../assets/Icons/UIUXIcon.svg";
import ArtIcon from "../../assets/Icons/ArtIcon.svg";
import LawIcon from "../../assets/Icons/LawIcon.svg";

const OtherUserProfile = ({ DarkMood }  ) => {
  //MULTIPLE INTEREST SELECTION STARTS
  const [selectItem, setSelectItem] = useState([
    { id: "1", name: "Investing", selected: false, svgFile: MoneyIcon },
    { id: "2", name: "Front-end", selected: false, svgFile: CodeIcon },
    { id: "3", name: "Literature", selected: false, svgFile: MemoryIcon },
    { id: "4", name: "Back-end", selected: false, svgFile: WebDevIcon },
    { id: "5", name: "Teaching", selected: false, svgFile: EducationIcon },
    { id: "6", name: "Ui/Ux", selected: false, svgFile: UIUXIcon },
    { id: "7", name: "Art", selected: false, svgFile: ArtIcon },
    { id: "8", name: "Law", selected: false, svgFile: LawIcon },
  ]);

  const toggleSelectedItem = (e) => {
    if (!e.target.classList.contains("selected")) {
      const selectedCount = selectItem.filter((item) => item.selected).length;
      if (selectedCount === 8) {
        return;
      }
    }

    setSelectItem(
      selectItem.map((item) =>
        item.id === e.target.getAttribute("data-id")
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };
  return (
    <div className="other_users_profile_main_container">
      <div style={{ overflow: "auto" }}>
        <div className="other_users_profile_container">
          <div className="transparent_head"></div>
          <div className="d-flex user_profile_info">
            <div className="user_profile_img_container">
              <img
                src={require("../../assets/Hexagons/UserProfile.png")}
                alt=""
              />
            </div>
            <div className="user_profile_followers_container">
              <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                lazymeercat616
              </h3>
              <div className="d-flex">
                <div className="me-3 me-sm-5">
                  <button>Follow</button>
                </div>
                <div className="me-4 me-sm-5">
                  <p
                    className="m-0"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    1295
                  </p>
                  <p
                    className="m-0"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Followers
                  </p>
                </div>
                <div className=" me-sm-5">
                  <p
                    className="m-0"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    857
                  </p>
                  <p
                    className="m-0"
                    style={{ color: DarkMood === true ? "#fff" : "#000" }}
                  >
                    Following
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #282828",
              width: "91%",
              margin: "0 auto",
            }}
          ></div>

          <div className="user_interests_container">
            <div className="d-flex interests_name_block">
              <img
                src={require("../../assets/Icons/WhiteBlock.png")}
                className="ms-4 me-3"
                alt=""
                style={{
                  cursor: "pointer",
                  filter:
                    DarkMood === false
                      ? "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)"
                      : "",
                  // color: DarkMood === true ? "#fff" : "#000",
                }}
              />
              <h4
                className="m-0"
                style={{ color: DarkMood === true ? "#fff" : "#000" }}
              >
                Interests
              </h4>
            </div>
            <div className="user_interests">
              <div className="user_interests_items">
                {selectItem.map((item) => {
                  return (
                    <div
                      onClick={toggleSelectedItem}
                      data-id={item.id}
                      className={`${item.selected ? "selected" : ""} mb-2 mx-2`}
                    >
                      <img
                        src={item.svgFile}
                        alt=""
                        onClick={toggleSelectedItem}
                        data-id={item.id}
                      />
                      <h6 onClick={toggleSelectedItem} data-id={item.id}>
                        {item.name}
                      </h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #282828",
              width: "91%",
              margin: "0 auto",
              color: "white",
              height: "70px",
            }}
          ></div>
        </div>
        {/* <div className="play-community mt-3 justify-content-center">
          <div className=" me-5 me-sm-0">
            <Link to="/Connectwallet" className="position-relative d-flex">
              <div className="play-button-3" style={{ width: "200px" }}>
                <span className="me-2">Community</span>
                <NextArrowIcon className="next-icon me-3" fill="#ffffff" />
              </div>
              <div className="community1">
                <MessageIconWhite className="b-icon" />
              </div>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OtherUserProfile;
