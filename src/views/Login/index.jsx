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

const initialFormValues = {
  username: "",
  password: "",
};

export const LoginView = () => {
  const AuthContext = useContext(authContext);

  const handleLogin = ({ username, password }) =>
    AuthContext.login({ username, password });

  return (
    <Container>
      <Formik
        initialValues={initialFormValues}
        validationSchema={loginFormSchema}
        onSubmit={handleLogin}
        validateOnBlur
        validateOnSubmit
        validateOnChange
      >
        {({ values, handleChange }) => (
          <Form>
            <Input
              name="username"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div>
              <ErrorMessage name="username" />
              <ErrorMessage name="password" />
            </div>
            Note: Any valid email address and password are accepted.
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginView;
