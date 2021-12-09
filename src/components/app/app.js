import React, { Component } from "react";
import { hot } from "react-hot-loader";
import {Header} from "../header/header";
import {Main} from "../main/main";
import "../../scss/main.scss"






class App extends Component {
  render() {
    return (
      <div id="app" className="app-container">
          <Header/>
          <Main/>
      </div>
    );
  }
}

export default hot(module)(App);
