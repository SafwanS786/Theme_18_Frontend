import React, { useState, useEffect } from "react";
import "../../Styles/About_Style/Partners.css";
import House from "./img/Houselux.png";
import fur from "./img/fur.png";
import int from "./img/int.png";
import interior from "./img/intrior.png";
import sim from "./img/sim.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Partners() {
  const [showSlider, setShowSlider] = useState(false);
  const [setting, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
  });

  // ✅ Force slider re-render after mount to fix F5 breakpoint issue
  useEffect(() => {
    setShowSlider(true);
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 1 }));
      } else if (window.innerWidth < 768) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 2 }));
      } else if (window.innerWidth < 1024) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 2 }));
      } else {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 4 }));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const photos = [
    {
      icon: House,
      alt: "Luxury House",
    },
    {
      icon: fur,
      alt: "Furniture",
    },
    {
      icon: int,
      alt: "Interior",
    },
    {
      icon: interior,
      alt: "Interior Design",
    },
    {
      icon: sim,
      alt: "Simulation",
    },
  ];
  return (
    <div className="container1 P_Main">
      <p>OUR PARTNERS</p>
      <h1>Trusted Collaborations That Strengthen Every Build</h1>
      {showSlider && (
        <Slider {...setting}>
          {photos.map((item, index) => (
            <div className="sld" key={index}>
              <img src={item.icon} alt={item.alt} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
