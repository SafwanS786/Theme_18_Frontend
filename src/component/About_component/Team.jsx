import React, { useState, useEffect } from "react";
import "../../Styles/About_Style/Team.css";
import team1 from "../About_component/img/teamph1.png";
import team2 from "../About_component/img/teamph2.png";
import team3 from "../About_component/img/teamph3.png";
import team4 from "../About_component/img/teamph4.png";

export default function Team() {
  const TeamPht = [
    {
      icon: team1,
      alt: "Team_Photo",
      Name: "Marvin McKinney",
      Work: "Architecture",
    },
    {
      icon: team2,
      alt: "Team_Photo",
      Name: "Dianne Russell",
      Work: "Civil Engineer",
    },
    {
      icon: team3,
      alt: "Team_Photo",
      Name: "Esther Howard",
      Work: "Engineer",
    },
    {
      icon: team4,
      alt: "Team_Photo",
      Name: "Courtney Henry",
      Work: "Architecture",
    },
  ];
  return (
    <div className="container Team_Main">
      <p id="tem">OUR TEAM</p>
      <h1 id="per">Meet Our Valuable Person</h1>
      <div className="pht_sld">
        {TeamPht.map((item, index) => (
          <div className="overlay_b" key={index}>
            <img src={item.icon} alt={item.alt} />
            <div className="hvr">
              <h1>{item.Name}</h1>
              <p>{item.Work}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
