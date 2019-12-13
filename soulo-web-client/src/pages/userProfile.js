import React from "react";
import "./userProfile.css";
import "./homePage.css";
import ScrollContainer from "react-indiana-drag-scroll";
import Post from "../components/post";
import UserDetail from "../components/userDetails";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: null
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf("/") + 1);
    fetch("/api/users/" + id)
      .then(res => res.json())
      .then(user => {
        this.setState({
          loading: false,
          // posts: user.getPosts().map((post, ii) => <Post {...post} key={ii} />),
          user: <UserDetail {...user} />
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return (
      <div className="MainContainer">
        <div>{this.state.user}</div>
        <div className="userAudio">
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
