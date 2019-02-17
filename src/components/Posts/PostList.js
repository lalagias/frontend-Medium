import React from "react";

import PostPreview from "./PostPreview";

function PostList(props) {
  return (
    <div className="PostList">
      {props.posts.map(c => (
        <PostPreview
          key={c.id}
          id={c.id}
          title={c.title}
          postImage={c.image}
          author={c.author.username}
          profileImage={c.author.image}
          description={c.description}
          text={c.text}
          created_date={c.created_date}
        />
      ))}
    </div>
  );
}

export default PostList;
