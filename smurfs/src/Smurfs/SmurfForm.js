import React, { useState } from 'react';
import axios from 'axios';

export default function SmurfForm() {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
  })
  // console.log('SMURF FORM', smurf)

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
    <div>
      <h1>Add Smurf:</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={smurf.name}
          onChange={handleChange}
        />
        <input 
          type="number"
          name="age"
          placeholder="Age"
          value={smurf.age}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="height"
          placeholder="Height"
          value={smurf.height}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
      
    </div>
  )
};