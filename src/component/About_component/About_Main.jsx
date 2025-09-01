import React from "react";
import "../../Styles/About_Style/About_first_part.css";
import About_Img from "../About_component/img/About_Img.png";
import { motion } from "framer-motion";
export default function About_Main() {
  return (
    <div>
      <div
        className="Main_About_us"
        style={{ backgroundImage: `url(${About_Img})` }}
      >
        <motion.div
          className="ovr"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="title main_content">About Us</h1>

          <p className="breadcrumb">Home/About us</p>
        </motion.div>
      </div>
    </div>
  );
}
