import React, { Component } from "react";
import axios from "axios";

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      user: []
      //   author
      //   title
      //   description
      //   text
      //   created_date
      //   published_date
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/posts/1/").then(res => {
      this.setState({ post: res.data });
      console.log(res.data);
    });

    axios.get(`${this.state.post.author}`).then(res => {
      this.setState({ user: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="postDetail">
        <span className="title">{this.state.post.title}</span>
        <span className="author">{this.state.user.username}</span>
        <span className="description">{this.state.post.description}</span>
        <span className="text">{this.state.post.text}</span>
        <span className="created_date">{this.state.post.created_date}</span>
      </div>
    );
  }
}

export default PostDetail;
