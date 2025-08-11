<<<<<<< HEAD
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
import { CheckCircle } from "lucide-react";

const WebTechEcommerce = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark py-5">
      <div className="container">
        {/* Title */}
        <h1 className="text-center fw-bold mb-4" data-aos="fade-up">
          🌐 Web Technologies & E-Commerce Development
        </h1>

        {/* Intro Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <img
<<<<<<< HEAD
              src="https://img.freepik.com/free-photo/e-commerce-business-shopping-online-concept_53876-124654.jpg"
=======
<<<<<<< HEAD
              src="https://t4.ftcdn.net/jpg/07/64/55/75/360_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg"
=======
              src="https://img.freepik.com/free-photo/e-commerce-business-shopping-online-concept_53876-124654.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
              alt="E-Commerce"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow-sm bg-white">
              <h5 className="fw-bold mb-3">Overview</h5>
              <p className="fs-5 mb-0">
                Learn how modern web technologies power dynamic and scalable
                e-commerce platforms. This course covers front-end, back-end,
                databases, APIs, and secure payment gateway integrations to
                build real-world shopping experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-5">
          <h2 className="fw-bold text-center mb-4" data-aos="zoom-in">
            🚀 Technologies You’ll Learn
          </h2>
          <div className="row g-4">
            {[
              "HTML5, CSS3, JavaScript",
              "React.js / Angular / Vue.js",
              "Node.js, Express.js",
              "MongoDB / MySQL",
              "RESTful APIs",
              "Payment Gateways (Razorpay, Stripe)",
              "Firebase & Hosting",
              "Responsive Web Design (Bootstrap)",
            ].map((tech, idx) => (
              <div className="col-md-6" key={idx} data-aos="fade-up">
                <div className="d-flex align-items-start">
                  <CheckCircle className="text-success me-2 mt-1" />
                  <p className="fs-5 mb-0">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-5">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
            🌟 Key Features
          </h2>
          <div className="row g-4">
            {[
              "Dynamic product catalog & cart system",
              "Admin dashboard for managing orders/products",
              "User login & secure authentication",
              "Order tracking and user history",
              "Live search & filter options",
              "Mobile-responsive design",
              "SEO-friendly architecture",
              "Real-time offers and coupon integration",
            ].map((feature, idx) => (
              <div className="col-md-6" key={idx} data-aos="fade-right">
                <div className="d-flex align-items-start">
                  <CheckCircle className="text-primary me-2 mt-1" />
                  <p className="fs-5 mb-0">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Applications */}
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card p-4 border-0 shadow-sm bg-white">
              <h5 className="fw-bold mb-3">Real-Time Applications</h5>
              <ul className="fs-5 mb-0">
                <li className="mb-2">🛒 Amazon / Flipkart Clone</li>
                <li className="mb-2">📦 Online Grocery Store</li>
                <li className="mb-2">🧥 Fashion & Clothing Website</li>
                <li className="mb-2">🎓 Educational Course Selling Site</li>
                <li className="mb-2">🍔 Online Food Delivery System</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img
<<<<<<< HEAD
              src="https://img.freepik.com/free-photo/shopping-cart-graphic-commercial-icon_53876-120105.jpg"
=======
<<<<<<< HEAD
              src="https://t4.ftcdn.net/jpg/06/22/39/91/360_F_622399137_jlEDsEN0pUMZA6jMKShRoq2po69QBQXj.jpg"
=======
              src="https://img.freepik.com/free-photo/shopping-cart-graphic-commercial-icon_53876-120105.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
              alt="Real-Time Projects"
              className="img-fluid rounded-5 shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebTechEcommerce;
