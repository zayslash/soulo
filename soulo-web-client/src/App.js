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
import UserProfile from "./pages/UserProfile";
import UploadSongs from "./pages/UploadSongs";
import auth from "./services/auth";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="navbar-brand nav-link2 " exact to="/">
            <img alt="soulo" className="App-logo" src={require("./logo.png")} />
          </NavLink>
          {console.log(auth.isAuthenticated)}
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff5500"
          fill-opacity="1"
          d="M0,256L10,240C20,224,40,192,60,160C80,128,100,96,120,80C140,64,160,64,180,85.3C200,107,220,149,240,144C260,139,280,85,300,101.3C320,117,340,203,360,213.3C380,224,400,160,420,117.3C440,75,460,53,480,64C500,75,520,117,540,122.7C560,128,580,96,600,117.3C620,139,640,213,660,240C680,267,700,245,720,202.7C740,160,760,96,780,96C800,96,820,160,840,181.3C860,203,880,181,900,186.7C920,192,940,224,960,245.3C980,267,1000,277,1020,256C1040,235,1060,181,1080,181.3C1100,181,1120,235,1140,250.7C1160,267,1180,245,1200,245.3C1220,245,1240,267,1260,234.7C1280,203,1300,117,1320,117.3C1340,117,1360,203,1380,250.7C1400,299,1420,309,1430,314.7L1440,320L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"
        ></path>
      </svg>
      <div className="footer">copyright © soulo 2019</div>
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
              <Route path="/profile" component={UserProfile} />
              <Route path="/upload" component={UploadSongs} />
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
