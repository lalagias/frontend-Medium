import React, { Component } from 'react';
import './App.css';
import PostDetail from './Posts/PostDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PostDetail/>
        </div>
      </div>
    );
  }
}

export default App;
