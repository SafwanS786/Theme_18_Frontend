import React from "react";
import { useParams } from "react-router-dom";
import details from "../Blog_component/img/Details.png";
import "../../Styles/Blog_Style/Details.css";
import Info_images from "../Blog_component/img/Info.jpg";
import Image1 from "../Blog_component/img/image 1.jpg";

export default function Blog_Detalis() {
  const { id } = useParams();
  return (
    <>
      <div
        className="Blog_Details"
        style={{ backgroundImage: `url(${details})` }}
      >
        <h1>Blog Details{id}</h1>
        <p>Home/Blog Details</p>
      </div>
      <div className="container Blog_Down_Detail_Page">
        <img src={Info_images} alt="Details" />
      </div>
      <div className="container blog_text">
        <h1>Modern Construction Techniques</h1>
        <p>
          Collaboratively pontificate bleeding edge resources with inexpensive
          methodologies globally initiate multidisciplinary compatible
          architectures piteously repurpose leading-edge growth strategies with
          just in time web-readiness communicate timely meta-services.
        </p>
        <p>
          Onubia semper vel donec torquent fusce mauris felis aptent lacinia
          nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet
          condimentum dictum, quisque quam risus sollicitudin gravida ut odio
          per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis,
          mollis vestibulum donec aliquam risus sapien ridiculus, nulla
          sollicitudin eget in venenatis. Tortor montes platea iaculis posuere
          per mauris, eros porta blandit curabitur ullamcorper varius.
        </p>
        <img src={Image1} alt="Image" />
        <p>
          Ultrices iaculis commodo parturient euismod pulvinar donec cum eget a,
          accumsan viverra cras praesent cubilia dignissim ad rhoncus. Gravida
          maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum
          donec aliquam risus sapien ridiculus, nulla sollicitudin eget in
          venenatis. Tortor montes platea iaculis posuere per mauris, eros porta
          blandit curabitur ullamcorper varius, nostra ante risus egestas
          suscipit. Quisque interdum nec parturient facilisis nunc ac quam, ad
          est cubilia mauris himenaeos nascetur vestibulum.
        </p>
        <h1>Leave a Reply</h1>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="form-container">
          <label htmlFor="name">Full Name*</label>
          <input type="text" id="Full_Name" placeholder="Enter Name" />
          <label htmlFor="Adrs">Address*</label>
          <input type="text" id="adrs" placeholder="Enter Address"></input>
          <label htmlFor="Comment">Comment</label>
          <textarea type="text" placeholder="Comment">
            Comment
          </textarea>
          <button type="submit" className="btn_submit">
            Post Comment
          </button>
        </div>
      </div>
    </>
  );
}
