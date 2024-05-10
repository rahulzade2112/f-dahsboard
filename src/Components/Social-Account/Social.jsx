import React from "react";
import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import whatsappIcon from "./twitter.svg";
import instagramIcon from "./instagram.svg";
import "./Social.css";
const Social = () => {
  return (
    <div className="social-container">
      <div style={{ display: "flex", gap: "15px" }}>
        <div className="socialcontent">
          <img className="icon-img" src={facebookIcon}></img>
          <span> 323.23k</span>
          <p>FaceBook</p>
        </div>
        <div className="socialcontent">
          <img className="icon-img" src={twitterIcon}></img>
          <span>323.23k </span>
          <p>Twitter</p>
        </div>
      </div>
      <br></br>



      <div style={{ display: "flex", gap: "15px" }}>
        <div className="socialcontent">
        <img className="icon-img" src={whatsappIcon}></img>
          <span> 323.23k</span>
          <p>FaceBook</p>
        </div>

        <div className="socialcontent">
          <img className="icon-img" src={instagramIcon}></img>
          <span>323.23k </span>
          <p>Instagram</p>
        </div>
      </div>

    </div>
  );
};

export default Social;
