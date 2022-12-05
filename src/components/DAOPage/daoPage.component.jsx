import { Link } from "react-router-dom";
import "./daopage.styles.scss";

const DAOPage = ({ DarkMood }) => {
  return (
    <div className="DOA-container">
      <div>
        <div className="DOA-content">
          <div className="DOA-splitter">
            <div className="DOA-body">
              <h1
                className="my-4"
                style={{ color: DarkMood === false ? "#000" : "" }}
             
              >
                SovereignDAO
              </h1>
              <p
                className="d-none d-sm-block"
                style={{ color: DarkMood === false ? "#000" : "" }}
              >
                We’re building a platform to allow group
                <br /> decision-making to happen on a whole other
                <br /> level.
              </p>

              <p
                className="d-sm-none"
                style={{ color: DarkMood === false ? "#000" : "" }}
              >
                We're Building the most in-demand
                <br /> social DAO platform and infrastructure <br /> to
                facilitate the next big DAO.
              </p>
              <img
                className="loading-gif"
                src={require("../../assets/Gifs/Loading.gif")}
                alt=""
              />
            </div>
          </div>
          <div className="DOA-buttons-container">
            <a
              href="https://manifesto.sovereigndao.com/"
              target="_blank"
              style={{ color: DarkMood === false ? "#000" : "" }}
            >
              Manifesto
            </a>
            <Link to="/Connectwallet">
              <span style={{ color: DarkMood === false ? "#000" : "" }}>
                {" "}
                Signup
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAOPage;
