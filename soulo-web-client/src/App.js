import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";

import greetingPage from "./pages/greetingPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import UserProfile from "./pages/userProfile";
import UploadSongs from "./pages/uploadSongs";
import HomePage from "./pages/homePage";
import ShowUserProfile from "./components/showUserProfile";
import Player from "./services/Player";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";

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
              <Route
                path="/profile"
                render={props => (
                  <UserProfile
                    {...props}
                    name={"Jonathan"}
                    location={"New York,United States"}
                    about={"A breif description of the User and channel"}
                    profileImage={require("./assets/test.JPG")}
                  />
                )}
              />
              <PrivateRoute path="/upload" component={UploadSongs} />
              <Route path="/profile/:id" component={ShowUserProfile} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/home" component={HomePage} />
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
