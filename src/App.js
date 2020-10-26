import "./App.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Main from "views/Main";
import Login from "views/Login";
import Cart from "views/Cart";
import NoMatch from "views/NoMatch";

import AuthState from "context/Auth/AuthState";
import AuthenticatedRoute from "components/AuthenticatedRoute";
import UnauthenticatedRoute from "components/UnauthenticatedRoute";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Switch>
          <AuthenticatedRoute exact path="/" component={Main} />
          <AuthenticatedRoute exact path="/cart" component={Cart} />
          <UnauthenticatedRoute exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AuthState>
  );
};

export default App;
