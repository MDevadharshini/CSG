import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from '../Img/Typing2.jpg';

import {
  Book,
  Calculator,
  FileText,
  BarChart2,
  Banknote,
  Building2,
  Briefcase,
  UserCheck,
  ChevronDownCircle,
} from "lucide-react";

export default function CourseTemplate() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);
const curriculum = [
  { title: "Introduction to Typing & Keyboard Layout", icon: Book },
  { title: "Finger Positioning & Home Row Keys", icon: FileText },
  { title: "Speed Building Techniques", icon: Calculator },
  { title: "Accuracy Improvement Exercises", icon: BarChart2 },
  { title: "Typing in English & Local Languages", icon: Banknote },
  { title: "Number Pad & Special Characters", icon: FileText },
  { title: "Timed Typing Tests & Progress Tracking", icon: BarChart2 },
  { title: "Final Assessment – Speed & Accuracy Challenge", icon: Building2 },
];

const careers = [
  "Data Entry Operator",
  "Clerical Assistant",
  "Office Administrator",
  "Transcriptionist",
  "Computer Operator",
];

const faqs = [
  {
    question: "Is this course suitable for beginners?",
    answer: "Yes, we start from the basics. No prior typing skills are required.",
  },
  {
    question: "Will I be able to improve my speed and accuracy?",
    answer: "Definitely! We provide structured exercises and techniques to enhance both speed and accuracy.",
  },
  {
    question: "Do you provide certification?",
    answer: "Yes, upon successful completion, you will receive a recognized certificate.",
  },
];



  return (
    <div className="fade-in-page">
      {/* Hero */}
<section
  className="text-white text-center d-flex align-items-center hero-section"
  data-aos="fade-down"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url(${require("../Img/Typing.jpg")})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "85vh",
    padding: "60px 20px",
  }}
>
  <div className="container">
    {/* Metallic gradient heading */}
    <h1 className="display-3 fw-bold mb-3 metallic-heading">
      {"Typing Course".split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>

    {/* Paragraph fade-up */}
    <p className="lead mb-4 hero-text">
   Master typing skills with interactive exercises, real-world typing tasks, and expert guidance to boost speed and accuracy.
    </p>

    {/* Animated metallic button */}
    <a href="/contact" className="btn btn-animated">
      Enroll Now
    </a>
  </div>

  <style>
    {`
      /* Heading metallic letter animation */
      .metallic-heading span {
        display: inline-block;
        opacity: 0;
        transform: translateY(30px);
        background: linear-gradient(90deg, #c0c0c0, #a8ffbf, #c0c0c0);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: fadeUp 0.3s forwards, metallicShift 4s linear infinite;
      }
      .metallic-heading:hover span {
        animation-duration: 1.5s; /* Faster shimmer on hover */
      }
      @keyframes fadeUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes metallicShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* Paragraph fade-up */
      .hero-text {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeText 0.8s ease forwards;
        animation-delay: 1.2s;
      }
      @keyframes fadeText {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Animated metallic button */
      .btn-animated {
        display: inline-block;
        padding: 12px 30px;
        font-size: 1.2rem;
        border-radius: 30px;
        font-weight: bold;
        background: linear-gradient(270deg, #228b22, #90ee90, #228b22);
        background-size: 400% 400%;
        color: white;
        text-decoration: none;
        border: none;
        animation: gradientShift 5s ease infinite;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease;
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* Metallic shimmer on hover for button */
      .btn-animated:hover {
        background: linear-gradient(90deg, #c0c0c0, #a8ffbf, #c0c0c0);
        background-size: 300% 300%;
        animation: metallicShift 1.5s linear infinite;
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.4);
      }
    `}
  </style>
</section>

  

{/* Why Learn - Accounting */}
<section className="py-5 mt-5">
  <div className="container">
    <div
      className="row align-items-center g-5 rounded-4"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        padding: "20px"
      }}
    >
      {/* Left Image */}
      <div className="col-12 col-lg-6 text-center" data-aos="zoom-in">
        <img
          src={Img}
          className="img-fluid"
          alt="Why Learn"
          style={{
            maxHeight: "380px",
            objectFit: "cover",
            width: "100%",
            borderRadius: "12px"
          }}
        />
      </div>

      {/* Right Content */}
      <div
        className="col-12 col-lg-6"
        data-aos="fade-left"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h2
          className="fw-bold mb-2"
          style={{ color: "#457b9d", fontSize: "2.2rem" }}
        >
          Why Learn This?
        </h2>
        <span className="line-accounting"></span>

        <ul className="list-unstyled mt-3">
          {[
            { icon: <Book />, text: "Learn accurate and efficient typing techniques" },
{ icon: <Calculator />, text: "Boost productivity for studies and career" },
{ icon: <BarChart2 />, text: "Improve typing speed and accuracy with practice drills" },
{ icon: <Banknote />, text: "Apply typing skills for data entry, office work, and online jobs" }

          ].map((item, index) => (
            <li
              key={index}
              className="mb-3 d-flex align-items-center p-3 rounded-3 hover-item"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  color: "#81c784",
                  fontSize: "1.5rem",
                  marginRight: "12px",
                  flexShrink: 0
                }}
              >
                {item.icon}
              </div>
              <span style={{ fontSize: "1.1rem", color: "#555" }}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Styles for Accounting */}
  <style>
    {`
      .hover-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      }
      .line-accounting {
        display: block;
        height: 4px;
        background-color: #a8dadc;
        width: 0;
        animation: growLineAccounting 2s forwards infinite;
      }
      @keyframes growLineAccounting {
        from { width: 0; }
        to { width: 80%; }
      }
    `}
  </style>
