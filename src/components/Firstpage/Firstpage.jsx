import React from "react";
import "./Firstpage.css";
import assets from "../../assets/assests";

const Firstpage = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3>
          <span className="highlight">Graft 3D Healthcare</span>
        </h3>
        <h1>Medical. 3D Printing <br /> Solution Provider</h1>
        <p>
          We Design and Develop Custom Healthcare 3D printed products,
          Healthcare 3D printing packages and Healthcare 3D services for
          hospitals and surgeons.
        </p>
        <button className="cta-button">Meet us Live Online</button>
      </div>
      <div className="hero-images">
        <img src={assets.front} alt="3D Printing Back" className="front-image" />
      </div>
    </div>
  );
};

export default Firstpage;
