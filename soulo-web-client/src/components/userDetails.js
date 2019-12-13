import React from "react";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
  }
  render() {
    return (
      <div>
        <div className="headerCover">
          <img
            className="profile-img"
            src={require("../assets/IMG_1121.png")}
            alt="cover-img"
          />
        </div>
        <div className="userInfo">
          <h1>{this.props.firstName + " " + this.props.lastName}</h1>
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
}

export default UserDetail;
