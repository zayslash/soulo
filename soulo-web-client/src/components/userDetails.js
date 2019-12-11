import React from "react";

function UserDetail(props) {
  return (
    <div>
      <div className="headerCover">
        <img className="profile-img" src={props.profileImage} alt="cover-img" />
      </div>
      <div className="userInfo">
        <p>
          <h1>{props.firstName}</h1>
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
    </div>
  );
}

export default UserDetail;
