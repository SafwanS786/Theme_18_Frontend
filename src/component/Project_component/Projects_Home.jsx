import React, { useState } from "react";
import "../../Styles/Project_Style/Project_Home.css";
import frame1 from "../Project_component/img/Frame1.png";
import frame2 from "../Project_component/img/Frame2.png";
import frame3 from "../Project_component/img/Frame3.png";
import frame4 from "../Project_component/img/Frame4.png";
import frame5 from "../Project_component/img/Frame5.png";
import frame6 from "../Project_component/img/Frame6.png";
import Pagination from "../Project_component/Pagination";
import { Link } from "react-router-dom";

export default function Projects_Home() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const grid_pht = [
    {
      id: 1,
      icon: frame1,
      alt: "Modern Villa Renovation",
      Text: "Commercial",
    },
    {
      id: 2,
      icon: frame2,
      alt: "Cottage Renovation",
      Text: "Renovation",
    },
    {
      id: 3,
      icon: frame3,
      alt: "Beach House",
      Text: "New Build",
    },
    {
      id: 4,
      icon: frame4,
      alt: "Office Tower",
      Text: "Commercial",
    },
    {
      id: 5,
      icon: frame5,
      alt: "Shopping Mall",
      Text: "Commercial",
    },
    {
      id: 6,
      icon: frame6,

      alt: "Luxury Apartment",
      Text: "Residential",
    },
  ];
  const filteredProjects =
    activeFilter === "All Projects"
      ? grid_pht
      : grid_pht.filter((item) => item.Text === activeFilter);
  return (
    <>
      <div className="project-bg-img">
        <h1 id="project_heading">Projects</h1>
        <p id="project_para">Home/Projects</p>
      </div>

      <div className="container Project_Main_Class_Down">
        <div className="option_btn">
          {/* <button id="cnt">All Projects</button>
          <button id="cnt">Commercial</button>
          <button id="cnt">New Build</button>
          <button id="cnt">Renovation</button>
          <button id="cnt">Residential</button> */}
          {/* {working this but i want NavLink so} */}
          {[
            "All Projects",
            "Commercial",
            "New Build",
            "Renovation",
            "Residential",
          ].map((filter) => (
            <button
              key={filter}
              id="cnt"
              className={activeFilter === filter ? "active-btn" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* {in this the button will be} */}
        {/* {[
            { name: "All Projects", path: "/projects" },
            { name: "Commercial", path: "/projects/commercial" },
            { name: "New Build", path: "/projects/new-build" },
            { name: "Renovation", path: "/projects/renovation" },
            { name: "Residential", path: "/projects/residential" },
          ].map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              id="cnt"
              className={({ isActive }) => (isActive ? "active-btn" : "")}
            >
              {name}
            </NavLink>
          ))} */}
        <div className="image_grid">
          {filteredProjects.map((item, index) => {
            return (
              <div className="image_item" key={index}>
                <img src={item.icon} alt={item.alt} />

                <div className="over">
                  {/* <Link to={`/projects/${item.id}`}> */}
                  <Link to="/projects/details">
                    <h1>{item.alt}</h1>
                  </Link>
                  <p>{item.Text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination />
      </div>
    </>
  );
}
