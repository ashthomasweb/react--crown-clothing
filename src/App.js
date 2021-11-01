import React, { Component } from "react";
import "./App.css";

import HomePage from "./components/homepage/home.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Ashley",
      string: "Test Me:"
    };
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }


}

export default App;
