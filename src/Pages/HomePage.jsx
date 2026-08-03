import React from "react";
import Home from "../component/Home_component/Home";
import About from "../component/Home_component/About";
import Services from "../component/Home_component/Services";
import Choose from "../component/Home_component/Choose";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProject from "../component/Home_component/OurProject";
import "../App.css";
import Feedback from "../component/Home_component/FeedBack";
import GetIn from "../component/Home_component/GetInTouch";
import LatestNews from "../component/Home_component/LatestNews";
import ReducerDemo from "../component/Practise_component/ReducerDemo";
import Mncjobs from "../component/Practise_component/Mncjobs";
import TableForm from "../component/Practise_component/Form";
import "../../AdminPanel/Style/AdminPanel.css"

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Choose />
      <OurProject />
      <Feedback />
      <GetIn />
      <LatestNews />
      {/* <ReducerDemo /> */}
      {/* <Mncjobs /> */}
      <TableForm />
    </div>
  );
}
