# React Sample

# Setup

1. Run `npm install` in the root of the sample
2. Run:
    - `npm run bulid` for a minified production build
    - `npm run build:dev` for a development build
    - `npm run watch` to start a development server with hot module replacement

Make sure to add this polyfill in development mode:

```
import {pm} from 'postmessage-polyfill';
import {fetch as fetchPolyfill} from 'whatwg-fetch';

window.postMessage = function(message) {
    pm({
        type: message.type,
        origin: 'http://127.0.0.1/:9000',
        target: window,
        data: message.data
    });
};

```

*There's no need to manually install whatwg-fetch and postmessage-polyfill because
they are to the devDependencies of the sample.

# Enable HMR (Hot Module Replacement)

Import the react hot loader:

`import { hot } from "react-hot-loader";`

and export your main app as a hot module:

`export default hot(module)(App);`