import React from "react";
import imgs_abt from "../About_component/img/abt.png";
import { motion } from "framer-motion";
import "../../Styles/About_Style/Future.css";

export default function About_Future() {
  return (
    <div className="container Abt_Future">
      <motion.div
        className="abt_img_class"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={imgs_abt} alt="Future Plans" />
      </motion.div>
      <motion.div
        className="text_content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="abt_heading main_content">ABOUT US</p>
        <h1 className="bld">Building the Future With Precision and Purpose</h1>
        <div className="para_ftr">
          <p>
            At BuildGo, we are more than just contractors — we are partners in
            building your vision. With 10+ years of experience in the
            construction industry, we specialize in delivering high-quality
            residential, commercial, and renovation projects that stand the test
            of time.
          </p>
          <p>
            We are a dedicated team of architects, engineers, and construction
            professionals committed to turning blueprints into reality. Whether
            it’s a modern villa, a commercial complex, or a full-scale
            renovation, we bring craftsmanship, planning, and attention to
            detail to every project.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
