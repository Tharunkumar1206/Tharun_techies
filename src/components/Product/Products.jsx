// import React from "react";
// import "./Products.css";
// import assets from "../../assets/assests"; // Import assets.js

// const products = [
//   {
//     category: "3D Printed Products",
//     title: "P&O Device Package",
//     description: "Advanced Technologies To Establish A Digital Fabrication Facility",
//     bgColor: "#9261f5", // Purple
//     image: assets.product1, // Use assets.product1 as the image source
//   },
//   {
//     category: "3D Printed Products",
//     title: "Patient Specific Implant",
//     description: "A revolution in the implant industry was created with the fast and reliable.",
//     bgColor: "#72ba61", // Green
//     image: assets.remote,
//   },
//   {
//     category: "3D Printed Products",
//     title: "Graft3DX Prost",
//     description:
//       "Proface - A patient-specific facial prosthetic, artificial organ for your nose, eyes and ear.",
//     bgColor: "#2d6cdf", // Blue
//     image: assets.product1,
//   },
//   {
//     category: "3D Packages",
//     title: "Asthi-3D Printed",
//     description:
//       "Our bone-like training models are made from a durable, bone-like material that closely mimics the texture and feel of real bone.",
//     bgColor: "#cf5eb5", // Pink
//     image: assets.remote,
//   },
//   {
//     category: "3D Packages",
//     title: "P&O Device Package",
//     description: "Advanced Technologies To Establish A Digital Fabrication Facility,Our bone-like training models are made from a durable",
//     bgColor: "#cf5e5e", // Red
//     image: assets.product1,
//   },
//   {
//     category: "3D Packages",
//     title: "Anatomical Model Package",
//     description: "Asthi-3D Printed Anatomical Models,Our bone-like training models are made from a durable",
//     bgColor: "#e87f26", // Orange
//     image: assets.remote,
//   },
// ];

// const Products = () => {
//   return (
//     <section className="products-container">
//       <h2 className="products-title">Our Products & Packages</h2>

//       <div className="products-grid">
//         {products.map((product, index) => (
//           <div key={index} className="product-card" style={{ backgroundColor: product.bgColor }}>
//             <div className="product-header">
//               <span className="category">{product.category}</span>
//               <span className="arrow">➜</span>
//             </div>
//             <div className="product-image">
//               <img src={product.image} alt={product.title} />
//             </div>
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-description">{product.description}</p>

            
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;


import React from "react";
import "./Products.css";
import assets from "../../assets/assests"; // Import assets.js

const products = [
  {
    category: "3D Printed Products",
    title: "P&O Device Package",
    description: "Advanced Technologies To Establish A Digital Fabrication Facility",
    bgColor: "#9261f5", // Purple
    image: assets.product1,
  },
  {
    category: "3D Printed Products",
    title: "Patient Specific Implant",
    description: "A revolution in the implant industry was created with the fast and reliable.",
    bgColor: "#72ba61", // Green
    image: assets.remote,
  },
  {
    category: "3D Printed Products",
    title: "Graft3DX Prost",
    description: "Proface - A patient-specific facial prosthetic, artificial organ for your nose, eyes, and ear.",
    bgColor: "#2d6cdf", // Blue
    image: assets.product1,
  },
  {
    category: "3D Packages",
    title: "Asthi-3D Printed",
    description: "Our bone-like training models are made from a durable, bone-like material that closely mimics the texture and feel of real bone.",
    bgColor: "#cf5eb5", // Pink
    image: assets.remote,
  },
  {
    category: "3D Packages",
    title: "P&O Device Package",
    description: "Advanced Technologies To Establish A Digital Fabrication Facility. Our bone-like training models are made from a durable.",
    bgColor: "#cf5e5e", // Red
    image: assets.product1,
  },
  {
    category: "3D Packages",
    title: "Anatomical Model Package",
    description: "Asthi-3D Printed Anatomical Models. Our bone-like training models are made from a durable.",
    bgColor: "#e87f26", // Orange
    image: assets.remote,
  },
];

const Products = () => {
  return (
    <section className="products-container">
      <h2 className="products-title">Our Products & Packages</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card" style={{ backgroundColor: product.bgColor }}>
            <div className="product-header">
              <span className="category">{product.category}</span>
              <span className="arrow">➜</span>
            </div>
            <div className="product-content">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-text">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
