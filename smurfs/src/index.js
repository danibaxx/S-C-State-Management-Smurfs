import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from "./components/App";

//styling 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById("root")
);
