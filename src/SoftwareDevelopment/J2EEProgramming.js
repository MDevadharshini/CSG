import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const J2EEProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5" data-aos="zoom-in">J2EE Programming</h1>
          <p className="lead mt-3" data-aos="fade-up">
            Master Java Enterprise Edition to build robust, scalable, and secure enterprise-level web applications.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>

        <div className="row g-4 align-items-center flex-md-row-reverse">
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="https://i.pinimg.com/736x/4a/66/93/4a6693085263beec34f4e6272fe4b0e9.jpg"
              alt="J2EE Development"
              className="img-fluid shadow"
              style={{ borderRadius: "30px 0px 30px 0px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="card p-4 border-0 shadow hover-card">
              <h5 className="fw-bold mb-3">J2EE Enterprise Development</h5>
              <p className="fs-5 mb-3">
                This course introduces you to Java EE technologies and frameworks used to develop scalable enterprise applications. Through hands-on practice and real-world projects, you'll gain in-depth knowledge of:
              </p>
              <ul className="fs-5 mb-0">
                <li>🌐 Servlets & JSP</li>
                <li>🧠 Enterprise JavaBeans (EJB)</li>
                <li>🧩 MVC Design Pattern</li>
                <li>🔌 Web Services (REST/SOAP)</li>
                <li>🚀 Deployment using Apache Tomcat / GlassFish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Learn */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">What You Will Learn</h2>
        <div className="row text-center g-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold mb-3">Java Web Fundamentals</h5>
              <p>Understand HTTP, Servlet lifecycle, and Java web components to build modern web applications.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold mb-3">Enterprise Architecture</h5>
              <p>Implement multi-tier applications using J2EE layers (Presentation, Business, Data).</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold mb-3">Database Integration</h5>
              <p>Use JDBC with MySQL to perform CRUD operations and manage persistent data in enterprise apps.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Tools & Technologies Used</h2>
        <div className="row text-center g-4">
          <div className="col-md-3" data-aos="zoom-in">
            <div className="bg-white p-3 shadow rounded h-100">Java SE & JDK</div>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-white p-3 shadow rounded h-100">Apache Tomcat</div>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-white p-3 shadow rounded h-100">MySQL</div>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="300">
            <div className="bg-white p-3 shadow rounded h-100">Eclipse / IntelliJ</div>
          </div>
        </div>
      </div>

      {/* Real-World Project */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Real-World Project</h2>
        <div className="row g-4 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img
              src="https://img.freepik.com/free-photo/digital-business-background_53876-97918.jpg"
              alt="J2EE Project"
              className="img-fluid shadow"
              style={{ borderRadius: "0 40px 0 40px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow hover-card">
              <h5 className="fw-bold mb-3">📘 Online Bookstore Project</h5>
              <p className="fs-5 mb-0">
                Build a complete online bookstore system that includes:
              </p>
              <ul className="fs-5 mt-3">
                <li>🧑‍💼 Admin & User Login</li>
                <li>📚 Book Search & Categories</li>
                <li>🛒 Shopping Cart & Checkout</li>
                <li>📦 Order History</li>
                <li>🗃️ Database-backed Inventory System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Career Opportunities</h2>
        <div className="row text-center g-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold mb-2">Java Developer</h5>
              <p>Develop backend applications using J2EE, Servlets, and JDBC.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold mb-2">Web Application Engineer</h5>
              <p>Build dynamic web apps using JSP and MVC architecture.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="fw-bold mb-2">Enterprise Application Architect</h5>
              <p>Design scalable multi-tier enterprise systems for large organizations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} J2EE Programming Course | Powered by Infronex</small>
      </footer>
    </div>
  );
};

export default J2EEProgramming;
