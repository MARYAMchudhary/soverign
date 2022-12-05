import "./communityguidelines.styles.scss";

import CrossIconSquare from "../../../assets/Icons/CrossIconSquare.png";
import CrossCircleTransparent from "../../../assets/Icons/CrossCircleTransparent.svg";

const CommunityGuidelines = ({ DarkMood }) => {
  return (
    <div className="community_guidelines_container">
      <div className="community_guidelines_body">
        <div className="community_guideline_title">
          <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
            Community Guidelines
          </h3>
        </div>
        <div className="community_guideline_description">
          <p style={{ color: DarkMood === true ? "#fff" : "#000" }}>
            Help us keep the community strong. Our community is home for <br />{" "}
            many different people from all walks of life. Please be respectful
            and <br />
            courteous of other people at all times.
          </p>
        </div>
        <div className="community_guidelines_points">
          <div className="points">
            <img src={CrossIconSquare} alt="" />
            <p>Be respectful to other members of the community</p>
          </div>
          <div className="points">
            <img src={CrossIconSquare} alt="" />
            <p>No Racial Slurs, Homophobia, Xenophobia</p>
          </div>
          <div className="points">
            <img src={CrossIconSquare} alt="" />
            <p>No Unsolicited Advertising</p>
          </div>
          <div className="points">
            <img src={CrossIconSquare} alt="" />
            <p>No Trolling for nefarious reasons</p>
          </div>
          <div className="points">
            <img src={CrossIconSquare} alt="" />
            <p>Do not post links</p>
          </div>
          <div className="points">
            <img src={CrossIconSquare} alt="" />
            <p>Foster meaningful and genuine interactions</p>
          </div>
          <div className="points">
            <img src={CrossIconSquare} alt="" />
            <p>
              Do not make other users uncomfortable by sharing NSFW content.
            </p>
          </div>
        </div>
        <div className="close_community_guidelines">
          <img
            src={CrossCircleTransparent}
            alt=""
            style={{
              cursor: "pointer",
              filter:
                DarkMood === true
                  ? "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)"
                  : "",
              // color: DarkMood === true ? "#fff" : "#000",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
