import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const CProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5" data-aos="zoom-in">C Programming</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Learn the foundation of all modern programming — C Language, from basics to real-world projects.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img

              src="https://img.freepik.com/free-vector/abstract-program-code-background_23-2148814432.jpg"

              alt="C Programming"
              className="img-fluid shadow"
              style={{ borderRadius: "40px 10px 40px 10px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">📘 What You'll Learn</h5>
              <ul className="fs-5">
                <li>✅ Introduction to C Programming</li>
                <li>✅ Data Types, Variables & Constants</li>
                <li>✅ Input & Output Operations</li>
                <li>✅ Operators & Expressions</li>
                <li>✅ Decision Making (if, switch)</li>
                <li>✅ Loops (for, while, do-while)</li>
                <li>✅ Functions (User-defined & Built-in)</li>
                <li>✅ Arrays (1D & 2D)</li>
                <li>✅ Pointers and Memory Management</li>
                <li>✅ Strings & String Manipulation</li>
                <li>✅ Structures & Unions</li>
                <li>✅ File Handling (Read/Write)</li>
                <li>✅ Dynamic Memory Allocation</li>
                <li>✅ Error Handling & Debugging</li>
                <li>✅ Modular Programming Concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Advantages */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Tools & Career Advantages</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card text-center p-4 border-0 shadow h-100">
              <h5 className="fw-bold">🧠 C as Foundation</h5>
              <p>Mastering C gives you the base for languages like C++, Java, Python, and embedded systems.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card text-center p-4 border-0 shadow h-100">
              <h5 className="fw-bold">💼 Career Opportunities</h5>
              <p>Open doors in system programming, firmware development, and IoT using C.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card text-center p-4 border-0 shadow h-100">
              <h5 className="fw-bold">🛠️ IDEs & Compilers</h5>
              <p>Use Turbo C, GCC, Code::Blocks, Dev C++, or VSCode for writing and debugging C programs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Project */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Real-World Project</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-left">
            <img

              src="https://img.freepik.com/premium-photo/computer-programming-coding-software-development-concept_34629-300.jpg"

              alt="C Project"
              className="img-fluid shadow"
              style={{ borderRadius: "10px 50px 10px 50px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="card p-4 border-0 shadow">
              <h5 className="fw-bold mb-3">💡 Student Record Management System</h5>
              <p className="fs-5">
                Build a terminal-based student management system with add/edit/delete/search functionalities using file handling, structures, and menus — a complete real-time mini project in C.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} C Programming Course | Powered by Infronex</small>
      </footer>
    </div>
  );
};

export default CProgramming;
