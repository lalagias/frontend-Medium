import React from "react";

function PostDetail(props) {
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

export default PostDetail;
