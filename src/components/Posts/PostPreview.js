import React from 'react';

function PostPreview(props) {

  return (
    <div className="PostPreview">
      <h1>{props.title}{props.author}</h1>
    </div>
  );    
}

export default PostPreview;