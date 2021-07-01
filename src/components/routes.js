import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import Sidebar from "./sidebar";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/App" component={Sidebar} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
