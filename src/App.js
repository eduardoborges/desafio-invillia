import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "unistore/react";

import store from "./store";
import RootRoutes from "./routes";

function App() {
  return (
    <div className="root">
      <Provider store={store}>
        <RootRoutes />
      </Provider>
    </div>
  );
}

export default hot(module)(App);
