import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Home_Style/serivces.css";
import frameImg from "../Home_component/img/Frame.png";
import frame1Img from "../Home_component/img/Frame1.png";
import frame2Img from "../Home_component/img/Frame (2).png";
import frame3Img from "../Home_component/img/Frame (3).png";

const servicesData = [
  {
    icon: frameImg,
    title: "General Construction",
    description:
      "We handle full-scale building projects with precision and safety.",
  },
  {
    icon: frame1Img,
    title: "Architectural Design",
    description:
      "Innovative designs that balance aesthetics and functionality.",
  },
  {
    icon: frame2Img,
    title: "Commercial Projects",
    description: "Professional execution of large-scale commercial builds.",
  },
  {
    icon: frame3Img,
    title: "Renovation Services",
    description: "Transforming spaces while maintaining structural integrity.",
  },
  {
    icon: frameImg,
    title: "General Construction",
    description:
      "We handle full-scale building projects with precision and safety.",
  },
  {
    icon: frame1Img,
    title: "Architectural Design",
    description:
      "Innovative designs that balance aesthetics and functionality.",
  },
  {
    icon: frame2Img,
    title: "Commercial Projects",
    description: "Professional execution of large-scale commercial builds.",
  },
  {
    icon: frame3Img,
    title: "Renovation Services",
    description: "Transforming spaces while maintaining structural integrity.",
  },
];

export default function Services() {
  const [showSlider, setShowSlider] = useState(false);
  const [setting, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    // kai nathi farak padto
    //  responsive: [
    //   {
    //     breakpoint: 1600,
    //     settings: { slidesToShow: 4, slidesToScroll: 3 },
    //   },
    //   {
    //     breakpoint: 1200,
    //     settings: { slidesToShow: 3, slidesToScroll: 1 },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: { slidesToShow: 3, slidesToScroll: 1 },
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: { slidesToShow: 2, slidesToScroll: 1 },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: { slidesToShow: 2, slidesToScroll: 1 },
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: { slidesToShow: 1, slidesToScroll: 1 },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: { slidesToShow: 1, slidesToScroll: 1 },
    //   },
    // ],
  });

  // ✅ Force slider re-render after mount to fix F5 breakpoint issue
  useEffect(() => {
    setShowSlider(true);
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 1 }));
        console.log(window.innerWidth);
      } else if (window.innerWidth < 768) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 2 }));
        console.log(window.innerWidth);
      } else if (window.innerWidth < 1024) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 3 }));
        console.log(window.innerWidth);
      } else {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 4 }));
        console.log(window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container services_main">
      <motion.p
        className="our_s"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OUR SERVICES
      </motion.p>

      <motion.h1
        className="services_title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        What We Offer
      </motion.h1>

      {/* ✅ Render slider only after mount */}
      {showSlider && (
        <Slider {...setting}>
          {servicesData.map((service, index) => (
            <motion.div
              className="service_card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                y: -1,
                boxShadow: "0 8px 2px rgba(0,0,0,0.2)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="item_card">
                <motion.div
                  className="logo"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src={service.icon} alt={service.title} />
                </motion.div>

                <div className="service_content">
                  <motion.h3
                    className="gen"
                    whileHover={{ color: "#d16751" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="service_p">{service.description}</p>
                  <motion.a
                    className="explore"
                    href="#"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore More <span className="arrow">→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      )}
    </div>
  );
}
