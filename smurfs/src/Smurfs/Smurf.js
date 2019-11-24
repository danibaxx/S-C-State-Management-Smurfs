import React, { useContext } from 'react';
import Smurfs from './Smurfs';

// context
import { SmurfContext } from '../context/SmurfContext';

// needs smurf context to gain axcess to parent component
export default function Smurf() {
  const smurfs = useContext(SmurfContext);

  return (
    <div className="smurf">
      {smurfs.map(smurf => (
        <div className={smurf.id}>
          <h3>{smurf.name} Smurf</h3>
          <strong>{smurf.height} tall</strong>
          <p>{smurf.age} smurf years old</p>
        </div>
      ))}
    </div>
  )
};