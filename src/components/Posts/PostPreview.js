import React from 'react';

function PostPreview(props) {
  let images = `${props.image}`

  return (
    <div className="PostPreview" id={props.id}>
      <div className="previewDetail">
        <img className="profileImage" src={images} alt=""></img>
        <span className="author">{props.author}</span>
        <span className="date">{props.created_date}</span>
      </div>      
      <span className="title"><h1>{props.title}</h1></span>
      <span className="description">{props.description}</span>
    </div>
  );    
}

export default PostPreview;