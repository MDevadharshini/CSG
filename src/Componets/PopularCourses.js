import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock, Users, Star } from "lucide-react";

export default function PopularCourses() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const popularCourses = [
    {
      id: "java",
      name: "Java Programming",
      description:
        "Master Java programming from basics to advanced concepts including OOP, collections, and frameworks.",
      duration: "4 months",
      students: "150+",
      rating: 4.8,
      image:
        "https://i.pinimg.com/736x/e8/ee/45/e8ee45b905442254c10c842a8fb6359a.jpg",
    },
    {
      id: "tally",
      name: "Tally Accounting",
      description:
        "Complete Tally course covering GST, inventory management, payroll, and financial reporting.",
      duration: "2 months",
      students: "200+",
      rating: 4.9,
      image:
        "https://i.pinimg.com/736x/bc/75/e1/bc75e16279aae26b3682ba70d1dc358b.jpg",
    },
    {
      id: "photoshop",
      name: "Adobe Photoshop",
      description:
        "Professional photo editing and graphic design using Adobe Photoshop with hands-on projects.",
      duration: "3 months",
      students: "120+",
      rating: 4.7,
      image:
        "https://i.pinimg.com/1200x/fa/bb/b7/fabbb7246a3d745918cd438727ad4313.jpg",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold fs-2 mb-3 text-dark">Popular Courses</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Explore our most sought-after courses that have helped hundreds of students build successful careers
          </p>
        </div>

        {/* Course Cards */}
        <div className="row g-4">
          {popularCourses.map((course, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={course.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card popular-card h-100 border-0 p-0 shadow-sm text-dark transition">
                {/* Course Image + Rating */}
                <div className="position-relative">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute top-0 end-0 m-2 bg-white rounded-pill d-flex align-items-center px-2 py-1 shadow-sm"
                    style={{ fontSize: "0.85rem" }}
                  >
                    <Star size={14} className="text-warning me-1" fill="currentColor" />
                    {course.rating}
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body border-bottom">
                  <h5 className="card-title fw-semibold course-title">{course.name}</h5>
                  <p className="card-text text-muted small">{course.description}</p>
                </div>

                {/* Info Section */}
                <div className="card-body d-flex justify-content-between text-muted small border-top border-bottom">
                  <div className="d-flex align-items-center">
                    <Clock size={14} className="me-1" />
                    {course.duration}
                  </div>
                  <div className="d-flex align-items-center">
                    <Users size={14} className="me-1" />
                    {course.students} enrolled
                  </div>
                </div>

                {/* Button */}
                <div className="card-body border-top">
                  <Link to={`/courses/${course.id}`} className="btn btn-primary w-100">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
          <Link to="/courses" className="btn btn-outline-primary btn-lg fw-semibold">
            View All Courses
          </Link>
        </div>
      </div>

      {/* CSS styles */}
      <style>{`
        .popular-card {
          background-color: white;
          border-radius: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .popular-card:hover {
          background-color: #0d6efd1a;
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .popular-card:hover .course-title {
          color: #0d6efd;
        }
      `}</style>
    </section>
  );
}
