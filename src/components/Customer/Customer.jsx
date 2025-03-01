import React from "react";
import '../Customer/Customer.css'
import assests from "../../assets/assests"; // Import your assets file

const customers = [
    { name: "Gleneagles", logo: assests.glen },
    { name: "SIMS", logo: assests.sims },
    { name: "Venkateswara", logo: assests.venkat },
    { name: "Gleneagles", logo: assests.glen },
    { name: "SIMS", logo: assests.sims },
    { name: "Venkateswara", logo: assests.venkat },
    { name: "SIMS", logo: assests.sims },
    { name: "Gleneagles", logo: assests.glen },
    { name: "Venkateswara", logo: assests.venkat },
];

const Customers = () => {
  return (
    <div className="customers-container">
      <div className="customers-text">
        <h2>Our Valuable Customers</h2>
        <p>Our customers are the heart of our journey, and every ride is a story we cherish.</p>
      </div>

      <div className="customers-box">
        <div className="customers-grid">
          {customers.map((customer, index) => (
            <div key={index} className={`customer-card ${index % 2 === 0 ? "left" : "right"}`}>
              <img src={customer.logo} alt={customer.name} className="customer-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