</section>



  {/* Curriculum */}
<section
  className="py-5 text-center text-white"
  style={{
    background: 'linear-gradient(135deg, #eef2f3, #ffffff)',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Floating Shapes */}
  <div
    style={{
      position: 'absolute',
      top: '-50px',
      left: '-50px',
      width: '150px',
      height: '150px',
      background: 'rgba(76, 175, 80, 0.2)',
      borderRadius: '50%',
      animation: 'float 6s ease-in-out infinite',
    }}
  ></div>
  <div
    style={{
      position: 'absolute',
      bottom: '-60px',
      right: '-60px',
      width: '180px',
      height: '180px',
      background: 'rgba(129, 199, 132, 0.25)',
      borderRadius: '50%',
      animation: 'float 8s ease-in-out infinite',
    }}
  ></div>

  <div className="container">
    <h2
      className="fw-bold mb-5"
      data-aos="fade-down"
      style={{ color: '#222' }}
    >
      What You’ll Learn
    </h2>
    <div className="row g-4">
      {curriculum.map((item, idx) => (
        <div
          key={idx}
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '12px',
              padding: '20px',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              transform: idx % 2 === 0 ? 'translateX(-10px)' : 'translateX(10px)',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                (idx % 2 === 0 ? 'translateX(-10px)' : 'translateX(10px)') +
                ' scale(1.03)';
              e.currentTarget.style.boxShadow =
                '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                idx % 2 === 0 ? 'translateX(-10px)' : 'translateX(10px)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Icon */}
            <div
              style={{
                minWidth: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4caf50, #81c784)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <item.icon size={24} />
            </div>

            {/* Title */}
            <div style={{ textAlign: 'left' }}>
              <h6
                className="mb-0 fw-semibold"
                style={{ color: '#333', fontSize: '1.05rem' }}
              >
                {item.title}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Floating Animation Keyframes */}
  <style>
    {`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
    `}
  </style>
</section>

{/* Careers */}
<section
  className="text-center"
  style={{
    backgroundImage: `url(${require("../Img/Typing1.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    color: "#fff",
    padding: "50px 0", // custom padding instead of py-5
    display: "flex",
    alignItems: "center",
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1,
    }}
  ></div>

  <div
    className="container"
    data-aos="fade-up"
    style={{ position: "relative", zIndex: 2 }}
  >
    <h2 className="fw-bold mb-4">Career Paths After This Course</h2>
    <div className="row justify-content-center">
      {careers.map((career, index) => (
        <div
          key={index}
          className="col-md-4 mb-4"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <div
            className="card h-100 shadow-sm"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              color: "#000",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
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
<section
  className="py-5 text-center"
  style={{
    background: "linear-gradient(135deg, #f8f9fa, #e8f5e9)",
    position: "relative",
  }}
>
  <div className="container">
    <h2
      className="fw-bold mb-5"
      data-aos="fade-up"
      style={{
        fontSize: "2.5rem",
        color: "#2e7d32",
        letterSpacing: "1px",
      }}
    >
      Student Success Stories
    </h2>

    <div className="row">
      {["Divya", "Rahul", "Nisha"].map((name, index) => (
        <div
          className="col-md-4 mb-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <div
            className="card h-100 shadow-lg border-0"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0, 128, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            }}
          >
            {/* Animated Icon */}
            <div
              style={{
                backgroundColor: "#e8f5e9",
                padding: "20px",
              }}
            >
              <UserCheck
                size={40}
                className="text-success"
                style={{
                  animation: "pulse 1.5s infinite",
                }}
              />
            </div>

            {/* Content */}
            <div className="card-body">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                {name}
              </h5>
              <p
                className="text-muted"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  fontStyle: "italic",
                }}
              >
                "Thanks to this course, I landed a great job within 3 months!"
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Pulse Animation */}
  <style>
    {`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
    `}
  </style>
</section>

{/* FAQs */}
<section className="py-5 bg-light">
  <div className="container">
    <h2
      className="fw-bold text-center mb-4"
      data-aos="fade-up"
    >
      Frequently Asked Questions
    </h2>

    <div className="accordion" id="faqAccordion">
      {faqs.map((faq, idx) => (
        <div
          className="accordion-item border-0 shadow-sm mb-3 rounded"
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 150}
          style={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow =
              "0px 8px 20px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0px 4px 10px rgba(0, 0, 0, 0.05)";
          }}
        >
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${idx}`}
              style={{
                background: "linear-gradient(90deg, #f8f9fa, #ffffff)",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #d4edda, #c3e6cb)";
                e.currentTarget.style.color = "#155724";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #f8f9fa, #ffffff)";
                e.currentTarget.style.color = "inherit";
              }}
            >
              <ChevronDownCircle className="me-2 text-success" />{" "}
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
<section
  className="py-5 text-white text-center position-relative"
  style={{
    background: "linear-gradient(135deg, #e9e7e7ff, #d5f5d5, #bbe1bbff)",
    backgroundSize: "250% 250%",
    animation: "shimmer 14s ease-in-out infinite", // slower shimmer
    overflow: "hidden",
    position: "relative",
  }}
  data-aos="zoom-in"
>
  {/* Subtle metallic pattern */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      zIndex: 1,
    }}
  ></div>

  {/* Soft silver-green glow */}
  <div
    style={{
      position: "absolute",
      top: "-20%",
      left: "-20%",
      width: "140%",
      height: "140%",
      background:
        "radial-gradient(circle, rgba(192,255,192,0.08) 0%, rgba(255,255,255,0) 70%)",
      animation: "glowShift 10s ease-in-out infinite alternate", // slower glow
      zIndex: 0,
    }}
  ></div>

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <h2
      className="fw-bold mb-3 text-dark"
      style={{
        fontSize: "2.5rem",
        letterSpacing: "1px",
        animation: "fadeDown 1s ease-in-out",
        textShadow: "0 0 6px rgba(255,255,255,0.3), 0 0 12px rgba(0,255,0,0.2)",
      }}
    >
      Begin Your Journey Today!
    </h2>
    <p
      className="mb-4 text-dark"
      style={{
        fontSize: "1.2rem",
        opacity: "0.9",
        animation: "fadeUp 1s ease-in-out",
        textShadow: "0 0 5px rgba(192,255,192,0.25)",
      }}
    >
      Get skilled, get certified, and land your dream job.
    </p>
    <a
      href="/contact"
      className="btn btn-success btn-lg shadow-lg px-5 py-3"
      style={{
        transition: "all 0.3s ease",
        fontWeight: "600",
        borderRadius: "50px",
        background:
          "linear-gradient(135deg, #bfe8bf, #4caf50, #3b8d3b)",
        boxShadow:
          "0 0 10px rgba(0,255,0,0.3), 0 0 20px rgba(192,255,192,0.15)",
      }}
      onMouseOver={(e) => {
        e.target.style.background =
          "linear-gradient(135deg, #cfffcc, #5fd35f, #4caf50)";
        e.target.style.transform = "scale(1.05)";
        e.target.style.boxShadow =
          "0 0 14px rgba(0,255,0,0.45), 0 0 28px rgba(192,255,192,0.25)";
      }}
      onMouseOut={(e) => {
        e.target.style.background =
          "linear-gradient(135deg, #bfe8bf, #4caf50, #3b8d3b)";
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow =
          "0 0 10px rgba(0,255,0,0.3), 0 0 20px rgba(192,255,192,0.15)";
      }}
    >
      🚀 Enroll Now
    </a>
  </div>

  {/* Keyframe animations */}
  <style>
    {`
      @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes glowShift {
        0% { transform: translateX(0) translateY(0); opacity: 0.5; }
        100% { transform: translateX(8px) translateY(8px); opacity: 0.8; }
      }
      @keyframes shimmer {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>
</section>

    </div> 
  );
}
