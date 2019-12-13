import React from "react";
import "./userProfile.css";
import "./homePage.css";
import ScrollContainer from "react-indiana-drag-scroll";
import Post from "../components/post";
import Posts from "../components/postList";
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
    this.setState({
      posts: Posts.map((post, ii) => <Post {...post} key={ii} />)
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        userDetails: <UserDetail {...this.props.user} />
      });
    }, 500);
  }

  render() {
    console.log(this.state.posts);
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
            <div className="userProfilePosts">{this.state.posts}</div>
          </ScrollContainer>
        </div>
      </div>
    );
  }
}

export default UserProfile;
