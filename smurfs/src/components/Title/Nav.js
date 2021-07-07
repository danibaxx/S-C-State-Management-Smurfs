import React from 'react';
import { NavLink } from 'react-router-dom';

// styling
import './title.css';

export default function Nav() {
  return (
    <div className='nav-wrap'>
        <NavLink 
          to='/'
        >
          Home
        </NavLink>
        <NavLink 
          to='/smurfs'
        >
          Smurfs
        </NavLink>
        <NavLink 
          to='/addsmurf'
        >
          Add Smurfs
        </NavLink>
    </div>
  )
}