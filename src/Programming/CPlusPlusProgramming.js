import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const CPlusPlusProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5" data-aos="zoom-in">C++ Programming</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Dive into powerful system-level programming with C++, from OOP to STL and real-time applications.
          </p>
        </div>
      </section>

      {/* About C++ */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://w0.peakpx.com/wallpaper/451/1006/HD-wallpaper-c-plus-plus-metal-logo-grunge-programming-language-signs-blue-metal-background-c-plus-plus-creative-programming-language-c-plus-plus-logo.jpg"
              alt="C++ Course"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">Why Learn C++?</h5>
              <ul className="fs-5">
                <li>🚀 Fast and Efficient</li>
                <li>🧠 Object-Oriented Programming (OOP)</li>
                <li>🧰 Standard Template Library (STL)</li>
                <li>🎮 Used in game engines, simulations, OS development</li>
                <li>💼 High demand in software and embedded industries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">What You’ll Learn</h2>
        <div className="row g-4">
          {[
            "Basic Syntax & Structure",
            "Data Types & Operators",
            "Control Structures (if, loop, switch)",
            "Functions & Recursion",
            "Arrays, Pointers, and References",
            "Object-Oriented Programming (OOP)",
            "Constructors & Destructors",
            "Inheritance & Polymorphism",
            "File Handling",
            "Standard Template Library (STL)"
          ].map((item, idx) => (
            <div className="col-md-6" key={idx} data-aos="fade-up">
              <div className="card p-3 shadow border-0">
                <span className="fw-bold fs-5">✅ {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Project */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Mini Project: Bank Management System</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?cs=srgb&dl=pexels-olly-941555.jpg&fm=jpg"
              alt="Bank Project"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">Features:</h5>
              <ul className="fs-5">
                <li>🔐 User login system</li>
                <li>💼 Create account, deposit, withdraw</li>
                <li>📊 View balance and transaction history</li>
                <li>🗃️ File-based data storage using `.txt` files</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} C++ Programming Course | Powered by Infronex</small>
      </footer>
    </div>
  );
};

export default CPlusPlusProgramming;
