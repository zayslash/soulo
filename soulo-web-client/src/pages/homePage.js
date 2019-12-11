import React from "react";
import "./homePage.css";
import Post from "../components/Post";
import Player from "../services/Player";
import ScrollContainer from "react-indiana-drag-scroll";
import User from "../components/user";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      posts: [],
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          loading: false,
          users: users.map((user, ii) => <User {...user} key={ii} />)
        });
      })
      .catch(err => console.log("API ERROR: ", err));

    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p, ii) => (
            <Post
              {...p}
              nickname="OG"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
              key={ii}
            />
          ))
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return (
      <div className="MainContainer">
        <h3>Users</h3>
        <ScrollContainer
          vertical={false}
          horizontal={true}
          nativeMobileScroll={false}
          className="scroll-container"
        >
          <div className="IconPopulation"> {this.state.users} </div>
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
              nickname="Zagz"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="Zagz"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="Zagz"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="Zagz"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            <Post
              nickname="Zagz"
              avatar={require("../assets/testprofile.jpeg")}
              caption="Point and Shoot"
              image={require("../assets/test.JPG")}
            />
            {/* This will be populated with data from the database */}
            {/* {this.state.posts} */}
          </div>
        </ScrollContainer>
        <div className="audio_player_container">
          <Player />
        </div>
      </div>
    );
  }
}

export default HomePage;
