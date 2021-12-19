import React from "react";
import ReactDOM from "react-dom";
import App  from "./components/app/app";
// cohtml.js exports an ES6 module, you can use
// import statement to include it in the bundle
import '../cohtml.js';
import "./scss/enterPoint.scss"
// @ts-ignore
import {pm} from 'postmessage-polyfill';
// @ts-ignore
import {fetch as fetchPolyfill} from 'whatwg-fetch';

/*window.postMessage = function(message) {
    pm({
        type: message.type,
        origin: 'http://127.0.0.1/:9000',
        target: window,
        data: message.data
    });
};*/


ReactDOM.render(<App/>, document.getElementById("root"));
