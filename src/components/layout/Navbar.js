import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/writePost">Write post</Link></li>
        <li><Link to="/profile">Profile</Link></li>
    </ul>
  )
}

export default Navbar;