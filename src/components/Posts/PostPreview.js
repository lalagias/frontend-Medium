import React from 'react';

function PostPreview(props) {
  let images = `${props.image}`

  return (
    <div className="PostPreview" id={props.key}>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <p>{props.description}</p>
      {/* <p>{props.text}</p> */}
      <p>{props.created_date}</p>
      <img class="profileImage" src={images}></img>
    </div>
  );    
}

export default PostPreview;