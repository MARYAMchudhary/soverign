import "./signuppage3.styles.scss";
import DoubleTick from "../../assets/Icons/DoubleTick.svg";

const SignUpPage3 = ({ DarkMood }) => {
  return (
    <div className="signup-page3-container">
      <div className="signup-page3-content">
        <div>
          <img
            src={DoubleTick}
            alt=""
            style={{
              cursor: "pointer",
              filter:
                DarkMood === true
                  ? ""
                  : "brightness(142%) invert(183%) sepia(918%) hue-rotate(200deg) saturate(277%)",
              // color: DarkMood === true ? "#fff" : "#000",
            }}
          />
        </div>
        <h3 style={{ color: DarkMood === false ? "#000" : "" }}>
          Welcome To SovereignDAO
        </h3>
        <p style={{ color: DarkMood === false ? "#000" : "" }}>
          We are thrilled that you have chosen to join us on yet <br /> another
          journey into the future. Thank you for coming <br /> along with us on
          this journey.
        </p>
        <p style={{ color: DarkMood === false ? "#000" : "" }}>
          For latest news and updates including the community <br /> chat will
          soon be announced on our twitter.
        </p>
      </div>
    </div>
  );
};
export default SignUpPage3;
