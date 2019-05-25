import React from "react";
import { hot } from "react-hot-loader";

import RootRoutes from "./routes";

function App() {
  return (
    <div className="root">
      <RootRoutes />
    </div>
  );
}

export default hot(module)(App);
