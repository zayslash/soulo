import React from "react";
import { withRouter, Link } from "react-router-dom";

import auth from "../services/auth";
import UserProfile from "../pages/UserProfile";
import{ Redirect } from 'react-router-dom';

const classes = "btn btn-primary";

const AuthButton = withRouter(({ history }) => {
  if (!auth.isAuthenticated) {
    return <Redirect to="/profile" component={UserProfile}/>;
  }

  const logout = () => {
    auth.signout().then(() => history.push("/"));
  };

  return (
    <div>
      <UserProfile />
      <button className={classes} onClick={logout}>
        Logout
      </button>
    </div>
  );
});

export default AuthButton;
