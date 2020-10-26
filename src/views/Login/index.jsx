import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
  Button,
  FormText,
} from "reactstrap";
import { Formik, Form, ErrorMessage } from "formik";

import authContext from "context/Auth/AuthContext";
import { loginFormSchema } from "./schemas";

import styles from "./style.scss";

const initialFormValues = {
  username: "",
  password: "",
};

export const LoginView = () => {
  const AuthContext = useContext(authContext);

  const handleLogin = ({ username, password }) =>
    AuthContext.login({ username, password });

  return (
    <Container className="login-form-container">
      <h1>Welcome!</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={loginFormSchema}
        onSubmit={handleLogin}
        validateOnBlur
        validateOnSubmit
      >
        {({ values, handleChange }) => (
          <Form>
            <Input
              name="username"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <div className="error-message">
              <ErrorMessage name="username" />
            </div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="error-message">
              <ErrorMessage name="password" />
            </div>
            <button type="submit">Login</button>
            <div className="info-text">
              (Any valid email address, and any password are accepted)
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginView;
