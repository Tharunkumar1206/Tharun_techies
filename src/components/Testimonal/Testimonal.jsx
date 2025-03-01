import React from "react";
import "./Testimonial.css"; // Importing CSS file

const testimonials = [
  {
    name: "Raj",
    role: "Doctor",
    image: "https://via.placeholder.com/50",
    text: "We use advanced software to preprocess images, ensuring the input is of the best quality for segmentation.",
    rating: 5,
  },
  {
    name: "Suresh",
    role: "Doctor",
    image: "https://via.placeholder.com/50",
    text: "We use advanced software to preprocess images, ensuring the input is of the best quality for segmentation.",
    rating: 5,
  },
  {
    name: "Sivakumar",
    role: "Doctor",
    image: "https://via.placeholder.com/50",
    text: "We use advanced software to preprocess images, ensuring the input is of the best quality for segmentation.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonial</h2>
      <div className="underline"></div> {/* Blue Line Under Title */}

      {/* Curved text */}
      <p className="curved-text">
        Medical 3D printing-based products tailored for hospitals, surgeons, and patients. Leveraging the expertise of our in-house doctors and engineers.
      </p>

      {/* Profile Images on Curve */}
      <div className="profile-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="profile-img-wrapper">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="profile-img"
            />
          </div>
        ))}
      </div>

      {/* Testimonials Cards */}
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.role}</p>
            <div className="stars">
              {"★".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
