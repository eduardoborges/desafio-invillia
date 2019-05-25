import React from "react";
import { hot } from "react-hot-loader";

import { Hello } from "./components";

function App() {
  return (
    <div className="container">
      <Hello />
    </div>
  );
}

export default hot(module)(App);
