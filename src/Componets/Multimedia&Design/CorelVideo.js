import React, { useState } from "react";

export default function ClickToPlayVideo() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section style={{ textAlign: "center", padding: "40px 0" }}>
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        We Are Going To Work In
      </h1>

      {!playVideo ? (
        // Show image first
        <img
          src="https://www.coreldraw.com/static/cdgs/product_content/cdgo/2025/hero-img.png"
          alt="Click to play video"
          style={{ cursor: "pointer", maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          onClick={() => setPlayVideo(true)}
        />
      ) : (
        // Show video iframe on click
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            maxHeight: "80vh",
            margin: "0 auto",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/QXkY_-w-xzc?autoplay=1&mute=1&si=BDa2FBdw3e3q3GFw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
      
        </div>
      )}
    </section>
  );
}
