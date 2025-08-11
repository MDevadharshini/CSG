import React, { useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./CSS/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };


  // Add this useEffect inside your component to handle mobile submenu toggle



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
              <li className="nav-item mx-2"><a className="nav-link active text-primary" href="/">Home</a></li>


               <Link to='/about'> <li className="nav-item mx-2"><a className="nav-link" href="#">About</a></li></Link>
<li className="nav-item dropdown mx-2 hover-dropdown">
  <a className="nav-link dropdown-toggle" href="#">Courses</a>
  <ul className="dropdown-menu custom-dropdown-menu">
   <li className="dropdown-submenu">
  <a className="dropdown-item dropdown-toggle" id="drop-one" href="#">
    Software Development
  </a>
  <ul className="dropdown-menu-1 dropdown-sub-right">
 <Link to="/AspDotNet"><li className="dropdown-item-1"><a  href="#">ASP.NET</a></li></Link>
  <Link to="/Python"><li className="dropdown-item-1"><a  href="#">Python</a></li></Link>
  <Link to="/JavaProgramming"><li className="dropdown-item-1"><a  href="#">Java Programming</a></li></Link>
  <Link to="/J2EE"> <li className="dropdown-item-1"><a href="#">J2EE</a></li></Link>
   
    <Link to="/J2ME"><li className="dropdown-item-1"><a  href="#">J2ME</a></li></Link>
   <Link to="/VBScript">  <li className="dropdown-item-1"><a  href="#">VBScript</a></li></Link>
   <Link to="/FoxPro"> <li className="dropdown-item-1"><a  href="#">Foxpro Programming</a></li></Link>
  </ul> 
</li>


    <li className="dropdown-submenu">
      <a className="dropdown-item dropdown-toggle" id="drop-two" href="#">Programming Languages</a>
      <ul className="dropdown-menu-2 dropdown-sub-right">
       <Link to="/CProgramming"><li className=" dropdown-item-2"><a  href="#">C Programming</a></li></Link>
       <Link to="/CPlusPlus"><li className=" dropdown-item-2"><a  href="#">C++ Programming</a></li></Link>
       <Link to="/Java"><li className=" dropdown-item-2"><a  href="#">Java</a></li></Link>
        <Link to="/Sql"><li className=" dropdown-item-2"><a  href="#"> SQL</a></li></Link>
         <Link to="/VBScript">  <li className="dropdown-item-1"><a  href="#">VBScript</a></li></Link>
         <Link to="/Python"><li className="dropdown-item-1"><a  href="#">Python</a></li></Link>

      </ul>
    </li>


      <li className="dropdown-submenu">
      <a className="dropdown-item dropdown-toggle" id="drop-two" href="#">Web Technologies</a>
      <ul className="dropdown-menu-3 dropdown-sub-right">
             <Link to="/E-commerce">   <li className=" dropdown-item-3"><a  href="#">  E Commerce</a></li></Link>
       <Link to="/Design"> <li className=" dropdown-item-3"><a  href="#">  Web Design</a></li></Link>
        {/* <li className=" dropdown-item-3"><a  href="#">  Web Hosting</a></li>
        <li className=" dropdown-item-3"><a  href="#">  Web Development</a></li> */}
         <Link to="/AspDotNet"><li className="dropdown-item-1"><a  href="#">ASP.NET</a></li></Link>
       
     <Link to="/Html" >    <li className=" dropdown-item-3"><a  href="#"> HTML</a></li></Link>
        <Link to="/Xml"><li className=" dropdown-item-3"><a  href="#"> XML</a></li></Link>
        <li className=" dropdown-item-3"><a  href="#">  Internet</a></li>

      </ul>
    </li>



      <li className="dropdown-submenu">
      <a className="dropdown-item dropdown-toggle" id="drop-two" href="#">Office & Computer Basics</a>
      <ul className="dropdown-menu-4 dropdown-sub-right">
                <li className=" dropdown-item-4"><a  href="#"> Basic Computers</a></li>
        <li className=" dropdown-item-4"><a  href="#"> MS Excel</a></li>
        <li className=" dropdown-item-4"><a  href="#"> Ms Windows</a></li>
        <li className=" dropdown-item-4"><a  href="#"> Windows 2000</a></li>
        <li className=" dropdown-item-4"><a  href="#">  Windows NT</a></li>
        <li className=" dropdown-item-4"><a  href="#"> HDCA</a></li>
        <li className=" dropdown-item-4"><a  href="#"> DCA</a></li>


      </ul>
    </li>




 <li className="dropdown-submenu">
      <a className="dropdown-item dropdown-toggle" id="drop-two" href="#">Multimedia & Design</a>
      <ul className="dropdown-menu-5 dropdown-sub-right">
                <Link to="/Animation"><li className=" dropdown-item-5"><a  href="#"> 3D Animation</a></li></Link>
        <Link to="/Adobe"><li className=" dropdown-item-5"><a  href="#">  Adobe</a></li></Link>
         <Link to="/Flash"><li className=" dropdown-item-5"><a  href="#"> Flash</a></li></Link>
         <Link to="/CorelDRAW"><li className=" dropdown-item-5"><a  href="#"> CorelDRAW</a></li></Link>
        <Link to="/DTP"><li className=" dropdown-item-5"><a  href="#"> DTP</a></li></Link> 
        <Link to="/ Graphic Designing"><li className=" dropdown-item-5"><a  href="#"> Graphic Designing</a></li></Link> 
         <Link to="/ Multimedia"><li className=" dropdown-item-5"><a  href="#"> Multimedia</a></li></Link>


      </ul>
    </li>
   
     <li className="dropdown-submenu">
      <a className="dropdown-item dropdown-toggle" id="drop-two" href="#">Non-IT Courses</a>
      <ul className="dropdown-menu-6 dropdown-sub-right">
                <li className=" dropdown-item-6"><a  href="#">Accounting</a></li>
        <li className=" dropdown-item-6"><a  href="#"> CAD</a></li>
        <li className=" dropdown-item-6"><a  href="#"> Mechanical Cad</a></li>
        <li className=" dropdown-item-6"><a  href="#"> Tally</a></li>


        <li className=" dropdown-item-6"><a  href="#"> Typing</a></li>
      


    


      </ul>
    </li>

  </ul>
