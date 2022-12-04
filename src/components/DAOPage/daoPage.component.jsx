import { Link } from "react-router-dom";
import "./daopage.styles.scss";

const DAOPage = () => {
  return (
    <div className="DOA-container">
      <div>
        <div className="DOA-content">
          <div className="DOA-splitter">
            <div className="DOA-body">
              <h1 className="my-4">SovereignDAO</h1>
              <p className="d-none d-sm-block">
                We’re building a platform to allow group
                <br /> decision-making to happen on a whole other
                <br /> level.
              </p>

              <p className="d-sm-none">
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
            <a href="https://manifesto.sovereigndao.com/" target="_blank">
              Manifesto
            </a>
            <Link to="/Connectwallet">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAOPage;
