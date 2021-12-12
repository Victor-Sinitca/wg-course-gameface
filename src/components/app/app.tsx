import React, { Component } from "react";
// @ts-ignore
import { hot } from "react-hot-loader";
import {Header} from "../header/header";
import {MainContainer} from "@/components/mainContainer/MainContainer";



export class App extends Component {
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
