import "./about.styles.scss";
import Hexagon1 from "../../assets/Hexagons/Polygon 1.svg";
import Hexagon2 from "../../assets/Hexagons/Polygon 2.svg";
import Hexagon3 from "../../assets/Hexagons/Polygon 3.svg";
import Hexagon4 from "../../assets/Hexagons/Polygon 4.svg";
import Hexagon5 from "../../assets/Hexagons/Polygon5.svg";
import twitterwhite from "../../assets/Social_Media_Icons/TwitterIconWhite.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const About = ({ DarkMood }) => {
  // const [ widthDescription, setWidthDescription ] = useState(700);
  // useEffect(() => {

  //   setTimeout(() => {
  //     let box = document.querySelector('#about-page-end');
  //     let width = box.offsetWidth;
  //     console.log(width)
  //     console.log(width-(width*0.3))
  //     setWidthDescription(width-(width*0.7))
  //     document.querySelector("#description").style.width = width;
  //   }, 2000);
  // }, []);
  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <div className="about_page_nested_container">
          <div className="about-page-heading mt-5">
            <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
              ABOUT US
            </h3>
          </div>
          {/* style={{width: widthDescription}} */}
          <div id="description" className="about-page-description">
            <p style={{ color: DarkMood === false ? "#000" : "" }}>
              Sovereign is designed to be a force of good in the world, and,
              during its early days, it will be a network state of creators,
              developers, entrepreneurs, and thinkers who pool their skills,
              knowledge, imagination, and talent to impact the shape of our
              internet - the medium that connects us all. By reimagining how
              human brains cooperate and coproduce in the midst of a quickly
              evolving digital landscape, we hope to kickstart systems and
              efforts whose ramifications people can feel.
            </p>
            <p style={{ color: DarkMood === false ? "#000" : "" }}>
              More than a digital currency, Sovereign will serve as an evolving
              social platform to connect individuals and fund projects with the
              aim of improving the status quo. With an emphasis on
              decentralization, fair governance, and education, the Sovereign
              ecosystem will equip us with the capacity to fix the one thing
              we’re all aware needs improvement: the socioeconomic rules we all
              live by.
            </p>
            <p style={{ color: DarkMood === false ? "#000" : "" }}>
              It’s time to experience revolution. We’re just getting started.
            </p>
          </div>
          <div id="about-page-end" className="about-page-end ">
            <div className="about-page-end-heading mt-3">
              <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
                MEET THE CREW
              </h3>
            </div>
            <div className="hexagon-container mt-4">
              <div className="hexagon">
                <div className="position-relative">
                  <img className="hexa" src={Hexagon1} alt="" />
                  <a href="https://twitter.com/nerosvrn" target="_blank">
                    <img
                      src={twitterwhite}
                      alt=""
                      className="position-absolute twitter_icon_about_page"
                      style={{
                        cursor: "pointer",
                        filter:
                          DarkMood === true
                            ? ""
                            : "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)",
                        // color: DarkMood === true ? "#fff" : "#000",
                      }}
                    />
                  </a>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center mt-3 hexagon_body_container">
                  <span
                    className="hexagon_text_head"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    NERO
                  </span>
                  <span
                    className="hexagon_text_body"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    TECH LEAD
                  </span>
                </div>
              </div>
              <div className="hexagon">
                <div className="position-relative">
                  <img className="hexa" src={Hexagon2} alt="" />
                  <a href="https://twitter.com/T0P_LAD" target="_blank">
                    <img
                      src={twitterwhite}
                      alt=""
                      className="position-absolute twitter_icon_about_page"
                      style={{
                        cursor: "pointer",
                        filter:
                          DarkMood === true
                            ? ""
                            : "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)",
                        // color: DarkMood === true ? "#fff" : "#000",
                      }}
                    />
                  </a>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center mt-3 hexagon_body_container">
                  <span
                    className="hexagon_text_head"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    TOPLAD
                  </span>
                  <span
                    className="hexagon_text_body"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    ARCHITECT
                  </span>
                </div>
              </div>
              <div className="hexagon">
                <div className="position-relative">
                  <img className="hexa" src={Hexagon3} alt="" />
                  <a href="https://twitter.com/sozeghxst" target="_blank">
                    <img
                      src={twitterwhite}
                      alt=""
                      className="position-absolute twitter_icon_about_page"
                      style={{
                        cursor: "pointer",
                        filter:
                          DarkMood === true
                            ? ""
                            : "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)",
                        // color: DarkMood === true ? "#fff" : "#000",
                      }}
                    />
                  </a>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center mt-3 hexagon_body_container">
                  <span
                    className="hexagon_text_head"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    DAVID
                  </span>
                  <span
                    className="hexagon_text_body"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    CREATIVE DIRECTOR | ART DIRECTOR
                  </span>
                </div>
              </div>
              <div className="hexagon">
                <div className="position-relative hexagon-upper">
                  <img className="hexa" src={Hexagon4} alt="" />
                  <a href="https://twitter.com/TheVirtunaut" target="_blank">
                    <img
                      src={twitterwhite}
                      alt=""
                      className="position-absolute twitter_icon_about_page"
                      style={{
                        cursor: "pointer",
                        filter:
                          DarkMood === true
                            ? ""
                            : "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)",
                        // color: DarkMood === true ? "#fff" : "#000",
                      }}
                    />
                  </a>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center mt-3 hexagon_body_container">
                  <span
                    className="hexagon_text_head"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    THEVIRTUNAUT
                  </span>
                  <span
                    className="hexagon_text_body"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    ART AND CODE
                  </span>
                </div>
              </div>
              <div className="hexagon">
                <div className="position-relative hexagon-upper">
                  <img className="hexa" src={Hexagon5} alt="" />
                  <a href="https://twitter.com/weirdbambino" target="_blank">
                    <img
                      src={twitterwhite}
                      alt=""
                      className="position-absolute twitter_icon_about_page"
                      style={{
                        cursor: "pointer",
                        filter:
                          DarkMood === true
                            ? ""
                            : "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)",
                        // color: DarkMood === true ? "#fff" : "#000",
                      }}
                    />
                  </a>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center mt-3 hexagon_body_container">
                  <span
                    className="hexagon_text_head"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    WEIRDBAMBINO
                  </span>
                  <span
                    className="hexagon_text_body"
                    style={{ color: DarkMood === false ? "#000" : "" }}
                  >
                    COMMUNITY EXPERIENCE LEAD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
