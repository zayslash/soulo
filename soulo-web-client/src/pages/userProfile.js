import React from "react";
import "./userProfile.css";

function userProfile(props) {
  return (
    <div className="MainContainer">
      <div className="headerCover">
        <img
          className="profile-img"
          src={require("../test.JPG")}
          alt="cover-img"
        />
      </div>
      <p></p>
    </div>
  );
}

export default userProfile;
