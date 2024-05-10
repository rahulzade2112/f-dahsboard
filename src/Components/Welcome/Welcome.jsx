import React from "react";
import pic1 from "./../../assets/yr.png";
import "./w.css";
import mPic from "./pngwing.com (3).png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Welcome = () => {
  //   var [currentPic, setPic] = useState(pic1);
  //   var [arrIndex, setIndex] = useState(0);
  //   var picArray = [pic1, pic2];
  //   const nextImage = () => {
  //     if (arrIndex == picArray.length - 1) {
  //       setPic(picArray[0]);
  //       setIndex(0);
  //     } else {
  //       setPic(picArray[arrIndex + 1]);
  //       setIndex(arrIndex + 1);
  //     }
  //   };
  //   const previousImage = () => {
  //     if (arrIndex == 0) {
  //       setPic(picArray[0]);
  //     } else {
  //       setPic(picArray[arrIndex - 1]);
  //       setIndex(arrIndex - 1);
  //     }
  //   };   
   {/* <video   autoplay="" loop=""  >
   <source type="video/mp4" src="https://v.ftcdn.net/03/16/56/99/700_F_316569921_LEYs6xNlDKhGRxah8mxRjxvqXPjBK8SW_ST.mp4"/>
                  </video> */}
  return (
    <div>
     
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner">
            <div className="item m active">
              <div className="carousel-caption d-none d-md-block"></div>
                <p className="Wlc-fcarousel-text" >Hi... 👋,<br/><br/> Welcome back <br/><br></br> Rahul Zade</p>
              <img className="carousel1" src={pic1} alt="Los Angeles"></img>
            </div>
        
            <div className="item m2">
              <div
                style={{
                  left: "81%",
                  background: "red",
                  borderRadius: "10px",
                  position: "absolute",
                  display: "inline-flex",
                  flexDirection: "row",
                  paddingLeft: "10px",
                  height: "30px",
                  width: "120px",
                  top: "15px",
                }}
              >
                <p
                  style={{
                    paddingLeft: "40px",
                    paddingTop: "5px",
                    color: "white",
                    display: "center",
                    fontSize: "16px",
                  }}
                >
                  Live
                </p>
                <span className="live-on"></span>
              </div>
              <img className="carousel2" src={mPic} alt="Chicago"></img>
            </div>

            <div className="item">
              <img className="carousel1" src={pic1} alt="New york"></img>
            </div>
          </div>
        </div>
      </div>
    
   
  );
};

export default Welcome;
