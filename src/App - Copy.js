import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: "Ashley",
      string: "Test Me:"
    }

  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, { this.state.name }.<br />I am React.<br />This is a button.
        </p>
       <button onClick={() => this.setState({ name: "Ash Thomas" })} >{ this.state.string }</button>
      </header>
      </div>
    );
  }

}

export default App;

// END of document
