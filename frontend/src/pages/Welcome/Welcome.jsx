import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Welcome.css";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className={`welcome-container ${isHovering ? "flicker" : ""}`}>
      <div className="welcome-content">
        <img
          src="/tecnomarketlogostart.png"
          alt="Bienvenida"
          className="welcome-image"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleAccept}
        />
      </div>
    </div>
  );
};

export default Welcome;
