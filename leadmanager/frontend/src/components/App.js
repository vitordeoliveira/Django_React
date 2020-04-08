import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Dashboard></Dashboard>
      </>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
