import React from "react";
// import moment from "moment";

function PostPreview(props) {
  let profileImage = `${props.profileImage}`;
  let postImage = `${props.postImage}`;

  return (
    <div className="PostPreview" id={props.id}>
      <div className="previewDetail">
        <img className="profileImage" src={profileImage} alt="" />
        <span className="author">{props.author}</span>
        <span className="date">
          {props.created_date}
          {/* {moment(, moment.ISO_8601)} */}
        </span>
      </div>
      <span className="title">
        <h1>{props.title}</h1>
      </span>
      <img className="postImage" src={postImage} alt="" />
      <span className="description">{props.description}</span>
    </div>
  );
}

export default PostPreview;
