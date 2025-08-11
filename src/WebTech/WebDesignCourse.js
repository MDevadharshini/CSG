import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

const WebDesignCourse = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center" data-aos="zoom-in">
          <h1 className="fw-bold display-5">🌐 Web Design Course</h1>
          <p className="lead mt-3">
            Learn how to design stunning, user-friendly websites using HTML, CSS, JavaScript, and modern tools.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg"
              alt="Web Design Overview"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <ul className="list-unstyled fs-5 mb-0 card p-4 shadow border-0">
              <li className="mb-2"><CheckCircle className="text-success me-2" /> HTML5 Semantic Layouts</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> CSS3 Styling and Animations</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> Responsive Design with Bootstrap</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> JavaScript for Interactivity</li>
              <li className="mb-2"><CheckCircle className="text-success me-2" /> Real Projects: Portfolio, Blog, and Business Sites</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Technologies Covered</h2>
          <div className="row g-4 text-center">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Bootstrap",
              "Figma",
              "Canva",
              "Photoshop (Basics)",
              "GitHub Pages"
            ].map((tech, index) => (
              <div key={index} className="col-6 col-md-3" data-aos="zoom-in">
                <div className="p-3 border rounded shadow-sm bg-light h-100">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Samples */}
      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Projects You'll Build</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="flip-left">
            <div className="card shadow border-0">
              <img
                src="https://tint.creativemarket.com/oqGLpyYAn1RZjWSPznhNiM_XLYnUDjtYpvRmU_q1krM/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzExNDgvMTE0ODgvMTE0ODgzNzgvcHJldmlldy0zLW8ucG5n?1639717712"
                className="card-img-top rounded-top"
                alt="Portfolio Site"
              />
              <div className="card-body">
                <h5 className="card-title">Personal Portfolio</h5>
                <p className="card-text">Showcase your resume, projects, and achievements in a modern layout.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <div className="card shadow border-0">
              <img
                src="https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-189.jpg"
                className="card-img-top rounded-top"
                alt="E-Commerce Page"
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce Homepage</h5>
                <p className="card-text">Learn layouting, product cards, banners, and responsiveness for stores.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-right">
            <div className="card shadow border-0">
              <img
                src="https://wallpapers.com/images/hd/blogging-backdrop-8ifwoxtwf7mdg268.jpg"
                className="card-img-top rounded-top"
                alt="Blog Design"
              />
              <div className="card-body">
                <h5 className="card-title">Responsive Blog</h5>
                <p className="card-text">Create article layouts, cards, and blog index pages with comments section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Why Choose This Course?</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4" data-aos="fade-right">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Live Practice</h5>
                <p>Design websites live with instructor guidance and immediate feedback.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Hands-On Projects</h5>
                <p>Build multiple projects to demonstrate your skills to employers or clients.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Career Support</h5>
                <p>Get portfolio reviews, resume tips, and job guidance for freelancing or placements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignCourse;
