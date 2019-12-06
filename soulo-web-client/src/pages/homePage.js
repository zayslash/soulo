import React, { Component } from "react";
import "./homePage.css";
import Post from "../components/Post.js";
import Card from "../components/Card.js";
import Player from "../services/Player";

import ScrollContainer from "react-indiana-drag-scroll";
import { NavLink } from "react-router-dom";
import UserProfile from "./userProfile";
export default class homePage extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <h3>Users</h3>
        <ScrollContainer
          vertical={false}
          horizontal={true}
          nativeMobileScroll={true}
          className="scroll-container"
        >
          <div className="IconPopulation">
            <NavLink
              className="nav-link"
              exact
              to="/profile"
              render={props => (
                <UserProfile
                  {...props}
                  name={"Nona"}
                  location={"New York,United States"}
                  about={"A breif description of the User and channel"}
                  profileImage={require("../test.JPG")}
                />
              )}
            >
              <Card
                // title="Rayona P"
                image={require("../test.JPG")}
                caption="NoNa"
                subtitle="live"
              />
            </NavLink>
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

            <Card
              image={require("../test.JPG")}
              caption="EzyEvee"
              subtitle="live"
            />
            <Card
              image={require("../test.JPG")}
              caption="EzyEvee"
              subtitle="live"
            />
            <Card
              image={require("../test.JPG")}
              caption="EzyEvee"
              subtitle="live"
            />
            <Card
              image={require("../test.JPG")}
              caption="EzyEvee"
              subtitle="live"
            />

            <Card
              image={require("../test.JPG")}
              caption="EzyEvee"
              subtitle="live"
            />
            <Card
              image={require("../test.JPG")}
              caption="EzyEvee"
              subtitle="live"
            />
            <Card
              image={require("../test.JPG")}
              caption="EzyEvee"
              subtitle="live"
            />
          </div>
        </ScrollContainer>
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
