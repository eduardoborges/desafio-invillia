import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components
import { Header } from "./components";

// screens
import SearchScreen from "./screens/search";

export default () => (
  <Router>
    <Header />
    <div style={{ marginTop: 40 }}>
      <Switch>
        <Route component={SearchScreen} path="/" />
      </Switch>
    </div>
  </Router>
);
