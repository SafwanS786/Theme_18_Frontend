import React, { useState } from "react";
import "../../Styles/About_Style/Asked.css";
import frq from "../About_component/img/Freq.png";
import { motion } from "framer-motion";
export default function Asked_Que() {
  const [Index, setIndex] = useState(null);

  const toggleFAQ = (index) => {
    setIndex(Index === index ? null : index);
  };
  const list = [
    {
      Que: "What Industries do You Specialize in?",
      Ans: "We specialize in multiple industries including construction, IT solutions, and more.",
    },
    {
      Que: "How Can i get quote for my Project?",
      Ans: "You can contact us via email or phone, and we’ll provide a free project quote within 24 hours.",
    },
    {
      Que: "Do You Provide post-project Support?",
      Ans: "Yes, we offer dedicated post-project support and maintenance.",
    },
    {
      Que: "How Can I contact you for more Information ?",
      Ans: "You can reach us through the contact form on our website or call our support team anytime.",
    },
    {
      Que: "What are your Business hours?",
      Ans: "Our business hours are Mon–Sat, 9 AM – 7 PM.",
    },
  ];
  return (
    <div className="container Asked_Main">
      <motion.p
        id="Ans"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Special Answer
      </motion.p>
      <motion.h1
        className="Asked_head"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="freq_down_part">
        <div className="freq_list_container">
          {list.map((item, index) => (
            <div
              key={index}
              className={`freq_list ${Index === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="freq_question">
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                >
                  {item.Que}
                </motion.span>
                <span className="icon">{Index === index ? "×" : "+"}</span>
              </div>
              {Index === index && <div className="freq_answer">{item.Ans}</div>}
            </div>
          ))}
        </div>
        <div className="freq_img">
          <img src={frq} alt="Image" />
        </div>
      </div>
    </div>
  );
}
