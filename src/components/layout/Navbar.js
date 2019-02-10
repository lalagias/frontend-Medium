import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Navbar() {
  return (
    <React.Fragment>
      <header className="navbar">
        <span className="heading"><h1>Medium</h1></span>
        <Router>
          <ul className="navigation">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/writePost">Write post</Link></li>
              <li className="active"><Link to="/">Home</Link></li>
          </ul>
        </Router>
      </header>
    </React.Fragment> 
  )
}

export default Navbar;