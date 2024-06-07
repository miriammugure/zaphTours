import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import "./Contacts.css";

function Contacts() {
  return (
    <div>
      <div className="form">
        <div className="formContacts">
          <div className="input-form">
            <legend>fill out this form:</legend>
            <form action="">
              <label htmlFor="name">name</label>
              <input type="text" placeholder="John Doe" />
              <label htmlFor="email">email</label>
              <input type="email" placeholder="johndoe@example.com" />
              <label htmlFor="message">talk to us</label>
              <textarea />
              <button type="submit" className="btnSubmit">
                submit
              </button>
            </form>
          </div>

          <div className="companyDetails">
            <div className="detail1">
              <FaPhone />
              <p>0110638872</p>
            </div>
            <div className="detail1">
              <MdEmail />
              <p>zaphtours@gmail.com</p>
            </div>
            <div className="detail1">
              <CiLocationOn />
              <p>located in murang'a</p>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="mapText">
            <p>find us at zaph tours in muranga county &rarr;</p>
            {/* <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat illum cupiditate ratione quod sunt? Quaerat consequatur alias accusamus ipsa ut.</h4> */}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31916.009556217316!2d37.13520059495396!3d-0.7224033406717605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a28207db7113%3A0xbc8b3625ac089be8!2sMurang&#39;a!5e0!3m2!1sen!2ske!4v1717784085793!5m2!1sen!2ske"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
