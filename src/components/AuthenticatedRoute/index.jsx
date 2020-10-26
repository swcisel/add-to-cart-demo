import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

import authContext from "context/Auth/AuthContext";

const AuthenticatedRoute = ({ component: Component, path }) => {
  const AuthContext = useContext(authContext);

  return AuthContext.user ? (
    <Route component={Component} path={path} />
  ) : (
    <Redirect to="/login" />
  );
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.element,
  path: PropTypes.string,
};

export default AuthenticatedRoute;
