import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Swal from "sweetalert2";

const VBScriptProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Registered Successfully!",
      text: `Welcome, ${formData.name}!`,
    });
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold display-5" data-aos="zoom-in">VBScript Programming</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Master VBScript to automate tasks and create powerful Windows scripts.
          </p>
          <button
            className="btn btn-outline-light mt-3"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Enroll Now
          </button>
        </div>
      </section>

      {/* Course Overview */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4 flex-md-row-reverse align-items-center">
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="https://img.freepik.com/free-photo/programming-background-with-html-code_23-2150038862.jpg"
              alt="VBScript"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="card p-4 shadow border-0">
              <ul className="fs-5">
                <li>✅ VBScript Syntax & Basics</li>
                <li>✅ Variables, Constants & Operators</li>
                <li>✅ If, For, While Loops</li>
                <li>✅ Windows Scripting Host (WSH)</li>
                <li>✅ File, Folder, and Registry Handling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Live Example Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4" data-aos="fade-up">🧪 Live Code Example</h2>
        <div className="card shadow p-4" data-aos="zoom-in">
          <h5 className="fw-bold mb-3">Sample VBScript to Create a Folder</h5>
          <pre className="bg-dark text-white p-3 rounded">
            {`
Set fso = CreateObject("Scripting.FileSystemObject")
Set folder = fso.CreateFolder("C:\\ExampleFolder")
WScript.Echo "Folder Created Successfully!"
            `}
          </pre>
          <p className="mt-3">📁 This script creates a new folder in C:\</p>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4" data-aos="fade-up">📚 Course Syllabus</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {[
            "Introduction to VBScript & Environment Setup",
            "Variables, Constants & Operators",
            "Control Structures (If, For, While)",
            "Arrays, Functions & Procedures",
            "File Handling with FileSystemObject",
            "Windows Scripting Host Integration",
            "Working with Excel, Word via VBScript",
            "Mini Project: Auto Backup Script",
          ].map((topic, idx) => (
            <div className="col" key={idx} data-aos="fade-up">
              <div className="card p-3 shadow-sm border-0 h-100">
                <span className="fw-bold">📘 Week {idx + 1}:</span> {topic}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <div className="modal fade" id="registerModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header">
              <h5 className="modal-title">Register for VBScript Course</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} VBScript Course | Powered by Infronex</small>
      </footer>
    </div>
  );
};

export default VBScriptProgramming;
