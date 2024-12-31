import React, { useEffect, useRef } from "react";
import './MissionVision.css';
import ved from './vedio/bgved.mp4';// Adjusted path

function Section({ title, content, icon }) {
  return (
    <div className="section">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function MissionVision() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust video speed
    }
  }, []);

  return (
    <div className="mission-vision-container">
      <video 
        autoPlay 
        muted 
        loop 
        className="background-video" 
        ref={videoRef}
      >
        <source src={ved} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-wrapper">
        <Section 
          title="Mission" 
          icon="🌱" 
          content="To empower farmers globally with innovative solutions, enabling sustainable agricultural practices, higher yields, and healthier ecosystems. Our goal is to provide predictive analytics and community support to drive informed decisions and long-term success in farming."
        />
        <Section 
          title="Vision" 
          icon="🌎" 
          content="To create a world where every farmer thrives by making sustainable and innovative farming solutions accessible. Our aim is to build resilient communities and protect the environment for future generations."
        />
      </div>
    </div>
  );
}

export default MissionVision;