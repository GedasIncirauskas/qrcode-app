import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Sandelys from "./container/Sandelys";
import QrCode from "./container/QrCode";
import QrScanner from "./container/QrScanner";
import EditUnit from "./components/MainTable/EditUnit";

ReactDOM.render(
  <React.Fragment>
    <Router>
      <App>
        <Route exact path="/" component={Sandelys} />
        <Route path="/qr-generatorius" component={QrCode} />
        <Route path="/qr-skaitytuvas" component={QrScanner} />
        <Route path="/redaguoti-produkta/:product" component={EditUnit} />
      </App>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
