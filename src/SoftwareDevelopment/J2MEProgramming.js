import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const J2MEProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5" data-aos="zoom-in">J2ME Programming</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Learn to build mobile applications for Java-enabled devices using J2ME technology.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>

        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg"
              alt="J2ME Development"
              className="img-fluid shadow"
              style={{ borderRadius: "40px 0px 0px 40px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">What is J2ME?</h5>
              <p className="fs-5 mb-0">
                Java 2 Micro Edition (J2ME) is used to develop applications for small devices like mobile phones, set-top boxes, and PDAs. It provides a robust and flexible environment tailored for embedded systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Covered */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Technologies You’ll Learn</h2>

        <div className="row g-4 align-items-center flex-md-row-reverse">
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="https://img.freepik.com/free-photo/abstract-programming-code-background-software-development-concept_53876-125194.jpg"
              alt="J2ME Technologies"
              className="img-fluid shadow"
              style={{ borderRadius: "0 30px 30px 0" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="card p-4 border-0 shadow">
              <ul className="fs-5 mb-0">
                <li>📱 CLDC (Connected Limited Device Configuration)</li>
                <li>📦 MIDP (Mobile Information Device Profile)</li>
                <li>🔧 KVM (Kilo Virtual Machine)</li>
                <li>🎮 Game API for 2D graphics</li>
                <li>🔌 Networking and HTTP connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Mini Project</h2>

        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://img.freepik.com/premium-photo/mobile-application-development-interface-user-experience_31965-61725.jpg"
              alt="J2ME Project"
              className="img-fluid shadow"
              style={{ borderRadius: "20px 20px 0 0" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">📲 Mobile Dictionary App</h5>
              <p className="fs-5 mb-0">
                Build a J2ME dictionary app that allows users to search for word meanings offline. Implement list navigation, search functionality, and file-based word storage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} J2ME Programming Course | Powered by Infronex</small>
      </footer>
    </div>
  );
};

export default J2MEProgramming;
