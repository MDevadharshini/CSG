import React from "react";
import { CheckCircle, Code, Star } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const XMLCourse = () => {
  return (
    <div className="bg-light text-dark py-5">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-4">📄 XML Programming</h1>
          <p className="lead">Structure your data for easy storage, sharing, and integration using XML.</p>
        </div>
      </section>

      {/* Overview */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <img

            
              src="https://img.freepik.com/free-photo/data-management-system-database-technology_53876-124661.jpg"

              alt="XML Programming"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow">
              <ul className="list-unstyled fs-5 mb-0">
                <li className="mb-2"><CheckCircle className="text-success me-2" /> XML Syntax & Structure</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> Elements, Attributes, Hierarchies</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> Namespaces, DTD, and XSD</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> XPath, XQuery & XSLT</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> XML with JavaScript, DOM & SAX</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> XML in APIs and Web Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* XML vs HTML */}
      <div className="container my-5">
        <h3 className="fw-bold mb-3">🔍 XML vs HTML</h3>
        <table className="table table-bordered bg-white shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>Feature</th>
              <th>XML</th>
              <th>HTML</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purpose</td>
              <td>Data storage and transport</td>
              <td>Data presentation</td>
            </tr>
            <tr>
              <td>User-defined tags</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Structure requirement</td>
              <td>Must be well-formed</td>
              <td>Can be loosely structured</td>
            </tr>
            <tr>
              <td>Focus</td>
              <td>Content & Data</td>
              <td>Design & Layout</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Topics Covered */}
      <div className="container my-5">
        <h3 className="fw-bold mb-3">📚 Topics Covered</h3>
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item">Well-formed vs Valid XML</li>
          <li className="list-group-item">DTD and XML Schema (XSD)</li>
          <li className="list-group-item">XPath & XQuery navigation and filtering</li>
          <li className="list-group-item">Transforming XML with XSLT</li>
          <li className="list-group-item">Parsing XML with DOM/SAX using JS or Java</li>
          <li className="list-group-item">Integration with REST/SOAP Web Services</li>
        </ul>
      </div>

      {/* Who Should Learn */}
      <div className="container my-5">
        <h3 className="fw-bold mb-3">🧑‍🎓 Who Should Learn XML?</h3>
        <ul className="fs-5">
          <li>Web developers working with APIs or AJAX</li>
          <li>Data analysts handling structured datasets</li>
          <li>Software testers and QA engineers</li>
          <li>Students preparing for competitive IT exams</li>
        </ul>
      </div>

      {/* Real-World Uses */}
      <div className="container my-5">
        <h3 className="fw-bold mb-3">🛠️ Real-World Applications</h3>
        <ul className="fs-5">
          <li>RSS feeds and podcast distribution</li>
          <li>Android layout configuration files</li>
          <li>SOAP-based web services</li>
          <li>Data transfer in e-commerce platforms</li>
          <li>Configuration and manifest files in software</li>
        </ul>
      </div>

      {/* Sample XML Code */}
      <div className="container my-5">
        <h3 className="fw-bold mb-3">📘 Sample XML Code</h3>
        <pre className="bg-dark text-white p-3 rounded-3 shadow-sm">
{`<?xml version="1.0" encoding="UTF-8"?>
<products>
  <product id="101">
    <name>Wireless Mouse</name>
    <price>499</price>
    <category>Accessories</category>
  </product>
  <product id="102">
    <name>Keyboard</name>
    <price>799</price>
    <category>Accessories</category>
  </product>
</products>`}
        </pre>
      </div>

      {/* Mini Project */}
      <div className="container my-5">
        <h3 className="fw-bold mb-3">🚀 Mini Project</h3>
        <p className="fs-5">
          Create a structured **XML product catalog** and transform it into an HTML product listing using **XSLT**. Add schema validation (XSD) to ensure correctness.
        </p>
      </div>

      {/* Certification & Duration */}
      <div className="container my-5">
        <h3 className="fw-bold mb-3">📜 Certification & Duration</h3>
        <ul className="fs-5">
          <li>🕒 Duration: 2 Weeks (Weekend Batch Available)</li>
          <li>📌 Mode: Online & Offline</li>
          <li>📄 Certificate: XML Programming Certificate on Completion</li>
        </ul>
      </div>
    </div>
  );
};

export default XMLCourse;
