import React, { useEffect, useRef } from "react";
import "./ParticleHeart.css";

const ParticleHeart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    // HEART SHAPE
    function heartFunction(t) {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

      return {
        x: x * 18,
        y: -y * 18,
      };
    }

    // CREATE PARTICLES
    for (let i = 0; i < 1800; i++) {
      const t = Math.random() * Math.PI * 2;

      const heart = heartFunction(t);

      particles.push({
        x: canvas.width / 2 + heart.x,
        y: canvas.height / 2 + heart.y,
        size: Math.random() * 2.5,
        opacity: Math.random(),
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Glow Effect
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 70, 140, ${p.opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#ff4d88";

        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // BREATHING EFFECT
        p.opacity += (Math.random() - 0.5) * 0.02;

        if (p.opacity <= 0.2) p.opacity = 0.2;
        if (p.opacity >= 1) p.opacity = 1;
      });

      // TEXT
      ctx.font = "bold 55px cursive";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.shadowBlur = 20;
      ctx.fillText("SI ❤️", canvas.width / 2, canvas.height / 2 + 20);

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="particle_container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ParticleHeart;
