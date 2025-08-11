import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code2,
  Server,
  Cpu,
  BookOpenCheck,
  Briefcase,
  UserCheck,
  ChevronDownCircle,
  ShieldCheck,
  Database,
} from "lucide-react";

export default function PythonPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const curriculum = [
    { title: "Python Basics & Syntax", icon: Code2 },
    { title: "Control Flow & Functions", icon: Cpu },
    { title: "Object-Oriented Programming (OOP)", icon: BookOpenCheck },
    { title: "File & Exception Handling", icon: ShieldCheck },
    { title: "Web Dev with Django", icon: Server },
    { title: "Django REST APIs", icon: Server },
    { title: "Databases: SQLite & MySQL", icon: Database },
    { title: "Real-time Project (E-com / Blog)", icon: BookOpenCheck },
  ];

  const careers = [
    "Python Developer",
    "Full Stack Web Developer",
    "Automation Engineer",
    "Data Engineer",
    "Django Backend Developer",
  ];

  const faqs = [
    {
      question: "Is Python beginner-friendly?",
      answer: "Yes, Python is easy to read and ideal for beginners with no prior experience.",
    },
    {
      question: "Will we build real-world projects?",
      answer: "Yes! You’ll create full-stack web applications using Django and REST APIs.",
    },
    {
      question: "Is placement support available?",
      answer: "Definitely. We offer interview preparation and job referrals.",
    },
  ];

  return (
    <div className="fade-in-page">
      {/* Hero */}
      <section className="bg-success text-white py-5 text-center" data-aos="fade-down">
        <div className="container">
          <h1 className="display-4 fw-bold">Python Software Development</h1>
          <p className="lead">Master backend web development and real-time applications using Python & Django.</p>
        </div>
      </section>

      {/* Why Python */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="https://i.pinimg.com/1200x/24/87/8a/24878a862b2211244d439ffbe2688280.jpg" className="img-fluid rounded shadow" alt="Python Development" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="fw-bold mb-4">Why Learn Python?</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <Code2 className="text-success me-2" size={22} />
                  Beginner-friendly syntax
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <Cpu className="text-success me-2" size={22} />
                  Versatile for automation and backend
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <Server className="text-success me-2" size={22} />
                  Powerful Django framework
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <Database className="text-success me-2" size={22} />
                  Built-in DB integration (SQLite, MySQL)
                </li>
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
            {curriculum.map((item, idx) => (
              <div
                key={idx}
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="learn-item d-flex align-items-start shadow-sm p-3 h-100">
                  <div className="me-3">
                    <item.icon size={26} className="text-success" />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-semibold">{item.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project */}
      <section className="py-5 text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Build a Real-time Django Project</h2>
          <p className="text-muted mb-4">
            Create a fully functional Blog or E-commerce site with authentication and admin dashboard.
          </p>
          <img src="/python-project.svg" className="img-fluid rounded shadow-sm" alt="Python Project" width="80%" />
        </div>
      </section>

      {/* Careers */}
      <section className="py-5 bg-light text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold mb-4">Career Paths After Python</h2>
          <div className="row justify-content-center">
            {careers.map((career, index) => (
              <div key={index} className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <Briefcase className="text-success mb-3" size={32} />
                    <h5>{career}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4" data-aos="fade-up">Success Stories</h2>
          <div className="row">
            {["Aarthi", "Kumar", "Meena"].map((name, index) => (
              <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <UserCheck size={36} className="text-success mb-2" />
                    <h5 className="mb-1">{name}</h5>
                    <p className="text-muted small">
                      "The Python course helped me secure a job in just 2 months! Highly recommended."
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
          <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordionPython">
            {faqs.map((faq, idx) => (
              <div className="accordion-item" key={idx} data-aos="fade-up">
                <h2 className="accordion-header" id={`headingPy${idx}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapsePy${idx}`}
                  >
                    <ChevronDownCircle className="me-2 text-success" /> {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapsePy${idx}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordionPython"
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
          <h2 className="fw-bold mb-3">Start Your Python Career Now!</h2>
          <p className="mb-4">Gain real skills, build real apps, and land your dream job.</p>
          <a href="/contact" className="btn btn-success btn-lg">
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}
