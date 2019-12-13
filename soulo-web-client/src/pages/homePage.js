import React from "react";
import "./homePage.css";
import Post from "../components/post";
import Loading from "../components/loading";
import ScrollContainer from "react-indiana-drag-scroll";
import User from "../components/user";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      posts: [],
      users: [],
      userId: this.props.history.location.id,
      isLoading: true
    };
  }

  componentDidMount() {
    console.log(this.state.userId);
    fetch("/api/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          loading: false,
          users: users.map((user, ii) => (
            <User {...user} currentUserId={this.state.userId} key={ii} />
          ))
        });
      })
      .catch(err => console.log("API ERROR: ", err));

    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts.map((p, ii) => (
            <Post
              {...p}
              nickname="OG"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
              key={ii}
            />
          )),
          loading: false
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return (
      <div className="HomeContainer">
        <h3>Users</h3>
        <ScrollContainer
          vertical={false}
          horizontal={true}
          nativeMobileScroll={false}
          className="scroll-container"
        >
          <div className="IconPopulation">
            {this.state.loading ? <Loading /> : this.state.users}
          </div>
        </ScrollContainer>

        <h3>Featured</h3>
        <ScrollContainer
          vertical={false}
          horizontal={true}
          nativeMobileScroll={false}
          className="scroll-container"
        >
          <div className="userPosts">
            <Post
              nickname="Earl Pin"
              caption="Magic Monday"
              image={require("../assets/test1.png")}
            />
            <Post
              nickname="Earl Pin"
              caption="Point of View"
              image={require("../assets/IMG_1115.png")}
            />
            <Post
              nickname="Jonathan"
              caption="Shoot"
              image={require("../assets/IMG_1116.png")}
            />
            <Post
              nickname="Zapper John"
              caption="Meditation into tomorrow"
              image={require("../assets/IMG_1123.png")}
            />
            <Post
              nickname="Unseen Hurd"
              caption="Fashion Week NY Talk"
              image={require("../assets/IMG_1125.png")}
            />

            {/* This will be populated with data from the database */}
            {/* {this.state.posts} */}
          </div>
        </ScrollContainer>
      </div>
    );
  }
}

export default HomePage;
