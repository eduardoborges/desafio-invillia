import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

it("O app nao quebra :s", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
