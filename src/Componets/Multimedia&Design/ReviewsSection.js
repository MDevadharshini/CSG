import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ReviewsSection() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const reviewsSet1 = [
    { name: "Luv J.", time: "2 months ago", stars: 5, text: "Good teaching" },
    { name: "Rodrigo M.", time: "7 months ago", stars: 1, text: "Unfortunately, this course did not meet my expectations. The content feels outdated and poorly structured." },
    { name: "Sue W.", time: "8 months ago", stars: 4, text: "I need a crash course on AEM so this is a very good match for me." },
    { name: "Amit M.", time: "5 years ago", stars: 2, text: "Detailed information is missing. Not helpful in practical application." },
    { name: "Priya K.", time: "1 month ago", stars: 5, text: "Very clear explanations and examples!" },
    { name: "Priya K.", time: "1 month ago", stars: 5, text: "Very clear explanations and examples!" }
  ];

  const reviewsSet2 = [
    { name: "John D.", time: "3 months ago", stars: 4, text: "Well structured and easy to follow." },
    { name: "Meena S.", time: "6 months ago", stars: 5, text: "Amazing content and great support from the instructor." },
    { name: "Alex R.", time: "1 year ago", stars: 3, text: "Good basics but needs more depth in advanced topics." },
    { name: "Nisha P.", time: "2 weeks ago", stars: 5, text: "Loved the step-by-step explanations!" },
    { name: "Tom B.", time: "4 months ago", stars: 2, text: "Not enough practical exercises for my liking." },
        { name: "Priya K.", time: "1 month ago", stars: 5, text: "Very clear explanations and examples!" }
  ];

  const renderReviewCard = (review, index) => (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#222",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          {review.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <strong>{review.name}</strong>
          <div style={{ fontSize: "12px", color: "#666" }}>{review.time}</div>
        </div>
      </div>
      <div style={{ color: "#f4b400", marginBottom: "10px" }}>
        {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
      </div>
      <p style={{ fontSize: "14px", color: "#444" }}>{review.text}</p>
    </div>
  );

  return (
    <section style={{ background: "#f8f9fa", padding: "50px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold" }} data-aos="fade-up">
          ⭐ 3.8 course rating • 869 ratings
        </h2>
      </div>

      {/* First 5 Reviews */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {reviewsSet1.map((review, i) => renderReviewCard(review, i))}
      </div>

         {/* Extra Reviews */}
      {showMore && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "30px auto 0",
          }}
        >
          {reviewsSet2.map((review, i) => renderReviewCard(review, i))}
        </div>
      )}

      {/* Toggle Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{
            background: "#6c63ff",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
          onClick={() => setShowMore(!showMore)}
          data-aos="zoom-in"
        >
          {showMore ? "Hide reviews" : "Show all reviews"}
        </button>
      </div>

   
    </section>
  );
}
