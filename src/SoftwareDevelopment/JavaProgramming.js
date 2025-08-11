import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const JavaProgramming = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const syllabusItems = [
    {
      title: "Java Basics & Data Types",
      desc: "Understand variables, data types, operators, memory handling, and Java's type safety features."
    },
    {
      title: "Loops & Conditions",
      desc: "Control program flow using if-else, switch cases, and various loop constructs (for, while, do-while)."
    },
    {
      title: "Arrays & Strings",
      desc: "Manipulate arrays and strings using Java’s built-in classes and methods efficiently."
    },
    {
      title: "OOP Concepts",
      desc: "Implement Object-Oriented principles such as classes, objects, inheritance, and abstraction."
    },
    {
      title: "Exception Handling",
      desc: "Use try-catch-finally blocks to handle errors and create custom exception classes."
    },
    {
      title: "Collections Framework",
      desc: "Work with Lists, Sets, Maps using ArrayList, HashMap, TreeSet and learn when to use each."
    },
    {
      title: "File I/O & Streams",
      desc: "Read/write data using InputStream/OutputStream, and handle files with FileReader/Writer."
    },
    {
      title: "GUI with Java Swing",
      desc: "Build user interfaces using JFrame, JButton, JTextField, JTable and event handling."
    },
    {
      title: "JDBC + MySQL Integration",
      desc: "Perform CRUD operations and transactions in Java applications using JDBC and MySQL."
    },
    {
      title: "Final Mini Project",
      desc: "Build a complete desktop app (e.g., inventory system) integrating GUI and database."
    }
  ];

  return (
    <div className="bg-light text-dark py-5">
      {/* Hero Section */}
      <div className="container mb-5">
        <div className="card shadow-lg border-0 bg-dark text-white" data-aos="zoom-in">
          <div className="card-body text-center py-5">
            <h1 className="fw-bold mb-3">Java Programming Course</h1>
            <p className="lead mb-4">
              Learn Java from scratch, master OOP, build real-time GUI apps, and become job-ready!
            </p>
            <Link to="/enroll" className="btn btn-warning fw-semibold px-4 py-2">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overview */}
     <div className="container mb-5">
  <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>

  {/* Java Syntax & Control Flow */}
  <div className="row g-4 mb-4 align-items-center">
    <div className="col-md-6" data-aos="fade-right">
      <img
<<<<<<< HEAD
        src="https://e0.pxfuel.com/wallpapers/226/1020/desktop-wallpaper-java-programming-logo.jpg"
=======
        src="https://img.freepik.com/free-photo/computer-code-abstract-technology-background_53876-104941.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
        alt="Java Syntax"
        className="img-fluid shadow"
        style={{ borderRadius: "20px 0 20px 0" }} // top-left and bottom-right rounded
      />
    </div>
    <div className="col-md-6" data-aos="fade-left">
      <div className="card p-4 border-0 shadow hover-card">
        <h5 className="fw-bold mb-3">Java Syntax & Control Flow</h5>
        <p className="fs-5 mb-0">
          Learn the building blocks of Java including variables, data types, loops, conditionals, and the structure of Java programs.
        </p>
      </div>
    </div>
  </div>

  {/* OOP Concepts */}
  <div className="row g-4 mb-4 align-items-center flex-md-row-reverse">
    <div className="col-md-6" data-aos="fade-left">
      <img
<<<<<<< HEAD
        src="https://c4.wallpaperflare.com/wallpaper/92/845/277/code-java-programming-life-hd-wallpaper-preview.jpg"
=======
        src="https://img.freepik.com/free-photo/artificial-intelligence-concept-with-robot_23-2149278189.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
        alt="OOP Concepts"
        className="img-fluid shadow"
        style={{ borderRadius: "0 30px 0 30px" }} // top-right and bottom-left rounded
      />
    </div>
    <div className="col-md-6" data-aos="fade-right">
      <div className="card p-4 border-0 shadow hover-card">
        <h5 className="fw-bold mb-3">OOP: Inheritance, Polymorphism</h5>
        <p className="fs-5 mb-0">
          Dive deep into object-oriented programming including classes, objects, encapsulation, inheritance, and polymorphism.
        </p>
      </div>
    </div>
  </div>

  {/* Collections & File I/O */}
  <div className="row g-4 mb-4 align-items-center">
    <div className="col-md-6" data-aos="fade-right">
      <img
