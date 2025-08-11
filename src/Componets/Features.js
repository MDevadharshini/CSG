<<<<<<< HEAD
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Monitor, BadgeIcon as Certificate, Users, Clock } from "lucide-react";

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

=======
import { Monitor, BadgeIcon as Certificate, Users, Clock } from "lucide-react";

export default function Features() {
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
  const features = [
    {
      icon: Monitor,
      title: "Offline Training",
      description:
        "Hands-on learning in our state-of-the-art computer labs with direct instructor guidance.",
    },
    {
      icon: Certificate,
      title: "Certified Courses",
      description:
        "Industry-recognized certifications that boost your career prospects and credibility.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Learn from experienced professionals with real-world industry knowledge.",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description:
        "Morning and evening batches to accommodate your schedule and commitments.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 text-dark fs-2">
            Why Choose CSG Computer Education?
          </h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            We provide comprehensive training with industry-level curriculum designed to make you job-ready
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
<<<<<<< HEAD
            <div
              className="col-12 col-md-6 col-lg-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card feature-card border-0 p-4 h-100 shadow-sm text-dark">
                <div className="icon-box mb-3 d-flex align-items-center justify-content-center">
                  <feature.icon size={24} />
                </div>
                <h5 className="fw-semibold mb-2 feature-title">{feature.title}</h5>
                <p className="text-muted small mb-0 feature-description">{feature.description}</p>
=======
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100 hover-shadow transition">
                <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: "50px", height: "50px" }}>
                  <feature.icon size={24} />
                </div>
                <h5 className="fw-semibold text-dark mb-2">{feature.title}</h5>
                <p className="text-muted small mb-0">{feature.description}</p>
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
              </div>
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD

      {/* CSS styles */}
      <style>{`
        .feature-card {
          background-color: white;
          border-radius: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          background-color: #0d6efd1a;
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .feature-card:hover .feature-title {
          color: #0d6efd;
        }

        .feature-card:hover .feature-description {
          color: #000;
        }

        .icon-box {
          background-color: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          width: 50px;
          height: 50px;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-box {
          background-color: #0d6efd;
          color: white;
        }
      `}</style>
=======
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
    </section>
  );
}
