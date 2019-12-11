import React from "react";
import "./userProfile.css";
import "./homePage.css";
import Player from "../services/Player";

import ScrollContainer from "react-indiana-drag-scroll";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MainContainer">
        <div className="headerCover">
          <img
            className="profile-img"
            src={this.props.profileImage}
            alt="cover-img"
          />
        </div>
        <div className="userInfo">
          <p>
            <h1>{this.props.name} </h1>
          </p>
          <p>{this.props.location}</p>
          <br />
          <p> {this.props.about} </p>
          <br />
          <div className="userStats">
            <p>
              <h2> {this.props.followerCount} followers</h2>
              <h2> {this.props.plays} plays</h2>
            </p>
          </div>

          <h3>Your Audio</h3>
          <ScrollContainer
            vertical={false}
            horizontal={true}
            nativeMobileScroll={false}
            className="scroll-container"
          >
            <div className="userProfilePosts">{this.props.post}</div>
          </ScrollContainer>
        </div>

        <div className="audio_player_container">
          <Player />
        </div>
      </div>
    );
  }
}

export default UserProfile;
