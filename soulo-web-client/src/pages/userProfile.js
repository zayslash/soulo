import React from "react";
import "./userProfile.css";
// import Card from "../components/Card.js";

function Card(props) {
  return (
    <div className="Container">
      <div className="Cover">
        <img className="Image" alt="imgHolder" src={props.image} />
        <div className="Title"> {props.title} </div>
      </div>
      <div className="Content">
        <img className="Logo" alt="logo" src={props.logo} />
        <div className="Wrapper">
          <div className="Caption"> {props.caption} </div>
          <div className="Subtitle"> {props.subtitle} </div>
        </div>
      </div>
    </div>
  );
}

function userProfile(props) {
  return (
    <div className="MainContainer">
      <div className="UserSection">
        <div className="headerCover">
          <img
            className="profile-img"
            src={require("../test.JPG")}
            alt="cover-img"
          />
        </div>
        <div className="userInfo">
          <p>
            <h1> Jaime Right </h1>
          </p>
          <p> New York, United States </p>
          <p> Interior and industrial Designer </p>
        </div>
      </div>

      <div className="stations">
        <h4>Favourite Stations</h4>
        <Card
          title="NYC Pulse Radio"
          image={require("../test.JPG")}
          caption="Mike Star"
          subtitle="live"
          logo={require("../orange.jpg")}
        />

        <Card
          title="NYC Pulse Radio"
          image={require("../test.JPG")}
          caption="Mike Star"
          subtitle="live"
          logo={require("../orange.jpg")}
        />

        <Card
          title="NYC Pulse Radio"
          image={require("../test.JPG")}
          caption="Mike Star"
          subtitle="live"
          logo={require("../orange.jpg")}
        />
      </div>
    </div>
  );
}

export default userProfile;
