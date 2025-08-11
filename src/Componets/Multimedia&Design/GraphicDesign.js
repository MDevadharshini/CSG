import React from "react";
import imgName from "./Img/des1.jpg";
import photoshopLogo from "./Img/graph5.jpg";
import ReviewsSection from "./ReviewsSection"; // adjust path if needed
import GraphicVideo from "./GraphicVideo";
import {
  FaLayerGroup,
  FaMagic,
  FaFont,
  FaPaintBrush,
  FaCamera,
  FaPenNib,
  FaPalette,
  FaFileImage,
  FaBullhorn,
  FaFileExport
} from "react-icons/fa";




const topics = [
  {
    icon: <FaPaintBrush />,
    title: "Design Principles",
    description: "Learn the fundamentals of balance, contrast, and alignment in design."
  },
  {
    icon: <FaCamera />,
    title: "Color Theory",
    description: "Explore color combinations, moods, and palettes to create impactful visuals."
  },
  {
    icon: <FaLayerGroup />,
    title: "Composition & Layout",
    description: "Arrange elements strategically to guide the viewer’s eye and improve clarity."
  },
  {
    icon: <FaFont />,
    title: "Typography",
    description: "Understand font selection, hierarchy, and readability in designs."
  },
  {
    icon: <FaMagic />,
    title: "Branding & Identity",
    description: "Create cohesive logos, icons, and visual identities for brands."
  },
  {
    icon: <FaFileImage />,
    title: "Tools & Exporting",
    description: "Master graphic software workflows and prepare files for print or web."
  }
];

// Usage Areas
const usageAreas = [
  {
    icon: <FaPaintBrush />,
    title: "Visual Design Basics",
    description: "Understand core design concepts and create appealing visuals."
  },
  {
    icon: <FaPenNib />,
    title: "Vector Illustration",
    description: "Design logos, icons, and illustrations with precision and scalability."
  },
  {
    icon: <FaPalette />, // optional alternative icon, else keep FaMagic or FaMagic
    title: "Color Theory & Application",
    description: "Apply color psychology and harmonies to enhance your designs."
  },
  {
    icon: <FaLayerGroup />,
    title: "Layout & Composition",
    description: "Arrange design elements for balance, emphasis, and flow."
  },
  {
    icon: <FaBullhorn />,
    title: "Brand Identity Design",
    description: "Create consistent brand visuals including logos, fonts, and color schemes."
  },
  {
    icon: <FaFileExport />,
    title: "Exporting & File Preparation",
    description: "Prepare design files for web, print, and digital platforms."
  }
];


const futureScope = [
  { icon: "🤖", title: "AI & Automation", text: "Graphic design workflows increasingly integrate AI tools for faster, smarter creations." },
  { icon: "🌐", title: "Web & UX/UI Design", text: "Growing demand for designers creating intuitive and engaging digital experiences." },
  { icon: "📱", title: "Mobile App Design", text: "Specializing in graphics and interfaces tailored for mobile devices." },
  { icon: "🎮", title: "Game Design", text: "Designing visual assets and interfaces for immersive gaming experiences." },
  { icon: "🎥", title: "Motion Graphics & Animation", text: "Expanding field with dynamic visuals for video, advertising, and social media." },
  { icon: "📦", title: "Packaging Design", text: "Creative packaging continues to be crucial for branding and product appeal." },
  { icon: "🏢", title: "Brand Identity", text: "Businesses seek designers to build strong, cohesive visual brand languages." },
  { icon: "🛒", title: "E-commerce Design", text: "Optimizing product visuals and marketing for online stores and marketplaces." },
  { icon: "🖥️", title: "Augmented & Virtual Reality", text: "New frontiers in designing immersive environments and user interactions." },
  { icon: "📊", title: "Data Visualization", text: "Turning complex data into clear, attractive visual stories." },
  { icon: "🎓", title: "Graphic Design Education", text: "Increasing opportunities in teaching, workshops, and online courses." },
  { icon: "💼", title: "Freelancing & Entrepreneurship", text: "More designers building personal brands and independent businesses." },
  { icon: "🌍", title: "Sustainable Design", text: "Focus on eco-friendly and socially responsible visual communication." },
  { icon: "📣", title: "Digital Marketing", text: "Collaboration with marketers for impactful campaign visuals." },
  { icon: "🧑‍💻", title: "Remote Work", text: "Growing trend enabling graphic designers to work globally from anywhere." }
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
     GRAPHIC DESIGNING
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
      Graphic designing is the art of creating visual content to communicate messages effectively using typography, images, colors, and layouts. It helps brands and businesses convey ideas clearly and attractively across digital and print media.
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

<GraphicVideo/>


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
