import "./signuppage3.styles.scss";
import DoubleTick from "../../assets/Icons/DoubleTick.svg";

const SignUpPage3 = () => {
  return (
    <div className="signup-page3-container">
      <div className="signup-page3-content">
        <div>
          <img src={DoubleTick} alt="" />
        </div>
        <h3>Welcome To SovereignDAO</h3>
        <p>
          We are thrilled that you have chosen to join us on yet <br /> another
          journey into the future. Thank you for coming <br /> along with us on
          this journey.
        </p>
        <p>
          For latest news and updates including the community <br /> chat will
          soon be announced on our twitter.
        </p>
      </div>
    </div>
  );
};
export default SignUpPage3;
