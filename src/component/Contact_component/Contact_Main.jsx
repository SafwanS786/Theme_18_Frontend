import React from "react";
import "../../Styles/Contact_Style/Contact_Main.css";
import Contact_img from "../Contact_component/img/contact.png";

export default function Contact_component() {
  return (
    <>
      <div
        className="Contact_img"
        style={{ backgroundImage: `url(${Contact_img})` }}
      >
        <h1>Contact</h1>
      </div>
      <div className="container Part_div">
        <div className="info_our">
          <h2>Get in Touch with Us</h2>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="contact_form">
          <form>
            <div className="form_group">
              <label htmlFor="full_name">Full Name*</label>
              <input
                type="text"
                id="full_name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input type="tel" id="phone" placeholder="Phone Number" />
            </div>
            <div className="form_group">
              <label htmlFor="description">Description*</label>
              <textarea
                id="description"
                placeholder="Project Brief"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn_submit">
              Get A Quote
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
