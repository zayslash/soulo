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
      <div className="userInfo">
        <p>
          <h1>Jaime Right</h1>
        </p>
        <p>New York,United States</p>
        <p>About</p>
      </div>
    </div>
  );
}

export default userProfile;
