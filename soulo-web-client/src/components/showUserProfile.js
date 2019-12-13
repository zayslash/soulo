import React from "react";
import UserProfile from "../pages/userProfile.js";

class ShowUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          user: user
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          notFound: true
        });
      });
  }

  render() {
    return <UserProfile user={this.state.user} />;
  }
}

export default ShowUserProfile;
