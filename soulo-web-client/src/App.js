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

function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3 appContainer">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="navbar-brand nav-link2 " exact to="/home">
            <img
              alt="soulo"
              className="App-logo"
              src={require("./assets/logo.png")}
            />
          </NavLink>
          {console.log(auth.isAuthenticated)}
        </li>

        <li className="nav-item">
          <form>
            <input className="searchbar" placeholder="Search"></input>
          </form>
        </li>

        <li className="nav-item upload">
          <NavLink className="navbar-brand nav-link2 " exact to="/upload">
            <i className={"fa fa-arrow-up uploadImg"}></i>
            <div className="UploadName">Upload</div>
          </NavLink>
        </li>

        <li className="nav-item tim">
          <NavLink className="" exact to="/profile">
            <img
              src={require("./assets/test.JPG")}
              className="profilePicture"
            />
            <div className="userProfileName">Jonathan</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

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
