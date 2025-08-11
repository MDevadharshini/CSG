import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/CoursesPage.css";

const CoursesPage = () => {
  const categorizedCourses = [
    {
      title: "🎨 Design & Multimedia",
      description: "Creative tools to design graphics, animations, and visual content.",
      courses: ["3D Animation", "Adobe", "Adobe Photoshop", "Adobe Photoshop 5", "CorelDRAW", "DTP", "Flash", "Multimedia"]
    },
    {
      title: "💻 Programming Languages",
      description: "Learn essential programming skills for software and app development.",
      courses: ["C Programming", "C++ Programming", "Java", "VBScript", "J2EE", "J2ME", "Foxpro Programming", "Dot NET"]
    },
    {
      title: "🌐 Web & Software Development",
      description: "Technologies to build dynamic websites and enterprise software.",
      courses: ["HTML", "ASP", "XML", "E Commerce"]
    },
    {
      title: "📊 Office & Accounting Tools",
      description: "Software used in day-to-day office and accounting work.",
      courses: ["Tally", "MS Excel", "Accounting", "Basic Computers", "Ms Windows", "Windows NT", "Windows 2000"]
    },
    {
      title: "🖥️ System & Networking",
      description: "Operating systems and platforms for running and managing systems.",
      courses: ["Linux", "Windows NT", "Windows 2000"]
    },
    {
      title: "🗄️ Database & Scripting",
      description: "Technologies to manage databases and automate workflows.",
      courses: ["SQL", "VBScript", "Foxpro Programming"]
    },
    {
      title: "📜 Certification & Diploma Programs",
      description: "Industry-recognized certification and advanced diplomas.",
      courses: ["DCA", "HDCA", "CAD", "Mechanical Cad"]
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-primary mb-4">📚 Courses Offered at CSG Computer Education</h2>

      {categorizedCourses.map((category, index) => (
        <div key={index} className="mb-5">
          <h4 className="text-success">{category.title}</h4>
          <p className="text-muted">{category.description}</p>
          <div className="row">
            {category.courses.map((course, idx) => (
              <div className="col-6 col-md-4 col-lg-3 mb-3" key={idx}>
                <div className="course-box shadow-sm rounded p-2 text-center">{course}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Training Type and Mode */}
      <div className="row mt-5">
        <div className="col-md-6 mb-3">
          <div className="bg-light border rounded p-4">
            <h5 className="text-dark">🏫 Training Type</h5>
            <p className="mb-0">✔ Computer Training<br />✔ Training Institute</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="bg-light border rounded p-4">
            <h5 className="text-dark">🎓 Mode of Instruction</h5>
            <p className="mb-0">✔ Offline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
