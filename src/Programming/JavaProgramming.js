import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const JavaProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5" data-aos="zoom-in">Java Programming</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Master Java programming with OOP, GUI, File Handling, JDBC & Mini Projects.
          </p>
        </div>
      </section>

      {/* About Java */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
<<<<<<< HEAD

              src="https://img.freepik.com/free-photo/close-up-coding-man_23-2148882264.jpg"

=======
<<<<<<< HEAD
              src="https://e0.pxfuel.com/wallpapers/226/1020/desktop-wallpaper-java-programming-logo.jpg"
=======
              src="https://img.freepik.com/free-photo/close-up-coding-man_23-2148882264.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
              alt="Java Course"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">Why Learn Java?</h5>
              <ul className="fs-5">
                <li>🌐 Platform Independent (WORA)</li>
                <li>🔒 Secure and Robust</li>
                <li>🧱 Object-Oriented Programming (OOP)</li>
                <li>💼 Widely used in web, mobile, and enterprise applications</li>
                <li>📊 Java is the base for many popular frameworks like Spring</li>
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
            "Java Syntax & Structure",
            "Data Types, Operators, and Control Statements",
            "Classes, Objects & Constructors",
            "Inheritance, Polymorphism & Abstraction",
            "Exception Handling",
            "File I/O and Streams",
            "Multithreading",
            "Collections Framework",
            "GUI with Swing",
            "JDBC Database Connectivity"
          ].map((item, idx) => (
            <div className="col-md-6" key={idx} data-aos="fade-up">
              <div className="card p-3 shadow border-0">
                <span className="fw-bold fs-5">✅ {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Project */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Mini Project: Student Management System</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://img.freepik.com/free-photo/development-development-website-design-coding-programming_53876-125201.jpg"
              alt="Java Project"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">Features:</h5>
              <ul className="fs-5">
                <li>👤 Add, Edit, and Delete Student Records</li>
                <li>📂 File Storage for Data</li>
                <li>🔍 Search by ID or Name</li>
                <li>📊 View All Records</li>
                <li>💻 Built using Java, OOP, File Handling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} Java Programming Course | Powered by Infronex</small>
      </footer>
    </div>
  );
};

export default JavaProgramming;
