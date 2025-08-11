import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-primary text-white py-5" style={{ background: "linear-gradient(to bottom right, #2563eb, #1d4ed8, #1e40af)" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">
              Empowering Your Career Through{" "}
              <span className="text-warning">Technology</span>
            </h1>
            <p className="lead text-light mb-4">
              CSG Computer Education - Your gateway to professional excellence in technology, design, and business applications. Join thousands of successful graduates.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <Link to="/courses/java" className="btn btn-warning text-dark fw-semibold btn-lg">
                Explore Courses
              </Link>
              <Link to="/admissions" className="btn btn-outline-light fw-semibold btn-lg">
                Join Now
              </Link>
            </div>

            {/* Stats */}
            <div className="row text-center mt-4">
              <div className="col-6 col-md-3 mb-3">
                <div className="mb-2 d-flex justify-content-center">
                  <GraduationCap size={32} color="#facc15" />
                </div>
                <h3 className="fw-bold">500+</h3>
                <p className="text-light small">Graduates</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="mb-2 d-flex justify-content-center">
                  <BookOpen size={32} color="#facc15" />
                </div>
                <h3 className="fw-bold">25+</h3>
                <p className="text-light small">Courses</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="mb-2 d-flex justify-content-center">
                  <Users size={32} color="#facc15" />
                </div>
                <h3 className="fw-bold">15+</h3>
                <p className="text-light small">Expert Faculty</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="mb-2 d-flex justify-content-center">
                  <Award size={32} color="#facc15" />
                </div>
                <h3 className="fw-bold">10+</h3>
                <p className="text-light small">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6">
            <div className="bg-white bg-opacity-10 border border-white border-opacity-25 rounded-4 p-4 shadow-sm" style={{ backdropFilter: "blur(5px)" }}>
              <img
                src="https://i.pinimg.com/736x/35/19/2e/35192e0a12fa656d51d108e9f98bde02.jpg"
                alt="CSG Computer Education Classroom"
                className="img-fluid rounded"
                style={{ height: "320px", objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
