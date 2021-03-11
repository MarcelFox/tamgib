import React from "react";
import Link from 'react-router-dom'
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.name = "Tamgib";
  }
  render() {
    return (
      <>
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <h2>Welcome to {this.name}</h2>
      </nav>
      </>
    );
  }
}

export default App;
