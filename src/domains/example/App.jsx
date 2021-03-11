import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.name = "Floripa";
  }
  render() {
    return (
        <h2>Hello World {this.name}</h2>
    );
  }
}

export default App;
