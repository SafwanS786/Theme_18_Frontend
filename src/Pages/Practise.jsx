import React from "react";
import { motion } from "framer-motion";
import "../Styles/Project_Style/Practise.css";
import Learning from "../component/Practise_component/Learning";
import User from "../component/Practise_component/User";
import Product from "../component/Practise_component/Product";
import Course from "../component/Practise_component/Course";
import Jobs from "../component/Practise_component/Jobs";
import Movies from "../component/Practise_component/Movies";
import Pricing from "../component/Practise_component/Pricing";
import TextAdd from "../component/Practise_component/TextAdd";
import HeartAnimation from "../component/Blog_component/HeartAnimation";
import ParticleHeart from "../component/Blog_component/ParticleHeart";
export default function Practise() {
  const fruits = ["mango", "apple", "banana"];

  const newFruits = fruits.map((item, index) => {
    return item;
  });

  console.log("New Fruits", newFruits);
  const fis = fruits.map((item) => item);
  console.log("FIS", fis);
  const users = [
    { id: 1, name: "Safwan", MiddleName: "Shaikh" },
    { id: 2, name: "Shaikh", MiddleName: "Bhai" },
  ];

  const userList = users.map((item, index) => {
    let name = item.name + " " + item.MiddleName;
    return name;
  });
  console.log("UserList Name", userList);

  const Newthings = users.map((item, index) => {
    return {
      id: item.id,
      FullName: item.name,
      MiddleName: item.MiddleName,
    };
  });

  console.log("NewThings", Newthings);
  return (
    <div className="Practise_Main_Class">
      {" "}
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
                experiences that are both beautiful and functional. Our goal is
                to help brands stand out and connect with their audience.
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
            ></motion.div>
          </div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        {/* <Learning /> */}
        {/* <User /> */}
        {/* <Product /> */}
        {/* <Course /> */}
        {/* <Jobs /> */}
        <Movies />
        {/* <Pricing /> */}
        <TextAdd />
        {/* <HeartAnimation /> */}
        {/* <ParticleHeart /> */}
      </section>
    </div>
  );
}
