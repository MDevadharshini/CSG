import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code2,
  Cpu,
  Server,
  ShieldCheck,
  Database,
  UserCheck,
  Briefcase,
  ChevronDownCircle,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function ASPNetPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const curriculum = [
    "Introduction to ASP.NET & .NET Core",
    "C# Programming Basics & OOP",
    "Entity Framework & LINQ",
    "Web Forms, MVC & Razor Pages",
    "REST API Development",
    "Authentication & Authorization",
    "Deployment to IIS & Azure",
    "Hands-on Real-time Project",
  ];

  const careers = [
    "Web Developer",
    "Full Stack .NET Developer",
    "Backend API Developer",
    "Cloud Developer with Azure",
    "Software Engineer",
  ];

  const faqs = [
    {
      question: "Do I need prior programming experience?",
      answer: "No. We start from the basics of programming with C# and .NET.",
    },
    {
      question: "Will I get a certificate after completion?",
      answer: "Yes. You will receive an industry-recognized certificate from our institute.",
    },
    {
      question: "Are there placement opportunities?",
      answer: "Yes. We offer placement support and have tie-ups with local IT companies.",
    },
  ];

  const benefits = [
    { icon: Code2, text: "Powerful backend logic with C# and Visual Basic" },
    { icon: Server, text: "Database and API integration" },
    { icon: ShieldCheck, text: "Enterprise-level security features" },
    { icon: Cpu, text: "High performance with .NET Core" },
    { icon: Database, text: "Works with SQL Server, MySQL, and more" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-5 text-center" data-aos="fade-down">
        <div className="container">
          <h1 className="display-4 fw-bold">ASP.NET Software Development</h1>
          <p className="lead">
            Learn to build secure, scalable, and enterprise-grade web applications with ASP.NET.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="https://i.pinimg.com/1200x/9e/bd/cc/9ebdcc8215bbf83c420b157a231aead0.jpg" className="img-fluid rounded shadow" alt="ASP.NET" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="fw-bold mb-4">Why Learn ASP.NET?</h2>
              <ul className="list-unstyled">
                {benefits.map((item, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start">
                    <item.icon className="text-primary me-2" size={22} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">What You’ll Learn</h2>
          <div className="row g-4">
            {curriculum.map((topic, idx) => (
              <div key={idx} className="col-md-6 col-lg-4" data-aos="zoom-in-up">
                <div className="card card-hover h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{topic}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Project */}
      <section className="py-5 text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Hands-on Real-Time Project</h2>
          <p className="text-muted mb-4">
            Build a live e-commerce web application with secure login, product management, and payment integration.
          </p>
          <img src="/real-project.svg" className="img-fluid rounded shadow-sm" alt="Project Demo" width="80%" />
        </div>
      </section>

      {/* Careers */}

      

      <section className="py-5 bg-light">
  <div className="container text-center" data-aos="fade-up">
    <h2 className="fw-bold mb-4">Career Opportunities</h2>
    <div className="row justify-content-center">
      {careers.map((career, index) => (
        <div key={index} className="col-md-4 mb-4" data-aos="zoom-in">
          <TiltCard>
            <div className="card h-100 card-hover text-center">
              <div className="card-body">
                <Briefcase className="text-primary mb-3" size={32} />
                <h5>{career}</h5>
              </div>
            </div>
          </TiltCard>
        </div>
      ))}
    </div>
  </div>
</section>
    

      {/* Testimonials */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">Student Success Stories</h2>
          <div className="row">
            {["Siva", "Ramya", "Karthik"].map((name, idx) => (
              <div key={idx} className="col-md-4" data-aos="fade-up" data-aos-delay={idx * 200}>
                <div className="card testimonial-hover shadow-sm h-100">
                  <div className="card-body">
                    <UserCheck className="text-success mb-2" size={36} />
                    <h5>{name}</h5>
                    <p className="text-muted small">
                      “After this course, I landed my first job as a .NET Developer at a software firm in Chennai!”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, idx) => (
              <div className="accordion-item" key={idx} data-aos="fade-up">
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                  >
                    <ChevronDownCircle className="me-2 text-primary" />
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-dark text-white text-center" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Start?</h2>
          <p className="mb-4">Enroll now and become a certified ASP.NET Developer.</p>
          <a href="/contact" className="btn btn-warning btn-lg">Enroll Now</a>
        </div>
      </section>



    </div>
  );
}
