import React from "react";

function UserDetail({ firstName, lastName }) {
  return (
    <div>
      <div className="headerCover">
        <img
          className="profile-img"
          src={require("../assets/test.JPG")}
          alt="cover-img"
        />
      </div>
      <div className="userInfo">
        <h1>{firstName + " " + lastName}</h1>
        <p>{"New York,United States"}</p>
        <br />
        <p> {"A breif description of the User and channel"} </p>
        <br />
        <div className="userStats">
          <div>
            <h2>
              <div className="blackText">{23} </div>followers
            </h2>
            <h2>
              <div className="blackText">{456} </div>plays
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
