import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import greetingPage from "./pages/greetingPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import UserProfile from "./pages/userProfile";
import UploadSongs from "./pages/uploadSongs";
import HomePage from "./pages/homePage";
import ShowUserProfile from "./components/showUserProfile";
import Player from "./services/player";
import PrivateRoute from "./components/privateRoute";
import Navigation from "./components/navigation";
import MyAccount from "./pages/myAccount";

function Footer() {
  return (
    <div className="audio_player_container">
      <Player />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      player: null
    };
  }

  componentDidMount() {
    if (this.state.isAuthenticated) {
      this.setState({ player: <Footer /> });
    } else {
      this.setState({ player: null });
    }
  }

  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <PrivateRoute path="/upload" component={UploadSongs} />
              <PrivateRoute path="/profile/:id" component={ShowUserProfile} />
              <PrivateRoute path="/myaccount" component={MyAccount} />
              <PrivateRoute path="/home" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/" component={greetingPage} />
            </Switch>
          </div>
        </div>
        {/* {this.state.isAuthenticated && this.state.player} */}
        <Footer />
      </Router>
    );
  }
}

export { Footer, App as default };
