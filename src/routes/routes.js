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
import { useState } from "react";

const Routing = () => {
  const [DarkMood, setDarkMood] = useState(true);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Header DarkMood={DarkMood} setDarkMood={setDarkMood} />}
        >
          <Route index element={<HomePage DarkMood={DarkMood} />} />
          <Route path="About" element={<About DarkMood={DarkMood} />} />
          <Route path="DAO" element={<DAOPage DarkMood={DarkMood} />} />
          <Route path="signup3" element={<SignUpPage3 DarkMood={DarkMood} />} />
          <Route path="manifesto" element={<Manifesto DarkMood={DarkMood} />} />
          <Route
            path="Connectwallet"
            element={<WalletConnect DarkMood={DarkMood} />}
          />
          <Route
            path="CommunitySignUp"
            element={<CommunitySignUp DarkMood={DarkMood} />}
          />
          <Route path="CommunitySignUp/:id" element={<CommunitySignUp />} />
          <Route path="signin" element={<SigninPage DarkMood={DarkMood} />} />
          <Route
            path="verify-twitter"
            element={<TwitterVerification DarkMood={DarkMood} />}
          />
          <Route path="verify-twitter/:id" element={<TwitterVerification />} />
          <Route
            path="welcome-page"
            element={<WelcomePage DarkMood={DarkMood} />}
          />
          <Route
            path="forgot-password"
            element={<ForgotPassword DarkMood={DarkMood} />}
          />
          <Route
            path="reset-password"
            element={<ResetPassword DarkMood={DarkMood} />}
          />
          <Route
            path="password-changed"
            element={<PasswordChanged DarkMood={DarkMood} />}
          />
          <Route path="chat" element={<ChatScreen />} />
          <Route
            path="chatcommunity"
            element={<ChatCommunity DarkMood={DarkMood} />}
          />

          <Route path="mint-dapp" element={<MintDapp DarkMood={DarkMood} />} />
          <Route
            path="staking-dapp"
            element={<StakingDapp DarkMood={DarkMood} />}
          />
          <Route
            path="Communitysignupverify"
            element={<CommunitySignUpVerify DarkMood={DarkMood} />}
          />
          <Route
            path="userprofile"
            element={<OtherUserProfile DarkMood={DarkMood} />}
          />
          <Route path="myprofile" element={<MyProfile DarkMood={DarkMood} />} />
          <Route
            path="profilesetting"
            element={<ProfileSetting DarkMood={DarkMood} />}
          />
          <Route
            path="CG"
            element={<CommunityGuidelines DarkMood={DarkMood} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
