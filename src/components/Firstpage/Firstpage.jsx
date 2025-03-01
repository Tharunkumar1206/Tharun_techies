import React from "react";
import "./Firstpage.css";
import assets from "../../assets/assests";
// import heroImage from "../assets/Group 39616.png"; // Adjust the path based on your folder structure

const Firstpage = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3>
          <span className="highlight">Graft 3D Healthcare</span>
        </h3>
        <h1>3D Printing <br /> Solution Provider</h1>
        <p>
          We Design and Develop Custom Healthcare 3D printed products,
          Healthcare 3D printing packages and Healthcare 3D services for
          hospitals and surgeons.
        </p>
        <button className="cta-button">Meet us Live Online</button>
      </div>
      <div className="hero-images">
        <img src={assets.home2} alt="3D Printing Back" className="back-image" />
        <img src={assets.home1} alt="3D Printing Front" className="front-image" />
      </div>
    </div>
  );
};

export default Firstpage;
