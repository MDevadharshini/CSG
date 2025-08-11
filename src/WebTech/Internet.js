import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

const InternetCourse = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section with Background Image */}
      <section
        className="text-white py-5 d-flex align-items-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20240409/pngtree-concept-of-global-internet-connection-network-world-provided-by-nasa-image_15651776.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <div className="container text-center" data-aos="zoom-in">
          <h1 className="fw-bold display-4">🌐 Internet Full Course</h1>
          <p className="lead mt-3">
            Explore the fundamentals of the internet – from basic networking to
            how the web really works.
          </p>
          <a href="#overview" className="btn btn-light btn-lg mt-3">
            Start Learning
          </a>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
          Course Overview
        </h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://thumbs.dreamstime.com/b/global-digital-glowing-orange-map-wallpaper-worldwide-data-analysis-internet-network-connection-futuristic-interface-planet-384800235.jpg"
              alt="Internet Overview"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <ul className="list-unstyled fs-5 mb-0 card p-4 shadow border-0">
              <li className="mb-2">
                <CheckCircle className="text-success me-2" /> What is the
                Internet?
              </li>
              <li className="mb-2">
                <CheckCircle className="text-success me-2" /> How Internet Works
                (DNS, IP)
              </li>
              <li className="mb-2">
                <CheckCircle className="text-success me-2" /> Protocols: HTTP,
                TCP/IP, FTP
              </li>
              <li className="mb-2">
                <CheckCircle className="text-success me-2" /> Web Browsers &
                Servers
              </li>
              <li className="mb-2">
                <CheckCircle className="text-success me-2" /> Cloud, Hosting &
                Domains
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
            Topics Covered
          </h2>
          <div className="row g-4 text-center">
            {[
              "IP & DNS",
              "Web Browsers",
              "Web Servers",
              "HTTP/HTTPS",
              "TCP/IP Model",
              "Cloud Basics",
              "Web Hosting",
              "Internet Security",
              "CDN & Caching",
              "Email Protocols (SMTP, IMAP)"
            ].map((topic, index) => (
              <div key={index} className="col-6 col-md-3" data-aos="zoom-in">
                <div className="p-3 border rounded shadow-sm bg-light h-100">
                  {topic}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Projects */}
      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
          Practice Projects
        </h2>
        <div className="row g-4">
          {[
            {
              title: "DNS Lookup Tool",
              desc: "Build a simple tool to fetch IPs of domains using online DNS APIs.",
            },
            {
              title: "HTTP Request Viewer",
              desc: "Create a tool that sends and receives HTTP requests using forms.",
            },
            {
              title: "Web Hosting Simulation",
              desc: "Simulate hosting a basic HTML site using local servers or free tools.",
            },
            {
              title: "Network Speed Checker",
              desc: "Make a tool to check download and upload speeds using APIs.",
            },
            {
              title: "Simple Chat App",
              desc: "Learn socket connections by building a basic online chat system.",
            },
          ].map((project, i) => (
            <div className="col-md-4" data-aos="fade-up" key={i}>
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
            Why Learn About the Internet?
          </h2>
          <div className="row g-4 text-center">
            <div className="col-md-4" data-aos="fade-right">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Know the Backbone</h5>
                <p>
                  Understanding the internet is key to mastering modern
                  technologies.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Boost Web Dev Skills</h5>
                <p>
                  Front-end or back-end, everything runs on the internet
                  infrastructure.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div className="p-4 border rounded shadow-sm bg-secondary h-100">
                <h5>Secure & Deploy</h5>
                <p>
                  Gain knowledge of hosting, domains, DNS, and web security
                  essentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Learning Resources */}
      <section className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
          Additional Learning Resources
        </h2>
        <div className="row g-4">
          {[
            {
              title: "MDN Web Docs",
              link: "https://developer.mozilla.org/en-US/",
              desc: "Best documentation for learning about web technologies.",
            },
            {
              title: "W3Schools Internet Basics",
              link: "https://www.w3schools.com/whatis/",
              desc: "Quick tutorials on internet-related concepts.",
            },
            {
              title: "Cloudflare Learning Center",
              link: "https://www.cloudflare.com/learning/",
              desc: "Learn about internet security, DNS, and performance.",
            },
          ].map((res, idx) => (
            <div className="col-md-4" data-aos="fade-up" key={idx}>
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="card-title">{res.title}</h5>
                  <p className="card-text">{res.desc}</p>
                  <a
                    href={res.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InternetCourse;
