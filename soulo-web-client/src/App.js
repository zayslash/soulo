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
import SignUpPage from "./pages/SignUpPage";
import userProfile from "./pages/userProfile";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="navbar-brand nav-link2 " exact to="/">
            <img alt="soulo" className="App-logo" src={require("./logo.png")} />
          </NavLink>
        </li>

        <li className="nav-login">
          <NavLink className="nav-link" exact to="/login">
            login
          </NavLink>
          <NavLink className="nav-link" exact to="/signup">
            signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return <div className="footer">copyright © soulo 2019</div>;
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              {/* <Route path="/posts/:id" component={ShowPostPage} /> */}
              {/* <Route path="/about-us" component={AboutUsPage} /> */}
              <Route path="/profile" component={userProfile} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/" component={greetingPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
