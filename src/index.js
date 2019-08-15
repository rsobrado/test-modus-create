import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
// import $ from "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
      <Route path="/Landing" component={Landing} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
