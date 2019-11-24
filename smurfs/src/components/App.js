import React from "react";
import { Route } from 'react-router-dom';

// components
import Header from './Header';
import Nav from './Nav';
import Smurf from './Smurf';
import SmurfForm from "./SmurfForm";

import "./App.css";

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Route exact path='/smurfs' component={Smurf} />
      <Route exact path='/addsmurf' component={SmurfForm} />
    </div>
  );
}

export default App;
