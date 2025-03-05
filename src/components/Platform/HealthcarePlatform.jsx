import React from "react";
import "./HealthcarePlatform.css";
import assets from "../../assets/assests";

const HealthcarePlatform = () => {
  return (
    <div className="healthcare-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="text-content">
          <h1>
            <span className="bold-text">Online Platform For</span> <br />
            <span className="blue-text">Healthcare 3D Services</span>
          </h1>
          <p>
            Experience a cutting-edge platform designed exclusively for healthcare
            professionals, offering advanced 3D services for medical innovation.
            Transform diagnostics, treatment planning, and research with high-quality
            3D solutions at your fingertips.
          </p>
        </div>
        <div className="doctor-image">
          <img src={assets.doctor} alt="Doctor Illustration" />
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="service-card blue">
          <h2>Dicom to 3D conversion</h2>
          <p>
            Do you have the medical scans in hand and are looking for a reliable vendor
            to convert medical images, such as CT, CBCT, or MRI scans, into high-quality
            3D models? Graft3D can help you with high-quality image segmentation
            services using advanced Dicom to 3D conversion software.
          </p>
          <img className="service-icon" src={assets.heart} alt="Heart Icon" />
        </div>
        <div className="service-card green">
          <h2>Custom medical design</h2>
          <p>
            Graft3D can assist with custom medical device design of life-saving implants,
            surgical cutting and drill guides, or anything tailor-made to the patient’s
            unique requirement.
          </p>
          <img className="service-icon" src={assets.teeth} alt="Tooth Icon" />
        </div>
        <div className="service-card orange">
          <h2>Medical 3D Printing</h2>
          <p>
            We offer comprehensive end-to-end medical 3D printing services with
            appropriate certification for 3D printing materials, processes, and 3D
            printers for global export.
          </p>
          <img className="service-icon" src={assets.face} alt="Face Icon" />
        </div>
      </div>
    </div>
  );
};

export default HealthcarePlatform;
