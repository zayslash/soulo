import React, { Component } from "react";
import "./homePage.css";
import Post from "../components/Post.js";
import Card from "../components/Card.js";
import Player from "../services/Player";

export default class homePage extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="IconPopulation">
          <Card
            // title="Rayona P"
            image={require("../test.JPG")}
            caption="NoNa"
            subtitle="live"
          />

          <Card
            // title="Zay S"
            image={require("../test.JPG")}
            caption="Zayslash"
            subtitle="live"
          />

          <Card
            //title="Jona J"
            image={require("../test.JPG")}
            caption="JJamz"
            subtitle="live"
          />

          <Card
            // title="Mike M"
            image={require("../test.JPG")}
            caption="miKEY"
            subtitle="live"
          />
          <Card
            // title="Rayona P"
            image={require("../test.JPG")}
            caption="GardoZeen"
            subtitle="live"
          />

          <Card
            image={require("../test.JPG")}
            caption="ElvisHour"
            subtitle="live"
          />

          <Card
            image={require("../test.JPG")}
            caption="EzyEvee"
            subtitle="live"
          />
        </div>

        <div className="userPosts">
          <Post
            nickname="Zagz"
            avatar={require("../testprofile.jpeg")}
            caption="Point and Shoot"
            image={require("../test.JPG")}
          />

          <Post
            nickname="OG"
            avatar={require("../testprofile.jpeg")}
            caption="Point and Shoot"
            image={require("../test.JPG")}
          />
          <Post
            nickname="Yurr"
            avatar={require("../av1.jpg")}
            caption="Point and Shoot"
            image={require("../test.JPG")}
          />
          <Post
            nickname="GagN"
            avatar={require("../av2.jpg")}
            caption="Point and Shoot"
            image={require("../test.JPG")}
          />

          {/* more posts */}
        </div>

        <div className="audio_player_container">
          <Player />
        </div>
      </div>
    );
  }
}
