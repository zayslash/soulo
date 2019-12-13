import React from "react";
import UserProfile from "../pages/userProfile.js";
import auth from "../services/auth";

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    console.log(auth.emailAddress);
    fetch("/api/users/")
      .then(res => res.json())
      .then(users => {
        users.forEach(user => {
          if (user.email === auth.emailAddress) {
            this.setState({
              user: user
            });
          }
        });
      })
      .catch(err => console.log("API ERROR: ", err));
    console.log(this.state.user);
  }

  render() {
    return <UserProfile user={this.state.user} />;
  }
}

export default MyAccount;
