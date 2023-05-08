import React from "react";
import banner from "../images/banner.png";
import '../Styles/Contact.css'

export const ContactUs = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle iletişime geçin</h1>
        <form>
          <label>Adnız ve Soyadınız:</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı ve soyadınızı yazınız..."
          />
          <label>Emailinizi giriniz:</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailmizi giriniz.."
          />
          <textarea
            rows="6"
            name="meesage"
            placeholder="Lütfen mesajınızı yazın..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};
