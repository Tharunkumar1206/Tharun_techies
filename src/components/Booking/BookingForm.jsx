import React from "react";
import "./BookingForm.css";

const BookingForm = () => {
  return (
    <div className="booking-container">
      <h2 className="booking-title">Book a free online demo</h2>
      <p className="booking-subtitle">
        Witness how we design Custom Medical Device 3D Printed Products
        <br /> using Geomagic Freeform and D2P.
      </p>

      <form className="booking-form">
        {/* Full Name & Available Date Container */}
        <div className="row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="eg: John Doe" />
          </div>

          <div className="form-group">
            <label>Available Date</label>
            <select>
              <option>Select</option>
              <option>March 1, 2025</option>
              <option>March 2, 2025</option>
            </select>
          </div>
        </div>

        {/* Email & Time Selection Container */}
        <div className="row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="eg: john@email.com" />
          </div>

          <div className="form-group time-group">
            <input type="text" placeholder="1AM" />
            <button className="time-btn">Select Time</button>
          </div>
        </div>

        {/* Phone Number */}
        <div className="form-group phone-group">
          <label>Phone Number</label>
          <div className="phone-input">
            <select className="country-code">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input type="text" placeholder="987654321" />
          </div>
        </div>

        {/* Submit Button */}
        <button className="submit-btn">Book Now →</button>
      </form>
    </div>
  );
};

export default BookingForm;
