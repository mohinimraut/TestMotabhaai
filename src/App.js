import React, { Component } from "react";
import "./App.css";
import FetchMovie from "./components/FetchMovie"
class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchMovie/>
      </div>
    );
  }
}

export default App;
