import React from "react";
import "../../Styles/Contact_Style/Contact_Main.css";
import Contact_img from "../Contact_component/img/contact.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Map from "./Map";

export default function Contact_component() {
  return (
    <>
      <div
        className="Contact_img"
        style={{ backgroundImage: `url(${Contact_img})` }}
      >
        <h1>Contact Us</h1>
        <p>Home/Contact Us</p>
      </div>
      <div className="container Part_div">
        <div className="info_our">
          <h2>Get in Touch with Us</h2>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <ul className="info_contact">
            <li>
              <FaPhoneAlt id="ico" />
              <div>
                <span>Contact</span>
                <p>0929 555 0309</p>
              </div>
            </li>

            <li>
              <FaEnvelope id="ico" />
              <div>
                <span>Email</span>
                <p>Construction@example.com</p>
              </div>
            </li>
            <li>
              <FaMapMarkerAlt id="ico" />
              <div>
                <span>Address</span>
                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
              </div>
            </li>
          </ul>
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
            <div className="half">
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

      <div className="map_container">
        {/* <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.2140329553486!2d-75.23266468452555!3d43.09785797914485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d94f7c59e9278d%3A0x9fbc6f6b8f4b10e4!2s3517%20W%20Gray%20St%2C%20Utica%2C%20Pennsylvania%2057867!5e0!3m2!1sen!2sin!4v1699999999999"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <Map />
      </div>
    </>
  );
}
