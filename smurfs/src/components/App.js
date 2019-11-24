import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

// context
import { SmurfContext } from "../context/SmurfContext";

// components
import Header from './Title/Header';
import Smurf from '../Smurfs/Smurf';
import SmurfForm from "../Smurfs/SmurfForm";

import "./App.css";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  console.log('APP', smurfs)

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(result => {
      setSmurfs(result.data)
      console.log('useEffect', result.data)
    })
    .catch(error => {
      console.log("GET ERROR", error)
    })
  }, [])

  // const addSmurfs = () => {
  //   setSmurfs()
  // }

  return (
    <SmurfContext.Provider value={smurfs}>
      <div className="App">
        <Header />

        {/* Routes */}
        <Route exact path='/smurfs' component={Smurf} />
        <Route exact path='/addsmurf' component={SmurfForm} />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
