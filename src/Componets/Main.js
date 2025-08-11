import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./CSS/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close offcanvas menu when clicking a link (optional)
  useEffect(() => {
    if (!menuOpen) return;

    const handleClose = () => setMenuOpen(false);

    // Bootstrap offcanvas elements auto-close on link click, but if you want to enforce it:
    document.querySelectorAll("#mobileMenu a").forEach((el) => {
      el.addEventListener("click", handleClose);
    });

    return () => {
      document.querySelectorAll("#mobileMenu a").forEach((el) => {
        el.removeEventListener("click", handleClose);
      });
    };
  }, [menuOpen]);

  return (
    <div className="sticky">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm py-3 px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Brand */}
          <a className="navbar-brand fw-bold fs-3 text-dark animated-brand" href="#">
            <span className="brand-part animate-text delay-1">CSG</span>
            <span className="brand-part animate-text delay-2 text-primary">Computer</span>
            <span className="brand-part animate-text delay-3">Education</span>
            <span className="dot"></span>
          </a>

          {/* Custom Toggle Button */}
          <button
            className={`custom-toggler d-lg-none ${menuOpen ? "open" : ""}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-expanded={menuOpen}
            onClick={handleToggle}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex justify-content-between w-100" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link active text-primary">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown mx-2 hover-dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu custom-dropdown-menu">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Software Development
                    </a>
                    <ul className="dropdown-menu-1 dropdown-sub-right">
                      <li className="dropdown-item-1">
                        <Link to="/AspDotNet" className="dropdown-link">
                          ASP.NET
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/Python" className="dropdown-link">
                          Python
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/JavaProgramming" className="dropdown-link">
                          Java Programming
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/J2EE" className="dropdown-link">
                          J2EE
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/J2ME" className="dropdown-link">
                          J2ME
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/VBScript" className="dropdown-link">
                          VBScript
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/FoxPro" className="dropdown-link">
                          Foxpro Programming
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Programming Languages
                    </a>
                    <ul className="dropdown-menu-2 dropdown-sub-right">
                      <li className="dropdown-item-2">
                        <Link to="/CProgramming" className="dropdown-link">
                          C Programming
                        </Link>
                      </li>
                      <li className="dropdown-item-2">
                        <Link to="/CPlusPlus" className="dropdown-link">
                          C++ Programming
                        </Link>
                      </li>
                      <li className="dropdown-item-2">
                        <Link to="/Java" className="dropdown-link">
                          Java
                        </Link>
                      </li>
                      <li className="dropdown-item-2">
                        <Link to="/Sql" className="dropdown-link">
                          SQL
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/VBScript" className="dropdown-link">
                          VBScript
                        </Link>
                      </li>
                      <li className="dropdown-item-1">
                        <Link to="/Python" className="dropdown-link">
                          Python
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Web Technologies
                    </a>
                    <ul className="dropdown-menu-3 dropdown-sub-right">
                      <li className="dropdown-item-3">
                        <Link to="/E-commerce" className="dropdown-link">
                          E Commerce
                        </Link>
                      </li>
                      <li className="dropdown-item-3">
                        <Link to="/Design" className="dropdown-link">
                          Web Design
                        </Link>
                      </li>
                      <li className="dropdown-item-3">
                        <Link to="/AspDotNet" className="dropdown-link">
                          ASP.NET
                        </Link>
                      </li>
                      <li className="dropdown-item-3">
                        <Link to="/Html" className="dropdown-link">
                          HTML
                        </Link>
                      </li>
                      <li className="dropdown-item-3">
                        <Link to="/Xml" className="dropdown-link">
                          XML
                        </Link>
                      </li>
                      <li className="dropdown-item-3">
                        <Link to="/internet" className="dropdown-link">
                          Internet
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Office & Computer Basics
                    </a>
                    <ul className="dropdown-menu-4 dropdown-sub-right">
                      <li className="dropdown-item-4">
                        <a href="#" className="dropdown-link">
                          Basic Computers
                        </a>
                      </li>
                      <li className="dropdown-item-4">
                        <a href="#" className="dropdown-link">
                          MS Excel
                        </a>
                      </li>
                      <li className="dropdown-item-4">
                        <a href="#" className="dropdown-link">
                          MS Windows
                        </a>
                      </li>
                      <li className="dropdown-item-4">
                        <a href="#" className="dropdown-link">
                          Windows 2000
                        </a>
                      </li>
                      <li className="dropdown-item-4">
                        <a href="#" className="dropdown-link">
                          Windows NT
                        </a>
                      </li>
                      <li className="dropdown-item-4">
                        <a href="#" className="dropdown-link">
                          HDCA
                        </a>
                      </li>
                      <li className="dropdown-item-4">
                        <a href="#" className="dropdown-link">
                          DCA
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Multimedia & Design
                    </a>
                    <ul className="dropdown-menu-5 dropdown-sub-right">
                      <li className="dropdown-item-5">
                        <Link to="/Animation" className="dropdown-link">
                          3D Animation
                        </Link>
                      </li>
                      <li className="dropdown-item-5">
                        <Link to="/Adobe" className="dropdown-link">
                          Adobe
                        </Link>
                      </li>
                      <li className="dropdown-item-5">
                        <Link to="/Flash" className="dropdown-link">
                          Flash
                        </Link>
                      </li>
                      <li className="dropdown-item-5">
                        <Link to="/CorelDRAW" className="dropdown-link">
                          CorelDRAW
                        </Link>
                      </li>
                      <li className="dropdown-item-5">
                        <Link to="/DTP" className="dropdown-link">
                          DTP
                        </Link>
                      </li>
                      <li className="dropdown-item-5">
                        <Link to="/GraphicDesigning" className="dropdown-link">
                          Graphic Designing
                        </Link>
                      </li>
                      <li className="dropdown-item-5">
                        <Link to="/Multimedia" className="dropdown-link">
                          Multimedia
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Non-IT Courses
                    </a>
                    <ul className="dropdown-menu-6 dropdown-sub-right">
                     <Link to="/Accounting"> <li className="dropdown-item-6">
                        <a href="#" className="dropdown-link">
                          Accounting
                        </a>
                      </li></Link>
                     <Link to="/Cad"> <li className="dropdown-item-6">
                        <a href="#" className="dropdown-link">
                          CAD
                        </a>
                      </li></Link>
                      <Link to="/MechanicalCad"><li className="dropdown-item-6">
                        <a href="#" className="dropdown-link">
                          Mechanical Cad
                        </a>
                      </li></Link>
                     <Link to="/Tally"> <li className="dropdown-item-6">
                        <a href="#" className="dropdown-link">
                          Tally
                        </a>
                      </li></Link>
                      <Link to="/Typing">
                      <li className="dropdown-item-6">
                        <a href="#" className="dropdown-link">
                          Typing
                        </a>
                      </li></Link>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Mentor
                </a>
              </li>

              <li className="nav-item dropdown mx-2 hover-dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Group
                </a>
                <ul className="dropdown-menu custom-dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Students
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Alumni
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Intern Group
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Docs
                </a>
              </li>
            </ul>

            <div>
              <button className="btn btn-primary me-2">Sign In</button>
              <button className="btn btn-warning border">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Sidebar for Mobile */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        // onHide is invalid on div, so removing
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold text-primary" id="mobileMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setMenuOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body text-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdownMobile"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdownMobile">
                <li>
                  <a className="dropdown-item" href="#">
                    Software Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Programming Languages
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web Technologies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Office & Computer Basics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Multimedia & Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Non-IT Courses
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Mentor
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="groupDropdownMobile"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Group
              </a>
              <ul className="dropdown-menu" aria-labelledby="groupDropdownMobile">
                <li>
                  <a className="dropdown-item" href="#">
                    Students
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Alumni
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Intern Group
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>

            <li className="nav-item mt-3">
              <button className="btn btn-primary w-100" onClick={() => setMenuOpen(false)}>
                Sign In
              </button>
              <button className="btn btn-warning border w-100 mt-2" onClick={() => setMenuOpen(false)}>
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
