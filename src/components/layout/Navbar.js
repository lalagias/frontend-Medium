import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PostPreview from '../Posts/PostPreview';

function Navbar() {
  return (
    <Router>
      <header className="navbar">
        <span className="heading"><h1>Medium</h1></span>
          <ul className="navigation">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/writePost">Write post</Link></li>
              <li className="active"><Link to="/Home">Home</Link></li>
          </ul>
      </header>
    </Router>
  )
}

export default Navbar;