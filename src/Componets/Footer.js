import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(to bottom, #000, #1e3ca7)",
        color: "#fff",
        textAlign: "center",
        paddingTop: "6rem",
        paddingBottom: "2rem",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Blue wave SVG background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "150px",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            d="M0 67 C 273,183 822,-40 1200,67 L1200 120 L0 120 Z"
            fill="#3a72d3"
          />
          <path
            d="M0 77 C 473,263 822,10 1200,77 L1200 120 L0 120 Z"
            fill="#2a59b7"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Social Media Icons */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: "1rem" }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff", fontSize: "1.5rem" }}
        >
          <FaInstagram />
        </a>
      </div>

      {/* Navigation Links */}
      <nav
        style={{
          position: "relative",
          zIndex: 1,
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      >
        <a href="/" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>
          Home
        </a>
        <a href="/about" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>
          About
        </a>
        <a href="/services" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>
          Services
        </a>
        <a href="/team" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>
          Team
        </a>
        <a href="/contact" style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}>
          Contact
        </a>
      </nav>

      {/* Copyright */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "0.9rem",
          opacity: 0.8,
        }}
      >
        &copy; 2025 CSG Computer Education | All Rights Reserved
      </div>
    </footer>
  );
}
