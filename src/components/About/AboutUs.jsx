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
          <span>250+ Parts Medical 3D Printed</span>
          <span>100+ Happy Healthcare Customers</span>
          <span>50+ Medical 3D Software Installed</span>
          <span>75+ Medical 3D Printing Applications</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
