import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

const HtmlCourse = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-danger text-white py-5">
        <div className="container text-center" data-aos="zoom-in">
          <h1 className="fw-bold display-5">📄 HTML Full Course</h1>
          <p className="lead mt-3">
            Learn the foundation of web development with in-depth HTML concepts and real-world examples.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
<<<<<<< HEAD

              
              src="https://img.freepik.com/free-vector/html5-programming-landing-page_23-2148815798.jpg"
       alt="HTML Overview"
=======
<<<<<<< HEAD
              src="https://w0.peakpx.com/wallpaper/492/652/HD-wallpaper-lines-of-html-codes.jpg"
=======
              src="https://img.freepik.com/free-vector/html5-programming-landing-page_23-2148815798.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
              alt="HTML Overview"
>>>>>>> 687577e6dfded0f39cb0a95794994b1ad39d0be8
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <ul className="list-unstyled fs-5 mb-0 card p-4 shadow border-0">
              <li className="mb-2"><CheckCircle className="text-success me-2" /> HTML Document Structure</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> Headings, Paragraphs, and Lists</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> Links, Images & Tables</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> Forms, Inputs, and Media Tags</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> Semantic Elements & HTML5 Features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Topics Covered</h2>
          <div className="row g-4 text-center">
            {["HTML Tags", "Elements & Attributes", "Forms & Controls", "Multimedia", "Entities", "Tables", "iFrames", "HTML5 APIs"].map((topic, index) => (
              <div key={index} className="col-6 col-md-3" data-aos="zoom-in">
                <div className="p-3 border rounded shadow-sm bg-light h-100">{topic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Practice Projects</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="card-title">Simple Portfolio</h5>
                <p className="card-text">Build your first personal page with bio, image, and contact details using pure HTML.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="card-title">Survey Form</h5>
                <p className="card-text">Create a form with inputs, radio buttons, and submission using only HTML.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="card-title">Product Table</h5>
                <p className="card-text">Design a product listing table with rows, columns, and basic styling using HTML only.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Why Learn HTML?</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4" data-aos="fade-right">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Universal Skill</h5>
                <p>HTML is the backbone of every website and web application.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Easy to Learn</h5>
                <p>Great for beginners and requires no prior programming knowledge.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Foundation for Web Dev</h5>
                <p>Essential before moving to CSS, JavaScript, React, or full-stack development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HtmlCourse;
