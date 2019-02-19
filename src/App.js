import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Fragments
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Welcome from "./components/layout/Welcome";

// Components
import PostDetail from "./components/Posts/PostDetail";
import PostList from "./components/Posts/PostList";
// import PostPreview from "./components/Posts/PostPreview";
import AddPost from "./components/Posts/AddPost";
import Login from "./components/Auth/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/posts/")
      .then(res => {
        // create an array of posts only with relevant data
        const newPosts = res.data.map(element => {
          return {
            id: element.id,
            author: element.author,
            image: element.image,
            title: element.title,
            description: element.description,
            text: element.text,
            created_date: element.created_date,
            postImage: element.postImage
          };
        });

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          posts: newPosts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const { posts } = this.state;
    // const postList = posts.length ? () : (
    //   <div className
    // )

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <Header />
                  <Welcome />
                </div>
              )}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <div>
                  <Header />
                  <Welcome />
                  <Login />
                </div>
              )}
            />
            <Route
              exact
              path="/Home"
              render={props => (
                <div>
                  <Navbar />
                  <PostList posts={this.state.posts} />
                </div>
              )}
            />
            <Route
              exact
              path="/Post"
              render={props => (
                <div>
                  <Navbar />
                  <PostDetail posts={this.state.posts} />
                </div>
              )}
            />
            <Route
              exact
              path="/writePost"
              render={props => (
                <div>
                  <Navbar />
                  <AddPost />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
