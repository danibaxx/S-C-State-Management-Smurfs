import React from 'react';

// components
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <Nav />
      <h1 className='header'>Smurfs Village</h1>
    </header>
  )
}