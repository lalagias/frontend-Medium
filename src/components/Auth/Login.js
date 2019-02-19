import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    const post = {
      title: this.state.title,
      image: this.state.image,
      text: this.state.text
    };

    axios.post(`http://localhost:8000/api-auth/login/`, { post }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="loginModal">
        <div className="loginPanel">
          <div className="loginHeader">
            <span className="close">&times;</span>
            <span className="headerLogin">
              <h1>Welcome</h1>
            </span>
          </div>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <label className="usernameLabel">username:</label>
            <input
              className="username"
              type="text"
              id="username"
              onChange={this.handleChange}
              required
            />
            <label className="passwordLabel">password:</label>
            <input
              className="password"
              type="password"
              id="password"
              onChange={this.handleChange}
              required
            />
            <button className="loginBtn">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
