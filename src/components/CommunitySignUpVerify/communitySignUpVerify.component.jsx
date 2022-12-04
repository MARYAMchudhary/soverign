import "./communitysignupverify.styles.scss";
import TwitterWhite from "../../assets/Social_Media_Icons/TwitterPureWhite.svg";
import WalletWhite from "../../assets/Icons/WalletWhite.svg";

const CommunitySignUpVerify = () => {
  return (
    <div className="community-signup-verify-container">
      <div className="community-signup-verify-body mt-5">
        <h3>COMMUNITY SIGN UP</h3>
        <div className="community-signup-verify-upper-sec mb-3">
          <div className="community-signup-verify-twitter">
            <div className="twitter-verify">
              <div>
                <img src={TwitterWhite} alt="" />
              </div>
              <h6>Twitter</h6>
            </div>
            <div>
              <button>Verify</button>
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
                <img src={WalletWhite} alt="" />
              </div>
              <h6>Wallet</h6>
            </div>
            <div>
              <button>Verify</button>
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
          <button>Complete Signup</button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySignUpVerify;
