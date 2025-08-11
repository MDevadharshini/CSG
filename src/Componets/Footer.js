import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="text-white fw-bold">CSG</span>
              </div>
              <span className="fs-5 fw-bold">Computer Education</span>
            </div>
            <p>
              Empowering careers through technology education. Join us to learn
              industry-relevant skills and transform your professional journey.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-light">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-light">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-light">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career-guidance"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link
                  to="/placement-assistance"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Placement Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h5 className="mb-3">Popular Courses</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/courses/java"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Java Programming
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/photoshop"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Adobe Photoshop
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/tally"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Tally Accounting
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/html"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/cad"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  AutoCAD
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/excel"
                  className="text-light text-decoration-none d-block mb-2"
                >
                  MS Excel Advanced
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="d-flex mb-2">
                <MapPin className="me-2 text-primary" />
                <div>
                  <div>123 Education Street</div>
                  <div>Tech City, TC 12345</div>
                  <div>Near Central Mall</div>
                </div>
              </li>
              <li className="d-flex mb-2">
                <Phone className="me-2 text-primary" />
                <div>
                  <div>+91 98765 43210</div>
                  <div>+91 87654 32109</div>
                </div>
              </li>
              <li className="d-flex mb-2">
                <Mail className="me-2 text-primary" />
                <div>
                  <div>info@csgeducation.com</div>
                  <div>admissions@csgeducation.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <hr className="border-secondary" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
          <p className="mb-2 mb-md-0 small text-secondary">
            © 2024 CSG Computer Education. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <Link
              to="/privacy-policy"
              className="text-secondary text-decoration-none small"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-secondary text-decoration-none small"
            >
              Terms of Service
            </Link>
            <Link
              to="/refund-policy"
              className="text-secondary text-decoration-none small"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
