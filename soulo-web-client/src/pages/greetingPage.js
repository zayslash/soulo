import React from "react";
import { Zoom } from "react-slideshow-image";
import "./greetingPage.css";

const images = [
  "../assets/slide1.jpg",
  "../assets/slide2.jpg",
  "../assets/slide3.jpg",
  "../assets/slide4.jpg",
  "../assets/slide5.jpg"
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
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
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} />
          ))}
        </Zoom>
      </div>
    </div>
  );
}

export default greetingPage;
