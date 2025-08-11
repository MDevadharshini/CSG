import React, { useEffect, useState } from "react";
import "./CursorGlowEffect.css";

const CursorGlowEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="glow-fullscreen">
      <div
        className="glow-circle"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
     
    </div>
  );
};

export default CursorGlowEffect;
