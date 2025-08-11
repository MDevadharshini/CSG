import React from "react";
import "./CSS/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="bg-light py-5 hero-section">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        {/* LEFT CONTENT */}
        <div className="text-start animate__animated animate__fadeInLeft">
          <p className="text-success fw-semibold mb-2">
            ✅ Get 30% off on your first enrollment at CSG!
          </p>
          <h1 className="display-5 fw-bold mb-3">
            Advance your <br /> IT & Engineering skills with CSG.
          </h1>
          <p className="text-muted">
            Join 10,000+ learners building strong foundations through our industry-ready curriculum and expert mentors.
          </p>

          {/* Feature Highlights */}
          <div className="row text-muted mb-3">
            <div className="col-6 mb-2">✔️ Experienced Trainers</div>
            <div className="col-6 mb-2">✔️ Hands-on Lab Practice</div>
            <div className="col-6 mb-2">✔️ Certification Support</div>
            <div className="col-6 mb-2">✔️ Placement Assistance</div>
          </div>

          {/* Search + CTA */}
          <div className="input-group mt-3 w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a course..."
            />
            <button className="btn btn-primary">
              🔍
            </button>
          </div>

          <p className="mt-3 text-muted">
            📞 Contact us: <strong>9600469768</strong><br />
            📍 Avinashi Road, Coimbatore
          </p>
        </div>

        {/* RIGHT IMAGE + BADGES */}
        <div className="position-relative mt-5 mt-lg-0 animate__animated animate__fadeInRight">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/19/14/woman-1294074_1280.png"
            alt="Student"
            className="img-fluid"
            style={{ maxHeight: "400px", borderRadius: "20px" }}
          />
          <div className="badge bg-white text-dark shadow position-absolute top-0 start-0 p-2 m-2 rounded">
            📊 No of students
            <div className="text-center mt-1">
              <img
                src="https://img.icons8.com/color/48/graph.png"
                alt="Graph"
                style={{ width: "30px" }}
              />
            </div>
          </div>
          <div className="badge bg-white shadow position-absolute bottom-0 start-0 p-3 m-3 rounded">
            <strong className="text-primary fs-5">50+</strong><br />
            Available Courses
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
