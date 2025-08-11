import React from "react";
import imgName from "./Img/muti1.jpg";
import photoshopLogo from "./Img/multi4.jpg";
import AdobePic from "./Img/multi2.jpg";
import ReviewsSection from "./ReviewsSection"; // adjust path if needed

import {
  FaLayerGroup,
  FaMagic,
  FaFont,
  FaPaintBrush,
  FaCamera,
  FaPenNib,
  FaVideo,
  FaCube,
  FaRunning,
  FaFileImage
} from "react-icons/fa";




const topics = [
  {
    icon: <FaPaintBrush />,
    title: "Introduction to Multimedia",
    description: "Explore the basics of combining text, images, audio, and video."
  },
  {
    icon: <FaCamera />,
    title: "Audio & Video Editing",
    description: "Learn to edit and enhance audio tracks and video clips effectively."
  },
  {
    icon: <FaLayerGroup />,
    title: "Animation Techniques",
    description: "Create smooth animations and motion graphics for engaging content."
  },
  {
    icon: <FaFont />,
    title: "Interactive Media",
    description: "Design interactive presentations and user-driven multimedia experiences."
  },
  {
    icon: <FaMagic />,
    title: "Multimedia Production Tools",
    description: "Master software used in multimedia creation and editing."
  },
  {
    icon: <FaFileImage />,
    title: "Publishing & Distribution",
    description: "Prepare multimedia projects for various platforms and formats."
  }
];


const usageAreas = [
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description: "Create captivating visuals for multimedia projects."
  },
  {
    icon: <FaPenNib />,
    title: "Video Production",
    description: "Shoot and edit videos for storytelling and marketing."
  },
  {
    icon: <FaVideo />,
    title: "Audio Editing",
    description: "Enhance sound quality and mix audio for media."
  },
  {
    icon: <FaMagic />,
    title: "Animation & Motion Graphics",
    description: "Bring graphics to life with smooth animations."
  },
  {
    icon: <FaCube />,
    title: "3D Modeling & Visuals",
    description: "Design and integrate 3D assets into multimedia content."
  },
  {
    icon: <FaRunning />,
    title: "Interactive Media",
    description: "Develop engaging interactive experiences for users."
  }
];


// Adobe Companies Items
const futureScope = [
  { icon: "🎬", title: "Pixar", text: "Uses Adobe for animation and post-production." },
  { icon: "🎥", title: "DreamWorks", text: "Integrates Adobe tools in movie workflows." },
  { icon: "🌌", title: "Industrial Light & Magic (ILM)", text: "Relies on Adobe for VFX editing." },
  { icon: "🎮", title: "Blizzard Entertainment", text: "Uses Adobe in game cinematic production." },
  { icon: "🕹️", title: "Ubisoft", text: "Employs Adobe for 3D art and game assets." },
  { icon: "⚽", title: "Electronic Arts (EA)", text: "Leverages Adobe for sports game visuals." },
  { icon: "🎭", title: "Sony Pictures Animation", text: "Uses Adobe in animated film production." },
  { icon: "🖥️", title: "Weta Digital", text: "Incorporates Adobe for post-production work." },
  { icon: "💻", title: "Autodesk", text: "Partners with Adobe for design workflows." },
  { icon: "👟", title: "Nike", text: "Uses Adobe for marketing and branding visuals." },
  { icon: "🚗", title: "Mercedes-Benz", text: "Creates campaigns with Adobe Creative Suite." },
  { icon: "🥤", title: "Coca-Cola", text: "Designs ads and packaging using Adobe." },
  { icon: "🔍", title: "Google", text: "Uses Adobe for creative design and branding." },
  { icon: "🍏", title: "Apple", text: "Employs Adobe tools for promotional visuals." },
  { icon: "🏰", title: "Disney", text: "Creates digital media with Adobe software." }
];


const AdobeHeader = () => {
  return (
    <div>
   {/* HERO SECTION */}
<section
  style={{
    backgroundImage: `url(${imgName})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Dark overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    }}
  />

  {/* Hero Text */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
      padding: "0 20px",
      color: "white",
    }}
  >
    <h1
      style={{
        fontSize: "48px",
        fontWeight: "bold",
        marginBottom: "15px",
      }}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      MULTIMEDIA
    </h1>

    <p
      style={{
        fontSize: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="300"
    >
      Multimedia combines text, images, audio, video, and interactive content to create engaging and dynamic experiences. It is widely used in education, entertainment, marketing, and digital communication to convey information effectively.
    </p>
  </div>
</section>


      {/* TOPICS SECTION */}
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
    Topics You Will Learn
  </h2>

  <div
    style={{
      display: "flex",
      gap: "40px",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {/* Left: Topics with hover + AOS */}
    <div style={{ flex: "1", minWidth: "300px", maxWidth: "600px" }}>
      {topics.map((topic, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "flex-start",
            padding: "15px",
            marginBottom: "15px",
            background: "#f8f8f8",
            borderRadius: "10px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(89, 141, 201, 0.89)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={{ fontSize: "28px", color: "#279dd0ff" }}>
            {topic.icon}
          </div>
          <div>
            <h3 style={{ margin: "0 0 5px", fontWeight: "bold" }}>
              {topic.title}
            </h3>
            <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
              {topic.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right: Image */}
    <div
      style={{
        flex: "1",
        minWidth: "300px",
        display: "flex",
        justifyContent: "center",
      }}
      data-aos="fade-left"
    >
      <img
        src={photoshopLogo}
        alt="Adobe Photoshop"
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


{/* COMPANIES Img */}
<section style={{ padding: 0, margin: 0, textAlign: "center" }}>
  <h1
    style={{
      textAlign: "center",
      marginBottom: "20px",
      paddingTop: "40px",
      fontSize: "2.5rem",
      fontWeight: "bold"
    }}
  >
    We Are Going To Work In
  </h1>

  {/* Image */}
  <img
    src={AdobePic} // your Photoshop image import
    alt="Adobe Photoshop Everywhere"
    data-aos="zoom-in"
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "80vh",
      objectFit: "cover",
      borderRadius: "10px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
    }}
  />

  {/* Content */}
  <p
    style={{
      maxWidth: "900px",
      margin: "30px auto 0",
      fontSize: "1.2rem",
      lineHeight: "1.6",
      color: "#444",
      padding: "0 20px"
    }}
  >
   Multimedia combines text, images, audio, video, and interactive content to create engaging and dynamic experiences. It is widely used in education, entertainment, marketing, and digital communication to convey information effectively.
  </p>
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



    </div>
  );
};

export default AdobeHeader;
