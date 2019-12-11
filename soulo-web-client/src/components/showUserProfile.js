import React from "react";
import UserProfile from "../pages/userProfile.js";

class ShowUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/users/" + id)
      .then(res => res.json())
      .then(user => {
        this.setState({
          user: <UserProfile {...user} />,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          notFound: true
        });
      });
  }

  render() {
    return (
      <UserProfile
        name={"Nona"}
        location={"New York,United States"}
        about={"A breif description of the User and channel"}
        profileImage={require("../assets/test.JPG")}
        followerCount={28}
        plays={365}
      />
    );
  }
}

export default ShowUserProfile;
