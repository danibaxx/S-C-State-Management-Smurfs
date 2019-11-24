import React, { useState } from "react";
import { Route } from 'react-router-dom';

// context
import { SmurfContext } from "./context/SmurfContext";

// components
import Header from './Header';
import Nav from './Nav';
import Smurf from './Smurf';
import SmurfForm from "./SmurfForm";

import "./App.css";

const App = () => {
  const [smurfs] = useState();

  return (
    <SmurfContext.Provider value={smurfs}>
      <div className="App">
        <Nav />
        <Header />
        <Route exact path='/smurfs' component={Smurf} />
        <Route exact path='/addsmurf' component={SmurfForm} />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
