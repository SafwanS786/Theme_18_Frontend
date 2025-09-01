import React, { useEffect, useState } from "react";
import aboutImg from "../Home_component/img/c_image.jpg";
import { motion } from "framer-motion";
import "../../Styles/Home_Style/about.css";

export default function About() {
  const [project, setProject] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 678;
    const duration = 2000;
    const IncrementTime = Math.floor(duration / end);
    let counter = setInterval(() => {
      start += 1;
      setProject(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, IncrementTime);
    return () => clearInterval(counter); // cleanup
  }, []);
  const [Exp, setExp] = useState(0);

  useEffect(() => {
    let start_y = 0;
    const end_y = 10;
    const durationTime = 3000;
    const IncrementTime_y = Math.floor(durationTime / end_y);

    let counter_y = setInterval(() => {
      start_y += 1;
      setExp(start_y);
      if (start_y === end_y) {
        clearInterval(counter_y);
      }
    }, IncrementTime_y);
    return () => clearInterval(counter_y);
  }, []);

  const [client, setClient] = useState(0);

  useEffect(() => {
    let start_c = 0;
    const end_c = 98;
    const durationTime_c = 3000;
    const Increment_c = Math.floor(durationTime_c / end_c);

    let counter_c = setInterval(() => {
      start_c += 1;
      setClient(start_c);
      if (start_c === end_c) {
        clearInterval(counter_c);
      }
    }, Increment_c);
    return () => clearInterval(counter_c);
  }, []);

  return (
    <section className="container about-section">
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="dif"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-label">ABOUT US</span>
            <h2>We Craft Digital Experiences That Drive Results</h2>
            <p>
              We're a creative team focused on designing and building digital
              experiences that are both beautiful and functional. Our goal is to
              help brands stand out and connect with their audience.
            </p>
            <motion.button
              className="about-btn"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#b45643",
              }}
              whileTap={{ scale: 0.9 }}
            >
              Read More
            </motion.button>
          </motion.div>
          <motion.div
            className="numb"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1>{project}+</h1>
              <p id="cp">Complete Projects</p>
            </div>
            <div>
              <h1>{Exp}+</h1>
              <p id="cp">Years of Experience</p>
            </div>
            <div>
              <h1>{client}%</h1>
              <p id="cp">Client Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutImg}
            alt="About Us"
            // style={{ height: "840px", width: "590px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
