import React from "react";
import "./AboutUs.css";
import assets from "../../assets/assests"; // Ensure correct path

const AboutUs = () => {
  return (
    <section className="about-container">
      {/* Left - Image Section */}
      <div className="about-image">
        <img src={assets.about1} alt="About Us" />
      </div>

      {/* Right - Content Section */}
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          To deliver medical 3D printing-based products tailored for hospitals,
          surgeons, and patients. Leveraging the expertise of our in-house
          doctors and engineers, we also design, develop, and promote
          futuristic Medical 3D printing and scanning-based products.
        </p>
        <button className="about-button">Learn more</button>

        <div className="about-stats">
          <span>
              <h1>250+</h1>
              <p>Parts Medical 3D Printed</p>
          </span>
          <span>
              <h1>50+</h1>
              <p>Happy Healthcare Customers</p>
          </span>
          <span>
              <h1>75+</h1>
              <p>Medical 3D Software Installed</p>
          </span>
          <span>
              <h1>100+</h1>
              <p>Medical 3D Printing Applications</p>
          </span>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
