import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video1 from "./video/video1.mp4";
import video2 from "./video/video2.mp4";
import ReviewsSection from "./ReviewsSection"; // adjust path if needed
import "./Animation.css"
import {
  FaCube,
  FaPaintBrush,
  FaRunning,
  FaMagic,
  FaFilm,
  FaGamepad,
  FaBuilding,
  FaVrCardboard,
  FaUserMd, 
  FaBullhorn,
  FaPenNib,
  FaVideo
} from "react-icons/fa";
import modelingImg from "./Img/img1.png";

// Topics
const topics = [
  { icon: <FaCube />, title: "3D Modeling", description: "Learn to create realistic 3D objects and environments." },
  { icon: <FaPaintBrush />, title: "Texturing & Shading", description: "Apply textures and materials to bring your models to life." },
  { icon: <FaRunning />, title: "Rigging & Animation", description: "Animate characters and objects with realistic movement." },
    { icon: <FaPenNib  />, title: "Illustrations", description: "Create custom artwork and illustrations." },
    { icon: <FaVideo />, title: "Motion Graphics", description: "Design engaging motion graphic videos." },
  { icon: <FaMagic />, title: "Visual Effects (VFX)", description: "Add explosions, smoke, magic effects, and more." }
];

// Usage Areas
const usageAreas = [
  { icon: <FaFilm />, title: "Movies & TV", description: "Create CGI and animations for entertainment." },
  { icon: <FaGamepad />, title: "Gaming", description: "Design immersive characters and game worlds." },
  { icon: <FaBuilding />, title: "Architecture", description: "Create 3D walkthroughs and building previews." },
  { icon: <FaVrCardboard />, title: "VR & AR", description: "Develop immersive virtual and augmented experiences." },
  { icon: <FaUserMd />, title: "Medical", description: "Help doctors train with 3D medical simulations." },
  { icon: <FaBullhorn />, title: "Marketing", description: "Produce eye-catching animated brand campaigns." }
];

// Future Scope Items
const futureScope = [
  { icon: "🚀", title: "Advanced AI Integration", text: "Future systems will merge with AI for smart automation." },
  { icon: "🌐", title: "Global Collaboration", text: "Work seamlessly across borders with next-gen tools." },
  { icon: "📱", title: "Mobile-First Solutions", text: "Adapting for the ever-growing mobile user base." },
  { icon: "🔒", title: "Enhanced Security", text: "AI-powered security for data protection." }
];

const Animation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  //header
  
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff", color: "#222" }}>\


      {/* HEADER */}
      <header style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source src={video1} type="video/mp4" />
        </video>
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(255,255,255,0.2)"
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          textAlign: "center", borderBottom: "4px solid white", paddingBottom: "10px"
        }} data-aos="zoom-in">
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#fff" }}>
  <span style={{ color: "#f51e1eff" }}>3D</span> ANIMATION
</h1>
<p style={{ fontSize: "1.2rem", marginTop: "10px", color: "#fff" }}>
  Discover skills, industries, companies, and future scope
</p>

        </div>
      </header>


{/* WHAT WE SHOULD LEARN */}

<section
  style={{
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",
  }}
