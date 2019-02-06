import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Welcome from './components/layout/Welcome';
// import PostDetail from './components/Posts/PostDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <div className="container">
            <Welcome />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
