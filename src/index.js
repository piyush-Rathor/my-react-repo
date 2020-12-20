import React from "react";
import ReactDOM from "react-dom";

import "./style.css"

const App=()=> {
  return <div>
      <h1>hello world!!!!</h1>
      <button className="button">Hey</button>
  </div>
}
ReactDOM.render(<App />, document.getElementById("root"));
