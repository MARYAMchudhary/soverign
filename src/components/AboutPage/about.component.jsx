import "./about.styles.scss";
import Hexagon1 from "../../assets/Hexagons/Polygon 1.svg";
import Hexagon2 from "../../assets/Hexagons/Polygon 2.svg";
import Hexagon3 from "../../assets/Hexagons/Polygon 3.svg";
import Hexagon4 from "../../assets/Hexagons/Polygon 4.svg";
import Hexagon5 from "../../assets/Hexagons/Polygon5.svg";
import twitterwhite from "../../assets/Social_Media_Icons/TwitterIconWhite.svg";
import logo from "../../assets/Logo/SOVEREIGN.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


// Import Frame Picture
import Frame from "../../assets/Icons/Frame.png";

const About = ({ DarkMood }) => (
  <>
    <div className="container text-white">
      <div className="row">
        <div className="col-12 col-md-7">
          <h1 style={{ lineHeight: "80px", fontSize: "60px" }}>Sovereign is designed to be a force of good in the world.</h1>
          <img src={Frame} className="img-fluid position-absolute top-0 right-15rem" width="300" alt="" />
        </div>
        <div className="col-12 mt-6">
          <p className="mb-0">
            and, during its early days, it will be a network state of creators, developers, entrepreneurs, and thinkers who pool their skills, knowledge, imagination, and talent to impact the shape of our internet - the medium that connects us all. By reimagining how human brains cooperate and coproduce in the midst of a quickly evolving digital landscape, we hope to kickstart systems and efforts whose ramifications people can feel.
          </p>
        </div>
        <div className="row mt-6">
          <div className="col-12 col-md-4">
            <h2>Sovereign is more than just a digital currency.</h2>
          </div>
          <div className="col-12 col-md-6 ms-0 ms-md-5 position-relative">
            <div className="circle"></div>
            <p> It’s a revolutionary experience. The purpose of Sovereign is to give people a way to invest in their future while also supporting the cause they care about. Sovereign's founding members are committed to making the world a better place by fostering an environment where decentralisation flourishes and governance is open and accessible to all. This drives Sovereign's commitment to creating the most user-friendly and intuitive products in the Blockchain.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid text-white">

      <div className="row mt-7 d-none d-md-block">
        <h3>Out Team</h3>
        <div className="col-12 col-md-2 ms-0 ms-md-5">
          <div className="card bg-transparent px-2 py-5 border-1 border-secondary rounded-0 text-center">
            <img src={Hexagon1} className="img-fluid" alt="" />
            <p className="mt-1 mb-0">Weirdbambino</p>
            <p style={{ fontSize: "12px" }}>Community Experience Lead</p>
          </div>
          <button className="btn btn-dark bg-transparent rounded-0 w-100 border-secondary"><i class="bi bi-twitter me-2"></i>TheVirtunaut</button>
        </div>
        <div className="col-12 col-md-2">
          <div className="card mt-5 bg-light text-dark px-2 py-5 border-1 border-secondary rounded-0 text-center">
            <img src={Hexagon2} className="img-fluid" alt="" />
            <p className="mt-1 mb-0">Nero</p>
            <p style={{ fontSize: "12px" }}>Tech Lead</p>
          </div>
          <button className="btn btn-light rounded-0 w-100 border-secondary"><i class="bi bi-twitter me-2"></i>nerosvrn</button>
        </div>
        <div className="col-12 col-md-2">
          <div className="card bg-transparent px-2 py-5 mt-3 border-1 border-secondary rounded-0 text-center">
            <img src={Hexagon3} className="img-fluid" alt="" />
            <p className="mt-1 mb-0">Toplad</p>
            <p style={{ fontSize: "12px" }}>Architect</p>
          </div>
          <button className="btn btn-dark bg-transparent rounded-0 w-100 border-secondary"><i class="bi bi-twitter me-2"></i>T0P_LAD</button>
        </div>
        <div className="col-12 col-md-2">
          <div className="card bg-transparent px-2 py-5 border-1 border-secondary rounded-0 text-center">
            <img src={Hexagon4} className="img-fluid" alt="" />
            <p className="mt-1 mb-0">David</p>
            <p style={{ fontSize: "12px" }}>Art director</p>
          </div>
          <button className="btn btn-dark bg-transparent rounded-0 w-100 border-secondary"><i class="bi bi-twitter me-2"></i>sozeghxst</button>
        </div>
        <div className="col-12 col-md-2">
          <div className="card bg-transparent px-2 py-5 mt-3 border-1 border-secondary rounded-0 text-center">
            <img src={Hexagon5} className="img-fluid" alt="" />
            <p className="mt-1 mb-0">Thevirtunaut</p>
            <p style={{ fontSize: "12px" }}>Visual Engineer</p>
          </div>
          <button className="btn btn-dark bg-transparent rounded-0 w-100 border-secondary"><i class="bi bi-twitter me-2"></i>TheVirtunaut</button>
        </div>
      </div>
    </div>
    <hr className="mt-10" />
  </>
);

export default About;
