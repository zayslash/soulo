import React from "react";
import "./userProfile.css";
import "./homePage.css";
import ScrollContainer from "react-indiana-drag-scroll";
import Post from "../components/post";
import Loading from "../components/loading";
import UserDetail from "../components/userDetails";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [],
      userDetails: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        // posts: user.getPosts().map((post, ii) => <Post {...post} key={ii} />),
        userDetails: <UserDetail {...this.props.user} />
      });
    }, 500);
  }

  render() {
    return (
      <div className="MainContainer">
        <div> {this.state.loading ? <Loading /> : this.state.userDetails}</div>
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
