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
import UploadSongs from "./pages/UploadSongs";
import HomePage from "./pages/homePage";
import auth from "./services/auth";
import ShowUserProfile from "./components/showUserProfile";
import Player from "./services/Player";

import Navigation from "./components/Navigation";

function Footer() {
  return (
    <div className="audio_player_container">
      <Player />
    </div>
  );
}

class App extends React.Component {
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
              <Route path="/upload/" component={UploadSongs} />
              <Route path="/profile/:id" component={ShowUserProfile} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/" component={greetingPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export { Footer, App as default };
