import React from "react";
import ReactDOM from "react-dom";

import MainNav from "./Components/MainNav/MainNav";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <MainNav />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
