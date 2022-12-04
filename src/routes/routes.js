import { Route, Routes } from "react-router-dom";
import About from "../components/AboutPage/about.component";
import CommunitySignUp from "../components/CommunitySignUp/communitySignUp.component";
import CommunitySignUpVerify from "../components/CommunitySignUpVerify/communitySignUpVerify.component";
import DAOPage from "../components/DAOPage/daoPage.component";
import Header from "../components/Header/header.component";
import HomePage from "../components/HomePage/homePage.component";
import Manifesto from "../components/Manifesto/Manifesto.component";
import SignUpPage3 from "../components/SignUpPage3/signUpPage3.component";
import WalletConnect from "../components/WalletConnection/walletConnect";
import SigninPage from "../components/Signin Page/signinPage";
import TwitterVerification from "../components/Twitter Verification/twitterVerification";
import WelcomePage from "../components/Welcome Page/welcomePage";
import ForgotPassword from "../components/Forgot Password/forgotPassword";
import ResetPassword from "../components/Reset Password/resetPassword";
import PasswordChanged from "../components/Password Changed/passwordChanged";
import ChatScreen from "../components/chat-screen/chatScreen";
import ChatCommunity from "../components/chatcommunity/ChatCommunity";
import MintDapp from "../components/MintDapp/mintDapp.component";
import OtherUserProfile from "../components/OtherUsersProfile/otherUsersProfile.component";
import MyProfile from "../components/MyProfile/myProfile.component";
import ProfileSetting from "../components/ProfileSetting/profileSetting.component";
import StakingDapp from "../components/Staking Dapp/stakingDapp";
import CommunityGuidelines from "../components/chatcommunity/CommunityGuideline/communityGuidelines.component";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="About" element={<About />} />
          <Route path="DAO" element={<DAOPage />} />
          <Route path="signup3" element={<SignUpPage3 />} />
          <Route path="manifesto" element={<Manifesto />} />
          <Route path="Connectwallet" element={<WalletConnect />} />
          <Route path="CommunitySignUp" element={<CommunitySignUp />} />
          <Route path="CommunitySignUp/:id" element={<CommunitySignUp />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="verify-twitter" element={<TwitterVerification />} />
          <Route path="verify-twitter/:id" element={<TwitterVerification />} />
          <Route path="welcome-page" element={<WelcomePage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="password-changed" element={<PasswordChanged />} />
          <Route path="chat" element={<ChatScreen />} />
          <Route path="chatcommunity" element={<ChatCommunity />} />

          <Route path="mint-dapp" element={<MintDapp />} />
          <Route path="staking-dapp" element={<StakingDapp />} />
          <Route
            path="Communitysignupverify"
            element={<CommunitySignUpVerify />}
          />
          <Route path="userprofile" element={<OtherUserProfile />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="profilesetting" element={<ProfileSetting />} />
          <Route path="CG" element={<CommunityGuidelines />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
