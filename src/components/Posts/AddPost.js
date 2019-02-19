import React, { Component } from "react";
// import { Editor, EditorState, RichUtils } from "draft-js";
import axios from "axios";

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      description: null,
      text: null,
      image: null
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
      description: this.state.description,
      text: this.state.text,
      image: this.state.image
    };

    axios
      .post(`http://localhost:8000/posts/`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="writePost">
        <form className="formPost" onSubmit={this.handleSubmit}>
          <input
            className="titleWrite"
            type="text"
            id="title"
            placeholder="Title..."
            onChange={this.handleChange}
            required
          />
          <input
            className="imageWrite"
            type="file"
            alt="Upload Image"
            id="image"
            accept="image/png, image/jpeg, image/gif"
            onChange={this.handleChange}
          />
          <input
            className="descriptionWrite"
            type="text"
            id="description"
            placeholder="description..."
            onChange={this.handleChange}
            required
          />
          <textarea
            className="bodyWrite"
            id="text"
            placeholder="Tell your story..."
            onChange={this.handleChange}
            required
          />
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
