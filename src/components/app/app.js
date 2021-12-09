import React, { Component } from "react";

import Potions from '../potions'
import { hot } from "react-hot-loader";
import s from './app.css'
import Inventory_Frame from '../../images/Inventory_Frame.png'
import Inventory_HealthPotion from '../../images/Inventory_HealthPotion.png'
import InventoryPoisonPotion from '../../images/InventoryPoisonPotion.png'

import HeaderLogo from '../../images/logo/VectorSmartObject.png'





import {Header} from "../header/header";
import {Main} from "../main/Main";

class App extends Component {
  render() {
    return (
      <div id="app" className={s.appContainer}>
          <Header/>
          <Main/>
      </div>
    );
  }
}

export default hot(module)(App);
