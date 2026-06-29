import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [meetingCode, setMeetingCode] = useState("");

  const features = [
    {
      title: "Instant Video Meetings",
      desc: "Create or join meetings in seconds with a seamless pipeline.",
      icon: "🎥",
    },
    {
      title: "Secure Connections",
      desc: "End-to-end encrypted communication built for trust.",
      icon: "🔐",
    },
    {
      title: "Smart Collaboration",
      desc: "Chat, share, and collaborate without friction.",
      icon: "⚡",
    },
    {
      title: "Cross Device Sync",
      desc: "Move between devices without losing continuity.",
      icon: "📱",
    },
  ];

  const handleJoin = () => {
    if (!meetingCode.trim()) return alert("Enter a valid meeting code");
    navigate(`/room/${meetingCode}`);
  };

  const handleCreate = () => {
    const newCode = Math.random().toString(36).substring(2, 8);
    navigate(`/room/${newCode}`);
  };

  return (
    <div className="homeContainer">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">MEETORA</div>

        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
        </div>

        <button className="navBtn" onClick={handleCreate}>
          New Meeting
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="heroSection">
        <div className="heroLeft">
          <h1>
            Where conversations<br />
            become connections.
          </h1>

          <p>
            A modern video collaboration system designed for speed,
            simplicity, and real-time human presence.
          </p>

          <div className="actionBox">
            <input
              type="text"
              placeholder="Enter meeting code"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
            />

            <button onClick={handleJoin}>Join</button>
          </div>

          <div className="miniStats">
            <div>
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
            <div>
              <h3>50K+</h3>
              <p>Users</p>
            </div>
            <div>
              <h3>HD</h3>
              <p>Video Quality</p>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="glowCard">
            <h2>Live Session Preview</h2>
            <p>Real-time meeting experience mock dashboard</p>
            <div className="pulse"></div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="featuresSection" id="features">
        <h2>Built for modern communication</h2>

        <div className="featuresGrid">
          {features.map((item, index) => (
            <div className="featureCard" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="howSection" id="how">
        <h2>How it works</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Create a room instantly</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Share your unique code</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Connect and collaborate live</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} MEETORA. All rights reserved.</p>
        <p>Engineered for real-time human connection.</p>
      </footer>
    </div>
  );
};

export default Home;