import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import { Header } from "./components";

// screens
import SearchScreen from "./screens/search";

export default () => (
  <Router>
    <Header />
    <div style={{ margin: "40px 15px" }}>
      <Switch>
        <Route component={SearchScreen} path="/" />
      </Switch>
    </div>
  </Router>
);
