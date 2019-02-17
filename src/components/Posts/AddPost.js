import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      image: null,
      body: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="writePost">
        <form className="formPost">
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
          <textarea
            className="bodyWrite"
            id="body"
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
