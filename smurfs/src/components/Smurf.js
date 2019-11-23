import React, { useState } from 'react';

// needs smurf context to gain axcess to parent component
export default function Smurf() {
  const [smurf, setSmurf] = useState() 

  return (
    <div className="smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  )
};