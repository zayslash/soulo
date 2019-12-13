import React, { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import TextLoop from "react-text-loop";
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
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map(image => {
          return (
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

function greetingPage() {
  return (
    <div className="greetingsContainer">
      <div className="greetingNote">
        <h1>
          Create your own{" "}
          <TextLoop
            children={["radio", "podcast", "DJ", "marketing", "show host"]}
          />
          {""} Experience
        </h1>
        <p>
          Sign up and deploy to our mobile app where listeners can subscribe and
          tune in to your shows.
        </p>
      </div>
      <div className="Title-text">{/* <AuthButton /> */}</div>
      <div className="greeting-slides">
        <Slideshow />
      </div>
    </div>
  );
}

export default greetingPage;
