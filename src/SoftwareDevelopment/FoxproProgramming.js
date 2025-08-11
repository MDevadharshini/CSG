import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const FoxproProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5" data-aos="zoom-in">FoxPro Programming</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Learn legacy data-centric programming using FoxPro for DOS and Windows environments.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4 align-items-center flex-md-row-reverse">
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg"
              alt="FoxPro Programming"
              className="img-fluid shadow"
              style={{ borderRadius: "30px 0px 30px 0px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">🔹 What is FoxPro?</h5>
              <p className="fs-5">
                FoxPro is a text-based, procedural programming language developed by Microsoft, 
                widely used for building database applications before modern GUI systems took over.
              </p>
              <p className="fs-5 mb-0">
                This course focuses on building strong foundational skills in:
              </p>
              <ul className="mt-3 fs-5">
                <li>📂 Database Design and Table Management</li>
                <li>📄 SQL Queries in FoxPro</li>
                <li>💻 File I/O Operations</li>
                <li>🧾 Report Generation</li>
                <li>📊 Data Filtering, Sorting & Searching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Why Learn FoxPro?</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="card border-0 shadow p-4 h-100">
              <h5 className="fw-bold">💾 Legacy System Support</h5>
              <p>
                Many government and financial organizations still use FoxPro applications.
                Learning FoxPro helps in maintenance and migration.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card border-0 shadow p-4 h-100">
              <h5 className="fw-bold">📊 Strong DBMS Understanding</h5>
              <p>
                Develop strong fundamentals in data structure, file-based DBMS, and form/report generation.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="card border-0 shadow p-4 h-100">
              <h5 className="fw-bold">👨‍💼 Ideal for Accounting & Admin</h5>
              <p>
                Build mini projects for small businesses involving inventory, billing, and personnel management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Mini Project – Billing System</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://img.freepik.com/free-photo/online-store-concept-businessman-using-laptop-computer_53876-101988.jpg"
              alt="FoxPro Project"
              className="img-fluid shadow"
              style={{ borderRadius: "0px 40px 0px 40px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">🧾 Billing Application using FoxPro</h5>
              <p className="fs-5">
                Build a console-based billing system that includes product list management,
                item-wise bill generation, customer information storage, and summary reports.
              </p>
              <ul className="fs-5">
                <li>🧑 Add/Update/Delete Customers</li>
                <li>🛒 Track Purchased Items</li>
                <li>📤 Generate and Save Bills</li>
                <li>📈 View Monthly Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} FoxPro Programming Course | Powered by Infronex</small>
      </footer>
    </div>
  );
};

export default FoxproProgramming;
