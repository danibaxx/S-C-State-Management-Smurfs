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
import { AddSmurfContext } from "../context/AddSmurfContext";

const App = () => {
  // initial state
  const [smurfs, setSmurfs] = useState([]);
  // console.log('APP', smurfs)
  // adding new smurfs to state
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
  })

  // axios call for getting smurfs to render
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

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(result => {
        setSmurf({
          name: '',
          age: '',
          height: ''
        })
        console.log('Smurf has been added', result.data)  
      })
      .catch(error => {
        console.log('POST ERROR', error)
      })
  }

  return (
    <SmurfContext.Provider value={smurfs}>
      <AddSmurfContext.Provider value={{smurf, handleChange, handleSubmit}}>
        <div className="App">
          <Header />

          {/* Routes */}
          <Route exact path='/smurfs' component={Smurf} />
          <Route exact path='/addsmurf' component={SmurfForm} />
        </div>
      </AddSmurfContext.Provider>
    </SmurfContext.Provider>
  );
}

export default App;
