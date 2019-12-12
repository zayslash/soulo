import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Navigation(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <NavLink className="navbar-brand nav-link2 " exact to="/upload">
            <i className={"fa fa-arrow-up uploadImg"}></i>
            <div className="UploadName">Upload</div>
          </NavLink>
        </li>

        <li className="nav-item tim">
          <NavLink className="" exact to="/profile">
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
            onClick={handleClick}
          >
            <i className={"fa fa-bars menuImg"}></i>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <NavLink className="" exact to="/profile">
                <img
                  src={require("../assets/test.JPG")}
                  className="profilePicture"
                />
                <div className="userProfileName">Jonathan</div>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink className="navbar-brand nav-link2 " exact to="/upload">
                <i className={"fa fa-arrow-up uploadImg"}></i>
                <div className="UploadName">Upload</div>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
