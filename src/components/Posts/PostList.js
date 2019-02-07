import React from 'react';

import PostPreview from './PostPreview';

function PostList(props) {

  return (
    <div className="PostList">
      { props.posts.map(c => <PostPreview key={c.title} author={c.author} />) }
    </div>
  );
}

export default PostList;