>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "40px",
      fontSize: "2.5rem",
      fontWeight: "bold",
    }}
    data-aos="fade-up"
  >
    What We Should Learn
  </h2>
  <div
    style={{
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        flex: "1 1 300px", // grow, shrink, basis for responsiveness
        minWidth: "280px",
        maxWidth: "600px",
      }}
    >
      {topics.map((topic, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            background: "#f8f8f8",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "none", // no shadow initially
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(0, 188, 212, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              marginRight: "15px",
              color: "rgba(77, 208, 225, 0.6)", // lighter icon color
              flexShrink: 0,
            }}
          >
            {topic.icon}
          </div>
          <div>
            <h4 style={{ margin: 0, fontWeight: "bold" }}>{topic.title}</h4>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>
              {topic.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div
      style={{
        flex: "1 1 300px",
        minWidth: "280px",
        maxWidth: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      data-aos="fade-left"
    >
      <img
        src={modelingImg}
        alt="3D Modeling"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  </div>
</section>



   {/* WHERE IT CAN BE USED */}
<section className="py-5 bg-light">
        <h1 className="text-center mb-5 fw-bold" data-aos="fade-up">
          Where It Can Be Used
        </h1>
        <div className="container">
          <div className="row g-4">
            {usageAreas.map((area, i) => {
              const colors = ["#ff9800", "#4caf50", "#2196f3", "#e91e63", "#9c27b0", "#00bcd4"];
              return (
                <div key={i} className="col-sm-6 col-lg-4" data-aos="zoom-in-up" data-aos-delay={i * 100}>
                  <div
                    className="p-4 text-center rounded position-relative h-100"
                    style={{
                      background: "#fff",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                      animation: "shake 3s infinite ease-in-out"
                    }}
                  >
                    {/* colorful corner */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "45px",
                        height: "45px",
                        background: `linear-gradient(135deg, ${colors[i % colors.length]}, transparent)`,
                        borderTopRightRadius: "15px",
                        boxShadow: `0 0 10px ${colors[i % colors.length]}`
                      }}
                    ></div>
                    <div style={{ fontSize: "2rem", color: colors[i % colors.length] }}>{area.icon}</div>
                    <h5 className="fw-bold">{area.title}</h5>
                    <p className="text-muted small">{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    {/* COMPANIES VIDEO */}
<section style={{ padding: 0, margin: 0, textAlign: "center" }}>
  <b><h1 style={{
    textAlign: "center", marginBottom: "20px", paddingTop: "40px",
    fontSize: "2.5rem", fontWeight: "bold"
  }}>We Are Going To Work In</h1></b>
  <video
    src={video2}
    controls
    autoPlay
    muted
    loop
    playsInline
    data-aos="zoom-in"
    style={{
      width: "100%", height: "auto",
      maxHeight: "80vh", objectFit: "cover"
    }}
  />
</section>


            {/* Instructor Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 style={{ textAlign: "start", marginBottom: "40px", fontSize: "2.5rem", fontWeight: "bold" }}>Instructor</h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-3 text-center" data-aos="fade-right">
              <img
                src="https://img-c.udemycdn.com/user/200_H/32202564_08ec_4.jpg"
                alt="Instructor"
                className="rounded-circle img-fluid shadow"
              />
            </div>
            <div className="col-md-9" data-aos="fade-left">
              <h4 className="fw-bold text-primary">John Doe</h4>
              <p className="text-muted">Cloud Consultant & Trainer</p>
              <div className="d-flex flex-wrap mb-3">
                <div className="me-4"><span>⭐ 4.8 Instructor Rating</span></div>
                <div className="me-4"><span>💬 5,432 Reviews</span></div>
                <div className="me-4"><span>👨‍🎓 28,500 Students</span></div>
                <div><span>📚 12 Courses</span></div>
              </div>
              <p>With over 20 years of experience in technology, design, and cloud computing, John has trained thousands of students across the globe. His expertise spans Adobe Creative Suite, AWS, and advanced web development.</p>
              <p>Having worked as a developer, consultant, and architect, he brings practical insights and real-world problem-solving skills into his teaching.</p>
              <p>His passion lies in helping learners transition from basics to mastery, ensuring they gain both confidence and competence.</p>
            </div>
          </div>
        </div>
      </section>
      
{/* future scope */}

     <section
  style={{
    padding: "60px 20px",
    background: "#fff",
    color: "#333",
    textAlign: "center",
    overflow: "hidden",  // important to hide scroll overflow
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "30px",
    }}
    data-aos="fade-up"
  >
    Future Scope
  </h2>

  <div
    id="my-sc"
    style={{
      display: "flex",
      width: "100%",
      overflow: "hidden",
    }}
  >
    {[0, 1].map((groupIndex) => (
      <div
        key={groupIndex}
        className="scroll-group"
        style={{
          display: "flex",
          gap: "20px",
          flexShrink: 0,
        }}
      >
        {futureScope.map((item, i) => {
          const colors = ["#ff5722", "#673ab7", "#3f51b5", "#009688"];
          return (
            <div
              key={i}
              style={{
                position: "relative",
                background: "linear-gradient(145deg, #fdfdfd, #f3f3f3)",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
                transition: "transform 0.3s ease",
                minWidth: "250px",
                flexShrink: 0,
                animation: "shake 3s infinite ease-in-out",
                animationDelay: `${i * 500}ms`,
                color: "#333",
              }}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* colorful corner */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "35px",
                  height: "35px",
                  background: `linear-gradient(135deg, ${colors[i % colors.length]}, transparent)`,
                  borderTopRightRadius: "20px",
                  boxShadow: `0 0 10px ${colors[i % colors.length]}`,
                }}
              ></div>

              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>{item.text}</p>
            </div>
          );
        })}
      </div>
    ))}
  </div>

  <style jsx>{`
    #my-sc {
      overflow: hidden;
      white-space: nowrap;
    }

    .scroll-group {
      animation: marquee 20s linear infinite;
    }

    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes shake {
      0%,
      100% {
        transform: translate(0, 0) rotate(0);
      }
      20% {
        transform: translate(-1px, 1px) rotate(-0.5deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(0.5deg);
      }
      60% {
        transform: translate(-1px, 1px) rotate(-0.5deg);
      }
      80% {
        transform: translate(1px, -1px) rotate(0.5deg);
      }
    }
  `}</style>
</section>

<ReviewsSection />




      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", background: "#f4f4f4" }}>
        &copy; 2025 Education Platform | Designed with ❤️ for learners
      </footer>
    </div>
  );
};

export default Animation;
