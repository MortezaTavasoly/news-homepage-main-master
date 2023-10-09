import React from "react";
import contentImage from "../assets/images/image-web-3-desktop.jpg";
import "./content.css";
export default function Content() {
  return (
    <div className="news-content">
      <img src={contentImage} alt="content-image" className="content-image" />
      <div className="text">
        <h1 className="title">The Bright Future of Web 3.0?</h1>
        <div className="information">
          <p className="info-text">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="info-but">READ MORE</button>
        </div>
      </div>
    </div>
  );
}
