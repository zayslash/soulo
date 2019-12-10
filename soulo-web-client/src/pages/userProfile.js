import React from "react";
import "./userProfile.css";
import "./homePage.css";
import Player from "../services/Player";

import Post from "../components/Post.js";

import ScrollContainer from "react-indiana-drag-scroll";
import { NavLink } from "react-router-dom";

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

        <h3>Your Audio</h3>
        <ScrollContainer
          vertical={false}
          horizontal={true}
          nativeMobileScroll={false}
          className="scroll-container"
        >
          <div className="userProfilePosts">
            <Post
              nickname="Zagz"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />

            <Post
              nickname="OG"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="Yurr"
              avatar={require("../assets/av1.jpg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="GagN"
              avatar={require("../assets/av2.jpg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />

            <Post
              nickname="OG"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="Yurr"
              avatar={require("../assets/av1.jpg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="GagN"
              avatar={require("../assets/av2.jpg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            {/* more posts */}
          </div>
        </ScrollContainer>
      </div>

      {/* <P5Wrapper sketch={sketch} /> */}

      <div className="audio_player_container">
        <Player />
      </div>
    </div>
  );
}

export default UserProfile;
