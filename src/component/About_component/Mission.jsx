import React from "react";
import "../../Styles/About_Style/Mission.css";
import Mis_img from "../About_component/img/Mission.png";
import { motion } from "framer-motion";
export default function Mission() {
  return (
    <div className="container Mission">
      <div className="Mission_text">
        <motion.p
          id="promise"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          OUR PROMISE
        </motion.p>
        <motion.h1
          className="bld_M main_content"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          // viewport={{ once: true }}
        >
          Crafting Structures with <br />
          Purpose, Passion & Precision
        </motion.h1>
      </div>
      <div className=" Mission_Down_part">
        <div className="ph">
          <motion.img
            src={Mis_img}
            alt="Mission Image"
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="right-section"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.68, -0.55, 0.27, 1.55], // spring-like bounce
          }}
          // viewport={{ once: true }}
        >
          <div className="thr_label">
            <p id="msn">Our Mission</p>
            <p id="msn">Our Vision</p>
            <p id="msn">Our Approach</p>
          </div>
          <div className="Trust">
            <h1>Building Excellence, Delivering Trust</h1>
            <p>
              To deliver high-quality, sustainable, and innovative construction
              solutions that exceed client expectations, while ensuring safety,
              precision, and timely project delivery.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
