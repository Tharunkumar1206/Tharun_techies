import React from "react";
import "./CaseStudy.css";

const caseStudies = [
  {
    title: "Virtual Surgical",
    image: "virtual-surgical.png", // Replace with actual image
  },
  {
    title: "Artificial Nose",
    image: "artificial-nose.png", // Replace with actual image
  },
  {
    title: "D2P",
    image: "d2p.png", // Replace with actual image
  },
];

const CaseStudy = () => {
  return (
    <div className="case-study-container">
      <h2 className="case-study-title">Case Study</h2>
      <div className="cards">
        {caseStudies.map((study, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">{study.title}</h3>
            <p>1. A nasal prosthesis is an artificial substitute or replacement for the nose.</p>
            <p>2. It helps restore normal appearance.</p>
            <p>3. It improves function for patients with partial or total nose loss.</p>
            <p>4. Nose loss may occur due to:</p>
            <ul>
              <li>Accidents</li>
              <li>Disease</li>
              <li>Congenital defects</li>
              <li>Surgical removal (Rhinectomy).</li>
            </ul>
            <button className="know-more">Know more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
