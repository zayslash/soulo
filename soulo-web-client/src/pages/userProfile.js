import React from "react";
import "./userProfile.css";
import Player from "../services/Player";

// import P5Wrapper from "react-p5-wrapper";
// import sketch from "../components/spectrumAnalyzer.js";

function UserProfile(props) {
  return (
    <div className="MainContainer">
      <div className="headerCover">
        <img className="profile-img" src={props.profileImage} alt="cover-img" />
      </div>
      <div className="userInfo">
        <p>
          <h1>{props.name} </h1>
        </p>
        <p>{props.location}</p>
        <br />
        <p> {props.about} </p>
        <br />
        <div className="userStats">
          <p>
            <h2> {props.followerCount} followers</h2>
            <h2> {props.plays} plays</h2>
          </p>
        </div>
      </div>

      {/* <P5Wrapper sketch={sketch} /> */}

      <div className="audio_player_container">
        <Player />
      </div>
    </div>
  );
}

export default UserProfile;
