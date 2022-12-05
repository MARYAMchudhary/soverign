import "./communitysignupverify.styles.scss";
import TwitterWhite from "../../assets/Social_Media_Icons/TwitterPureWhite.svg";
import WalletWhite from "../../assets/Icons/WalletWhite.svg";

const CommunitySignUpVerify = ({ DarkMood }) => {
  return (
    <div className="community-signup-verify-container">
      <div className="community-signup-verify-body mt-5">
        <h3 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
          COMMUNITY SIGN UP
        </h3>
        <div className="community-signup-verify-upper-sec mb-3">
          <div className="community-signup-verify-twitter">
            <div className="twitter-verify">
              <div>
                <img
                  src={TwitterWhite}
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
              </div>
              <h6 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                Twitter
              </h6>
            </div>
            <div>
              <button style={{ color: DarkMood === true ? "#000" : "#000" }}>
                Verify
              </button>
            </div>
          </div>
          <div className="twitter-verify-input">
            <input type="text" name="" id="" placeholder="Follow @SVRNDAO" />
          </div>
        </div>
        <div className="hr-line"></div>
        <div className="community-signup-verify-lower-sec mt-3">
          <div className="community-signup-verify-twitter">
            <div className="twitter-verify">
              <div>
                <img
                  src={WalletWhite}
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
              </div>
              <h6 style={{ color: DarkMood === true ? "#fff" : "#000" }}>
                Wallet
              </h6>
            </div>
            <div>
              <button style={{ color: DarkMood === true ? "#000" : "#000" }}>
                Verify
              </button>
            </div>
          </div>
          <div className="twitter-verify-input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Registered wallets must contain at least 0.1 ETH on the Ethereum Network to access community features."
            />
          </div>
        </div>
        <div className="community-signup-verify-btn">
          <button style={{ color: DarkMood === true ? "#000" : "#000" }}>
            Complete Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySignUpVerify;