</li>


              <li className="nav-item mx-2"><a className="nav-link" href="#">Mentor</a></li>

              <li className="nav-item dropdown mx-2 hover-dropdown">
                <a className="nav-link dropdown-toggle" href="#">Group</a>
                <ul className="dropdown-menu custom-dropdown-menu">
                  <li><a className="dropdown-item" href="#">Students</a></li>
                  <li><a className="dropdown-item" href="#">Alumni</a></li>
                  <li><a className="dropdown-item" href="#">Intern Group</a></li>
                </ul>
              </li>

              <li className="nav-item mx-2"><a className="nav-link" href="#">Testimonial</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#">Docs</a></li>
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
        onHide={() => setMenuOpen(false)}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold text-primary " id="mobileMenuLabel">Menu</h5>
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
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="coursesDropdownMobile" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdownMobile">
                <li><a className="dropdown-item" href="#">Software Development</a></li>
                <li><a className="dropdown-item" href="#">Programming Languages</a></li>
                <li><a className="dropdown-item" href="#">Web Technologies</a></li>
                <li><a className="dropdown-item" href="#">Office & Computer Basics</a></li>
                <li><a className="dropdown-item" href="#">Multimedia & Design</a></li>
                <li><a className="dropdown-item" href="#">Non-IT Courses</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">Mentor</a></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="groupDropdownMobile" role="button" data-bs-toggle="dropdown" aria-expanded="false">Group</a>
              <ul className="dropdown-menu" aria-labelledby="groupDropdownMobile">
                <li><a className="dropdown-item" href="#">Students</a></li>
                <li><a className="dropdown-item" href="#">Alumni</a></li>
                <li><a className="dropdown-item" href="#">Intern Group</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">Testimonial</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Docs</a></li>

            <li className="nav-item mt-3">
              <button className="btn btn-primary w-100">Sign In</button>
              <button className="btn btn-warning border w-100 mt-2">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
