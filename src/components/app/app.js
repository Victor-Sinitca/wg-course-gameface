import React, { Component } from "react";
import { hot } from "react-hot-loader";
import {Header} from "../header/header";
import "@scss/enterPoint.scss"
import {MainContainer} from "@/components/mainContainer/MainContainer";



class App extends Component {
  render() {
    return (
      <div id="app" className="app-container">
          <Header/>
          <MainContainer/>
      </div>
    );
  }
}

export default hot(module)(App);
