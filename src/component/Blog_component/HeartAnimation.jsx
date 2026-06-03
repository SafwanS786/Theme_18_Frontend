import React from "react";
import "./HeartAnimation.css";

const HeartAnimation = () => {
  return (
    <div className="heart_container">
      {/* Main Big Heart */}
      <div className="big_heart">
        <h1 className="love_text">
          Safwan <div>❤️</div>
          Ismah
        </h1>
      </div>
      {/* Floating Hearts */}
      <span className="small_heart heart1"></span>
      <span className="small_heart heart2"></span>
      <span className="small_heart heart3"></span>
      <span className="small_heart heart4"></span>
      <span className="small_heart heart5"></span>
    </div>
  );
};

export default HeartAnimation;
