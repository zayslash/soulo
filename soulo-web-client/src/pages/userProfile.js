import React from "react";
import "./userProfile.css";
import "./homePage.css";
import ScrollContainer from "react-indiana-drag-scroll";
import Post from "../components/post";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/users/" + id)
      .then(res => res.json())
      .then(user => {
        this.setState({
          loading: false,
          posts: user.getPosts().map((post, ii) => <Post {...post} key={ii} />),
          user: user
        });
      })
      .catch(err => console.log("API ERROR: ", err));
    console.log(this.state.user);
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
          <h1>{this.props.name}</h1>
          <p>{this.props.location}</p>
          <br />
          <p> {this.props.about} </p>
          <br />
          <div className="userStats">
            <div>
              <h2> {this.props.followerCount} followers</h2>
              <h2> {this.props.plays} plays</h2>
            </div>
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
      </div>
    );
  }
}

export default UserProfile;
