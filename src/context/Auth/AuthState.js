import React, { useReducer } from "react";
import PropTypes from "prop-types";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import { LOGIN } from "./actions/types";

const AuthState = (props) => {
  const initialState = {
    user: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async ({ username, password }) => {
    try {
      // Typically this will be a network call to login, but we're faking it here
      const response = {
        status: 200,
        data: {
          username,
          first_name: "Alex",
          last_name: "Example",
          email_address: "sample@wcisel.codes",
          status: "active",
        },
      };
      const { data } = response;
      dispatch({ type: LOGIN, payload: data });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login: login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthState;
