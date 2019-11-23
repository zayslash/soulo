import React from "react";
import "./UserProfile.css";

function UserProfile(props) {
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
          {/* <h1> {props.name} </h1> */}
        </p>
        <p> New York,United States </p>
        <p> About </p>
      </div>
    </div>
  );
}

export default UserProfile;
