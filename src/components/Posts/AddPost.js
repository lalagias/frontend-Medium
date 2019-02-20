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
      image: null,
      jwt: null
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

    // axios
    //   .post("http://localhost:8000/api/token/", {
    //     username: "mocca",
    //     password: "@060296jiM!"
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //     // console.log(response.data.access);
    //     // this.setState({ jwt: response.data.access });
    //     let JWTtoken = response.data.access;
    //     console.log(JWTtoken);
    //     // store the new state object in the component's state
    //     // this.setState({ jwt: JWTtoken }, () => {
    //     //   // only now the state was updated
    //     //   console.log("Data is here", this.state.jwt);
    //     // });
    //     // // console.log(this.state.jwt);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    const post = {
      title: this.state.title,
      description: this.state.description,
      text: this.state.text,
      image: this.state.image
    };

    axios({
      method: "post", //you can set what request you want to be
      url: `http://localhost:8000/posts/`,
      data: { post },
      headers: {
        Authorization: "Bearer " + this.props.jwt
      }
    })
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
