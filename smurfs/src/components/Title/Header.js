import React from 'react';

// components
import Nav from './Nav';

// styling
import './title.css';

export default function Header() {
  return (
    <header className='header-wrap'>
        <Nav />
      <h1>Smurfs Village</h1>
    </header>
  )
}