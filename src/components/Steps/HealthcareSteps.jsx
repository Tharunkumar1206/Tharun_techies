import React from "react";
import "./HealthcareSteps.css";

const steps = [
  { id: "01", title: "Get Healthcare", color: "red" },
  { id: "02", title: "Get Healthcare", color: "green" },
  { id: "03", title: "Get Healthcare", color: "purple" },
  { id: "04", title: "Get Healthcare", color: "blue" },
];

const HealthcareSteps = () => {
  return (
    <div className="container">
      <h2 className="heading">
        Healthcare 3D printing services In india <span className="online">(Online Platform)</span> 
      </h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card" style={{ borderColor: step.color }}>
            <h3 style={{ color: step.color }}>{step.id}</h3>
            <h4 style={{ color: step.color }}>{step.title}</h4>
            <p>
              Consult Our Doctors & Bio CAD Modellers To Design Patient Specific
              Medical Devices
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareSteps;
