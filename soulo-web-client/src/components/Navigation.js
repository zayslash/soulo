import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import auth from "../services/auth";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      id: 1
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3 appContainer">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="navbar-brand nav-link2 " exact to="/home">
              <img
                alt="soulo"
                className="App-logo"
                src={require("../assets/logo.png")}
              />
            </NavLink>
            {console.log()}
          </li>

          <li className="nav-item">
            <form>
              <input className="searchbar" placeholder="Search"></input>
            </form>
          </li>

          <li className="nav-item upload">
            <NavLink
              className="navbar-brand nav-link2 "
              exact
              to={"/upload/" + this.state.id}
            >
              <i className={"fa fa-arrow-up uploadImg"}></i>
              <div className="UploadName">Upload</div>
            </NavLink>
          </li>

          <li className="nav-item tim">
            <NavLink className="" exact to={"/profile/" + this.state.id}>
              <img
                src={require("../assets/test.JPG")}
                className="profilePicture"
              />
              <div className="userProfileName">Jonathan</div>
            </NavLink>
          </li>

          <li className="nav-item dropMenu">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <i className={"fa fa-bars menuImg"}></i>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>
                <NavLink className="" exact to="/profile">
                  <img
                    src={require("../assets/test.JPG")}
                    className="profilePicture"
                  />
                  <div className="userProfileName">Jonathan</div>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <NavLink className="navbar-brand nav-link2 " exact to="/upload">
                  <i className={"fa fa-arrow-up uploadImg"}></i>
                  <div className="UploadName">Upload</div>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;
