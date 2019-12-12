import React from "react";
import { Slide } from "react-slideshow-image";
import "./greetingPage.css";

const slideImages = [
  require("../assets/slide1.jpg"),
  require("../assets/slide2.jpg"),
  require("../assets/slide3.jpg"),
  require("../assets/slide4.jpg"),
  require("../assets/slide5.jpg")
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

function greetingPage() {
  return (
    <div className="MainContainer">
      <h1>Create your own radio Experience</h1>
      <p>
        Sign up and deploy to our mobile app where listeners can subscribe and
        tune in to your shows.
      </p>
      <div className="Title-text">{/* <AuthButton /> */}</div>
      <div className="greeting-slides">
        <Slideshow />
      </div>
    </div>
  );
}

export default greetingPage;
