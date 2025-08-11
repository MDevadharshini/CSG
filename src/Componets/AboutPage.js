<<<<<<< HEAD
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CSS/About.css";
=======
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './CSS/About.css';
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
import TiltCard from "../SoftwareDevelopment/TiltCard";
import {
  Users,
  Target,
  Award,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import img1 from "../Img/img1.jpg"; // Adjust the path as necessary

<<<<<<< HEAD
=======
const animations = ["flip", "blur-in", "bounce-up", "slide-rotate", "scale-fade"];


>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    { icon: Users, title: "500+ Graduates", description: "Successfully trained students" },
    { icon: Award, title: "10+ Years", description: "Of excellence in education" },
    { icon: BookOpen, title: "25+ Courses", description: "Comprehensive curriculum" },
    { icon: Target, title: "95% Success Rate", description: "Job placement assistance" },
  ];

  const faculty = [
    {
      name: "Rajesh Kumar",
      designation: "Senior Programming Instructor",
      expertise: "Java, C++, Python, Web Development",
      experience: "8 years",
      image: "/placeholder.svg",
    },
    {
      name: "Priya Sharma",
      designation: "Design & Multimedia Head",
      expertise: "Adobe Creative Suite, CorelDRAW, 3D Animation",
      experience: "6 years",
      image: "/placeholder.svg",
    },
    {
      name: "Amit Patel",
      designation: "Accounting & Office Applications",
      expertise: "Tally, Excel, Financial Management",
      experience: "10 years",
      image: "/placeholder.svg",
    },
    {
      name: "Sneha Gupta",
      designation: "CAD & Technical Training",
      expertise: "AutoCAD, SolidWorks, Mechanical Design",
      experience: "7 years",
      image: "/placeholder.svg",
    },
  ];

<<<<<<< HEAD
  return (
    <div className="fade-in-page">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">About CSG Computer Education</h1>
          <p className="lead mt-3">
            Empowering students with cutting-edge technology education since 2014.
          </p>
        </div>
      </section>
=======

 
  return (
    <div className="fade-in-page">
      {/* Hero Section */}
   <section className="bg-primary text-white py-5 text-center">
  <div className="container">
    <h1 className="display-4 fw-bold">About CSG Computer Education</h1>
    <p className="lead mt-3">
      Empowering students with cutting-edge technology education since 2014.
    </p>
  </div>
</section>


>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p>
                CSG Computer Education was founded with a vision to bridge the gap between academic learning
                and industry requirements. We believe in hands-on training, personalized attention, and industry-relevant skills.
              </p>
              <p>
                Small batches ensure individual mentoring and a focused learning environment for every student.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img src={img1} className="img-fluid rounded shadow" alt="CSG Classroom" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="flip-right">
              <TiltCard>
<<<<<<< HEAD
                <div className="card my-card border-primary h-100 text-center">
=======
                <div className="card my-card border-primary">
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                  <div className="card-body">
                    <h3 className="card-title text-primary">
                      <Target className="me-2" /> Our Vision
                    </h3>
                    <p className="card-text mt-3">
                      To be the leading institute that transforms learners into professionals through practical IT education.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
            <div className="col-md-6" data-aos="flip-left">
              <TiltCard>
<<<<<<< HEAD
                <div className="card my-card border-success h-100 text-center">
=======
                <div className="card my-card border-success">
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                  <div className="card-body">
                    <h3 className="card-title text-success">
                      <BookOpen className="me-2" /> Our Mission
                    </h3>
                    <p className="card-text mt-3">
                      Deliver structured, industry-relevant computer courses with expert faculty and real-world training.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Achievements</h2>
          <p className="mb-5 text-muted">Milestones that reflect our commitment to excellence</p>
          <div className="row">
            {achievements.map((a, i) => (
<<<<<<< HEAD
              <div key={i} className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={i * 100}>
                <TiltCard>
                  <div className="card tilt-card h-100 my-card text-center">
                    <div className="card-body">
=======
              <div key={i} className="col-md-6 col-lg-3 mb-4" data-aos="zoom-in">
                <TiltCard>
                  <div className="card tilt-card h-100">
                    <div className="card-body text-center">
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                      <a.icon size={40} className="text-primary mb-3" />
                      <h5 className="card-title">{a.title}</h5>
                      <p className="text-muted">{a.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Meet Our Expert Faculty</h2>
          <p className="mb-5 text-muted">Learn from industry professionals with years of experience</p>
          <div className="row">
            {faculty.map((member, index) => (
<<<<<<< HEAD
              <div key={index} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={index * 150}>
                <TiltCard>
                  <div className="card h-100 text-center my-card">
=======
              <div key={index} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up">
                <TiltCard>
                  <div className="card h-100">
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                    <img src={member.image} className="card-img-top rounded-circle p-3" alt={member.name} />
                    <div className="card-body">
                      <h5 className="card-title">{member.name}</h5>
                      <p className="text-primary fw-semibold mb-1">{member.designation}</p>
                      <p className="text-muted small">{member.expertise}</p>
                      <p className="text-muted small">{member.experience} experience</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Infrastructure</h2>
          <p className="mb-5 text-muted">State-of-the-art facilities for optimal learning</p>
          <div className="row">
            {[
              {
                icon: MapPin,
                title: "Modern Computer Labs",
                description: "Fully equipped labs with the latest hardware and software.",
              },
              {
                icon: Users,
                title: "Small Batch Sizes",
                description: "Personalized attention for better learning outcomes.",
              },
              {
                icon: Clock,
                title: "Flexible Timings",
                description: "Morning and evening batches available for everyone.",
              },
            ].map((item, index) => (
<<<<<<< HEAD
              <div key={index} className="col-md-4 mb-4" data-aos="flip-left" data-aos-delay={index * 150}>
                <TiltCard>
                  <div className="card h-100 text-center my-card">
=======
              <div key={index} className="col-md-4 mb-4" data-aos="flip-left">
                <TiltCard>
                  <div className="card h-100 text-center">
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                    <div className="card-body">
                      <item.icon size={32} className="text-primary mb-3" />
                      <h5>{item.title}</h5>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
    
=======
      {/* Contact */}
      <section className="py-5 bg-primary text-white text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold mb-4">Visit Our Institute</h2>
          <p className="mb-5">Come and experience our learning environment in person.</p>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <MapPin size={32} className="mb-2 text-warning" />
              <h5>Address</h5>
              <p>123 Education Street, Tech City<br />Near Central Mall</p>
            </div>
            <div className="col-md-4 mb-4">
              <Phone size={32} className="mb-2 text-warning" />
              <h5>Phone</h5>
              <p>+91 98765 43210<br />+91 87654 32109</p>
            </div>
            <div className="col-md-4 mb-4">
              <Mail size={32} className="mb-2 text-warning" />
              <h5>Email</h5>
              <p>info@csgeducation.com<br />admissions@csgeducation.com</p>
            </div>
          </div>
        </div>
      </section>
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
    </div>
  );
}
