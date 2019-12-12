import React from "react";
import "./homePage.css";
import Post from "../components/post";
import Loading from "../components/loading";
import ScrollContainer from "react-indiana-drag-scroll";
import User from "../components/user";
import MediaControlCard from "../components/postAlternative";

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
            <User {...user} user={user} key={ii} />
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
      <div className="MainContainer">
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

            <MediaControlCard />
            {/* This will be populated with data from the database */}
            {/* {this.state.posts} */}
          </div>
        </ScrollContainer>
      </div>
    );
  }
}

export default HomePage;
