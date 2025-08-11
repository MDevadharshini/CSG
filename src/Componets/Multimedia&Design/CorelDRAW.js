import React from "react";
import imgName from "./Img/coreal.avif";
import photoshopLogo from "./Img/corel4.jpg";
import ReviewsSection from "./ReviewsSection";
import CorelVideo from "./CorelVideo";
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

// Topics
const topics = [
  { icon: <FaPaintBrush />, title: "Getting Started with CorelDRAW", description: "Understand the workspace, menus, and basic navigation for efficient designing." },
  { icon: <FaCamera />, title: "Drawing & Shaping Tools", description: "Use rectangle, ellipse, polygon, and freehand tools to create precise shapes." },
  { icon: <FaLayerGroup />, title: "Objects & Layers", description: "Organize, group, and align objects while managing complex layer structures." },
  { icon: <FaFont />, title: "Typography & Text Effects", description: "Design stunning text layouts, apply artistic effects, and manage fonts." },
  { icon: <FaMagic />, title: "Colors, Fills & Gradients", description: "Apply solid fills, gradient blends, and patterns to bring designs to life." },
  { icon: <FaFileImage />, title: "Exporting & File Formats", description: "Prepare and export designs for print, web, and professional publishing." }
];

// Usage Areas
const usageAreas = [
  { icon: <FaPaintBrush />, title: "CorelDRAW Basics", description: "Learn the fundamentals of CorelDRAW, interface navigation, and essential tools for design." },
  { icon: <FaPenNib />, title: "Vector Illustration", description: "Create scalable vector artwork, logos, and illustrations with precision drawing tools." },
  { icon: <FaVideo />, title: "Page Layout & Typography", description: "Design professional page layouts and master text formatting for brochures and posters." },
  { icon: <FaMagic />, title: "Advanced Drawing Tools", description: "Utilize advanced shapes, artistic media, and custom brushes for creative projects." },
  { icon: <FaCube />, title: "3D & Perspective Drawing", description: "Add depth to your designs with perspective grids, extrusion tools, and 3D effects." },
  { icon: <FaRunning />, title: "Exporting & Printing", description: "Prepare and optimize your designs for print, web, and professional output." }
];

// Future Scope
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
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${imgName})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px"
        }}
      >
        {/* You can add heading here if needed */}
      </section>

      {/* TOPICS SECTION */}
      <section className="py-5 container">
        <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">
          Topics You Will Learn
        </h2>
        <div className="row g-4 align-items-center">
          {/* Left: Topics */}
          <div className="col-lg-6">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="d-flex gap-3 p-3 mb-3 rounded"
                style={{ background: "#f8f8f8", cursor: "pointer", transition: "0.3s" }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(77, 208, 225, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "28px", color: "rgba(77, 208, 225, 0.6)" }}>
                  {topic.icon}
                </div>
                <div>
                  <h5 className="fw-bold">{topic.title}</h5>
                  <p className="text-muted small mb-0">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src={photoshopLogo}
              alt="Adobe Photoshop"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "450px" }}
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

      {/* VIDEO */}
      <CorelVideo />

      {/* INSTRUCTOR */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-5 fw-bold">Instructor</h2>
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
                <div className="me-4">⭐ 4.8 Instructor Rating</div>
                <div className="me-4">💬 5,432 Reviews</div>
                <div className="me-4">👨‍🎓 28,500 Students</div>
                <div>📚 12 Courses</div>
              </div>
              <p>
                With over 20 years of experience in technology, design, and cloud computing, John has trained thousands
                of students across the globe...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE SCOPE */}
      <section className="py-5 text-center">
        <h2 className="fw-bold mb-4" data-aos="fade-up">Future Scope</h2>
        <div className="d-flex overflow-hidden" id="my-sc">
          {[0, 1].map((groupIndex) => (
            <div key={groupIndex} className="d-flex gap-3 flex-shrink-0 scroll-group">
              {futureScope.map((item, i) => {
                const colors = ["#ff5722", "#673ab7", "#3f51b5", "#009688"];
                return (
                  <div
                    key={i}
                    className="p-4 rounded flex-shrink-0 position-relative"
                    style={{
                      background: "linear-gradient(145deg, #fdfdfd, #f3f3f3)",
                      border: "1px solid #eee",
                      minWidth: "250px",
                      animation: "shake 3s infinite ease-in-out",
                      animationDelay: `${i * 500}ms`
                    }}
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
                        boxShadow: `0 0 10px ${colors[i % colors.length]}`
                      }}
                    ></div>
                    <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted small">{item.text}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <style>{`
          .scroll-group { animation: marquee 20s linear infinite; }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes shake { 0%,100%{transform:translate(0,0) rotate(0);} 20%{transform:translate(-1px,1px) rotate(-0.5deg);} 40%{transform:translate(1px,-1px) rotate(0.5deg);} 60%{transform:translate(-1px,1px) rotate(-0.5deg);} 80%{transform:translate(1px,-1px) rotate(0.5deg);} }
        `}</style>
      </section>

      <ReviewsSection />
    </div>
  );
};

export default AdobeHeader;
