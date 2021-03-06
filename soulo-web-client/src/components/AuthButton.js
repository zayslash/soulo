import React from "react";
import { withRouter, Link } from "react-router-dom";

import auth from "../services/auth";
import UserProfile from "../pages/UserProfile";
import { Redirect } from "react-router-dom";
import LoginPage from "../pages/loginPage";

const classes = "btn btn-primary";

const AuthButton = withRouter(({ history }) => {
  if (!auth.isAuthenticated) {
    // return <Link className={classes} to="/login">Login</Link>;
    return <Redirect to="/login" component={LoginPage} />;
  }

  const logout = () => {
    auth.signout().then(() => history.push("/"));
  };

  return (
    <div>
      <Redirect to="/profile" component={UserProfile} />
      <button className={classes} onClick={logout}>
        Logout
      </button>
    </div>
  );
});

export default AuthButton;
