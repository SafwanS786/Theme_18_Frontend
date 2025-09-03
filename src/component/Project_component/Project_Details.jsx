import React from "react";
import "../../Styles/Project_Style/ProjectDtl.css";
import { useParams, Link } from "react-router-dom";
// 1 Information of Project
import Dlt1 from "../Project_component/img/Dlt_1.png";
import ch1 from "../Project_component/img/ch1.png";
import ch2 from "../Project_component/img/ch2.png";
//2 Information of Project
import Dlt2 from "../Project_component/img/frame2.png";
//3 Information of project
import frame3 from "../Project_component/img/Frame3.png";
//4 Information of project
import frame4 from "../Project_component/img/Frame4.png";

//5 Information of project
import frame5 from "../Project_component/img/Frame5.png";
//4 Information of project
import frame6 from "../Project_component/img/Frame6.png";

export default function Project_Details() {
  const ProjectData = [
    {
      id: 1,
      icon: Dlt1,
      alt: "Modern Villa Renovation",
      cltName: "Client",
      Name: "RC Builders",
      Loc: "Location",
      Loc_Add: "Nebraska Omaha, USA",
      Prj: "Project Year",
      Prj_Dt: "15 July 2025",
      Dur: "Duration",
      Dur_P: "2 Years, 3 Months",
      Bug: "Budget",
      Bug_Rs: "$10 Million",
      Heading: "Modern Villa Renovation – Redefining Luxury Living",
      Para1: `This renovation project transformed an outdated villa into a stunning
          modern residence, blending contemporary design with functional spaces.
          Our team handled every detail—from structural upgrades to high-end
          interior finishes—ensuring the villa met the client’s vision of a
          stylish, comfortable, and future-ready home.`,
      Para2: ` We embraced a neutral color palette, open-plan layouts, and natural
          materials to create a warm yet sophisticated living space. Large
          windows maximize natural light, while modern accents add personality.`,
      chlg: "The Challenge of project",
      Para3: ` Building construction is the process of planning, designing, and
          assembling structures such as homes, offices, malls, hospitals, and
          skyscrapers. It involves engineering, architecture, materials, and
          skilled labor to ensure buildings are safe, functional, and
          aesthetically pleasing.`,
      icon1: ch1,
      icon2: ch2,
      alt1: "Image",
      Para4: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.`,
      Para5: `   Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.`,
    },
    // {
    //   id: 2,
    //   icon: Dlt2,
    //   alt: "Cottage Renovation",
    //   cltName: "Client",
    //   Name: "Greenwood Family",
    //   Loc: "Location",
    //   Loc_Add: "Aspen, Colorado, USA",
    //   Prj: "Project Year",
    //   Prj_Dt: "10 March 2024",
    //   Dur: "Duration",
    //   Dur_P: "1 Year, 6 Months",
    //   Bug: "Budget",
    //   Bug_Rs: "$2.5 Million",
    //   Heading: "Cottage Renovation – Blending Rustic Charm with Modern Comfort",
    //   Para1: `This project transformed a decades-old countryside cottage into a
    //   cozy yet luxurious retreat. The renovation focused on preserving the
    //   rustic charm of the original structure while upgrading it with
    //   modern amenities for year-round comfort.`,
    //   Para2: `Natural wood, stone textures, and warm lighting were combined
    //   with smart layouts and energy-efficient solutions. The design
    //   seamlessly blends tradition with contemporary style,
    //   creating a welcoming family getaway.`,
    //   chlg: "The Challenge of Project",
    //   Para3: `The biggest challenge was maintaining the authentic character
    //   of the old cottage while ensuring structural stability and
    //   modern convenience. Limited space required creative planning,
    //   while remote location logistics added complexity.`,
    //   icon1: ch1,
    //   icon2: ch2,
    //   alt1: "Image",
    //   Para4: `Attention to detail was key. Every beam, stone, and fixture
    //   was carefully chosen to honor the cottage’s history while
    //   ensuring durability. The end result offers timeless appeal
    //   with contemporary function.`,
    //   Para5: `The renovated cottage now serves as a perfect family retreat,
    //   offering warmth, comfort, and style. It demonstrates how
    //   heritage architecture can be rejuvenated for future generations.`,
    // },
    // {
    //   id: 3,
    //   icon: frame3,
    //   alt: "Beach House",
    //   cltName: "Client",
    //   Name: "Coastal Homes",
    //   Loc: "Location",
    //   Loc_Add: "Malibu, California, USA",
    //   Prj: "Project Year",
    //   Prj_Dt: "18 May 2025",
    //   Dur: "Duration",
    //   Dur_P: "1 Year, 2 Months",
    //   Bug: "Budget",
    //   Bug_Rs: "$5 Million",
    //   Heading: "Beach House – Where Luxury Meets the Ocean Breeze",
    //   Para1: `This beach house project aimed to create a luxurious getaway with unobstructed ocean views and a blend of natural elements.`,
    //   Para2: `A combination of light colors, open space, and eco-friendly materials were used to complement the beachfront setting.`,
    //   chlg: "The Challenge of Project",
    //   Para3: `One of the challenges was designing to withstand coastal weather while keeping the structure aesthetically pleasing.`,
    //   icon1: ch1,
    //   icon2: ch2,
    //   alt1: "Image",
    //   Para4: `The project highlights smart design solutions with sustainability at its core.`,
    //   Para5: `A truly tranquil retreat for those looking for a peaceful escape by the sea.`,
    // },
    // {
    //   id: 4,
    //   icon: frame4,
    //   alt: "Office Tower",
    //   cltName: "Client",
    //   Name: "Global Enterprises",
    //   Loc: "Location",
    //   Loc_Add: "Downtown New York, USA",
    //   Prj: "Project Year",
    //   Prj_Dt: "22 October 2026",
    //   Dur: "Duration",
    //   Dur_P: "3 Years",
    //   Bug: "Budget",
    //   Bug_Rs: "$25 Million",
    //   Heading: "Office Tower – A New Landmark in the Skyline",
    //   Para1: `This office tower project focused on creating a modern, functional space for businesses with state-of-the-art technology.`,
    //   Para2: `We incorporated open floor plans, green building materials, and plenty of natural light to enhance work efficiency.`,
    //   chlg: "The Challenge of Project",
    //   Para3: `Ensuring minimal disruption to the surrounding area during construction while maintaining the tower's aesthetic appeal was a challenge.`,
    //   icon1: ch1,
    //   icon2: ch2,
    //   alt1: "Image",
    //   Para4: `The office tower boasts cutting-edge design with an emphasis on sustainability.`,
    //   Para5: `The project has been a significant addition to the city's business district.`,
    // },
    // {
    //   id: 5,
    //   icon: frame5,
    //   alt: "Shopping Mall",
    //   cltName: "Client",
    //   Name: "Urban Shopping Group",
    //   Loc: "Location",
    //   Loc_Add: "Los Angeles, USA",
    //   Prj: "Project Year",
    //   Prj_Dt: "5 July 2024",
    //   Dur: "Duration",
    //   Dur_P: "2 Years",
    //   Bug: "Budget",
    //   Bug_Rs: "$40 Million",
    //   Heading: "Shopping Mall – A Premier Retail Destination",
    //   Para1: `The mall project focuses on offering a premium shopping experience with a variety of retail, food, and entertainment options.`,
    //   Para2: `We designed the mall with ample space for events, creative store layouts, and high-end amenities for a unique retail experience.`,
    //   chlg: "The Challenge of Project",
    //   Para3: `Balancing design aesthetics with functionality and accommodating a large number of visitors was a significant challenge.`,
    //   icon1: ch1,
    //   icon2: ch2,
    //   alt1: "Image",
    //   Para4: `The mall is equipped with the latest technology for an interactive shopping experience.`,
    //   Para5: `This is a premier destination for shoppers and tourists alike, with a wide range of dining and entertainment options.`,
    // },
    // {
    //   id: 6,
    //   icon: frame6,
    //   alt: "Luxury Apartment",
    //   cltName: "Client",
    //   Name: "Skyline Living",
    //   Loc: "Location",
    //   Loc_Add: "Miami, Florida, USA",
    //   Prj: "Project Year",
    //   Prj_Dt: "15 December 2025",
    //   Dur: "Duration",
    //   Dur_P: "2 Years, 4 Months",
    //   Bug: "Budget",
    //   Bug_Rs: "$50 Million",
    //   Heading: "Luxury Apartments – Living in Style Above the City",
    //   Para1: `This luxury apartment complex offers high-end living spaces with panoramic views of the city skyline and cutting-edge interiors.`,
    //   Para2: `Smart home features, spacious living areas, and a focus on sustainability were key design considerations in this project.`,
    //   chlg: "The Challenge of Project",
    //   Para3: `Designing such a large-scale residential project in a dense urban environment posed several logistical challenges.`,
    //   icon1: ch1,
    //   icon2: ch2,
    //   alt1: "Image",
    //   Para4: `Each apartment boasts world-class amenities, including state-of-the-art fitness centers, pools, and smart technologies.`,
    //   Para5: `This complex is set to redefine luxury urban living, combining style, functionality, and technology.`,
    // },
  ];
  // const { id } = useParams();
  // const project = ProjectData.find((p) => p.id === parseInt(id));

  // if (!project) {
  //   return <div>Project not found</div>;
  // }
  return (
    <>
      <div className="Details_Img">
        <h1 id="Details_Head">Details</h1>
        <p id="Details_Para">Home/Project Details</p>
      </div>
      {/*--------------------------------------------------------------------Start Array ahiya thi ok */}
      <div className="container Details_Main">
        <Link to="/projects">
          <button id="cntt">Back to Projects</button>
        </Link>
        {ProjectData.map((item, index) => (
          <React.Fragment key={index}>
            <img src={item.icon} alt={item.alt} />
            <div className="Full_Details">
              <div className="clt">
                <p>{item.cltName}</p>
                <h4>{item.Name}</h4>
              </div>
              <div className="loc">
                <p>{item.Loc}</p>
                <h4>{item.Loc_Add}</h4>
              </div>
              <div className="prj">
                <p>{item.Prj}</p>
                <h4>{item.Prj_Dt}</h4>
              </div>
              <div className="dur">
                <p>{item.Dur}</p>
                <h4>{item.Dur_P}</h4>
              </div>
              <div className="bud">
                <p>{item.Bug}</p>
                <h4>{item.Bug_Rs}</h4>
              </div>
            </div>
            <h1 id="head_l">{item.Heading}</h1>
            <p id="para_l">{item.Para1}</p>
            <p id="para_l">{item.Para2}</p>
            <h3 id="challenge">{item.chlg}</h3>
            <p id="para_l">{item.Para3}</p>
            <div className="two_img">
              <img src={item.icon1} alt={item.alt1} />
              <img src={item.icon2} alt={item.alt1} />
            </div>
            <p id="para_l">{item.Para4}</p>
            <p id="para_l">{item.Para5}</p>
          </React.Fragment>
        ))}
      </div>
      <Link to="/projects">
        <button id="cntt">Back to Projects</button>
      </Link>
    </>
  );
}
