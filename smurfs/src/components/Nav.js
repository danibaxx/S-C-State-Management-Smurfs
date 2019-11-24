import React from 'react';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

export default function Nav() {
  return (
    <div>
      <button>
        <NavLink to='/'>Home</NavLink>
        </button>
        <button>
        <NavLink to='/smurfs'>Smurfs</NavLink>
        </button>
        <button>
        <NavLink to='/addsmurf'>Add Smurfs</NavLink>
        </button>
    </div>
  )
}