<<<<<<< HEAD
        src="https://static.vecteezy.com/system/resources/thumbnails/003/665/736/small_2x/business-man-pushing-on-a-touch-screen-interface-java-programming-concept-virtual-machine-photo.jpg"
=======
        src="https://img.freepik.com/free-photo/technology-background-concept-circuit-board-processor_53876-120602.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
        alt="Collections and File IO"
        className="img-fluid shadow"
        style={{ borderRadius: "15px" }} // fully rounded with 15px
      />
    </div>
    <div className="col-md-6" data-aos="fade-left">
      <div className="card p-4 border-0 shadow hover-card">
        <h5 className="fw-bold mb-3">Collections & File I/O</h5>
        <p className="fs-5 mb-0">
          Explore Java’s powerful collection framework (List, Map, Set) and learn how to read/write files using streams.
        </p>
      </div>
    </div>
  </div>

  {/* GUI with Swing */}
  <div className="row g-4 mb-4 align-items-center flex-md-row-reverse">
    <div className="col-md-6" data-aos="fade-left">
      <img
<<<<<<< HEAD
        src="https://img2.wallspic.com/crops/8/0/3/3/6/163308/163308-java-graphic_design-logo-text-graphics-3840x2160.png"
=======
        src="https://img.freepik.com/free-photo/laptop-with-code-screen-desk_23-2147981738.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
        alt="Swing GUI"
        className="img-fluid shadow"
        style={{ borderRadius: "40px 10px 40px 10px" }} // alternating large round corners
      />
    </div>
    <div className="col-md-6" data-aos="fade-right">
      <div className="card p-4 border-0 shadow hover-card">
        <h5 className="fw-bold mb-3">GUI with Swing</h5>
        <p className="fs-5 mb-0">
          Build interactive user interfaces using Java Swing components like JFrame, JPanel, JButton, JTextField, and more.
        </p>
      </div>
    </div>
  </div>

  {/* JDBC & MySQL Projects */}
  <div className="row g-4 align-items-center">
    <div className="col-md-6" data-aos="fade-right">
      <img
<<<<<<< HEAD
        src="https://wallpapers.com/images/hd/4k-programming-java-script-texts-u67z4l5ov7cdbp4v.jpg"
=======
        src="https://img.freepik.com/free-photo/database-technology-background_53876-110423.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
        alt="JDBC and MySQL"
        className="img-fluid shadow"
        style={{ borderRadius: "0px 0px 50px 50px" }} // only bottom corners rounded
      />
    </div>
    <div className="col-md-6" data-aos="fade-left">
      <div className="card p-4 border-0 shadow hover-card">
        <h5 className="fw-bold mb-3">JDBC & MySQL Projects</h5>
        <p className="fs-5 mb-0">
          Connect your Java applications with MySQL using JDBC and work on real-world projects like student management and billing systems.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Course Details */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Details</h2>
        <div className="row g-4 text-center">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card p-4 border-0 shadow hover-card">
              <Clock className="text-primary mb-2" size={36} />
              <h5>Duration</h5>
              <p>4 Months</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card p-4 border-0 shadow hover-card">
              <Star className="text-warning mb-2" size={36} fill="currentColor" />
              <h5>Rating</h5>
              <p>4.8 / 5</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card p-4 border-0 shadow hover-card">
              <CheckCircle className="text-success mb-2" size={36} />
              <h5>Projects</h5>
              <p>GUI & DB Apps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">What You’ll Learn</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {syllabusItems.map((item, index) => (
            <div className="col" key={index} data-aos="fade-up">
              <div className="card h-100 border-0 shadow hover-card">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Meet Your Instructor</h2>
        <div className="card text-center p-4 border-0 shadow hover-card" data-aos="flip-up">
          <img
            src="https://img.freepik.com/premium-photo/portrait-programmer-working-late-dark-office-with-multiple-computer-screens_236854-23178.jpg"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
            alt="Instructor"
          />
          <h5 className="fw-semibold">Mr. Arun Kumar</h5>
          <p className="text-muted">
            Senior Java Developer with 10+ years of teaching and real-world software experience.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container">
        <div className="card bg-primary text-white text-center border-0 shadow-lg" data-aos="zoom-in">
          <div className="card-body py-5">
            <h2 className="fw-bold mb-3">Start Your Java Career Now!</h2>
            <p className="lead mb-4">Enroll to access lessons, real-time projects, and certification.</p>
            <Link to="/enroll" className="btn btn-light fw-semibold px-4 py-2">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaProgramming;
