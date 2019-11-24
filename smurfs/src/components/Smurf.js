import React, { useState, useEffect } from 'react';
import axios from 'axios';

// needs smurf context to gain axcess to parent component
export default function Smurf() {
  const [smurfs, setSmurfs] = useState([]) 
  console.log('SMURF', smurfs)

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

  return (
    <div className="smurf">
      {smurfs.map(smurf => (
        <>
          <div className={smurf.id}>
            <h3>{smurf.name} Smurf</h3>
            <strong>{smurf.height} tall</strong>
            <p>{smurf.age} smurf years old</p>
          </div>
        </>
      ))}
    </div>
  )
};