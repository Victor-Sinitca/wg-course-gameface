import React, {Component} from "react";
// @ts-ignore
import {hot} from "react-hot-loader";
import {Header} from "../header/header";
import {MainContainer} from "@/components/mainContainer/MainContainer";
import {Provider} from "react-redux";
import store from "@/redux/redux";


export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div id="app" className="app-container">
                    <Header/>
                    <MainContainer/>
                </div>
            </Provider>
        );
    }
}

export default hot(module)(App);
