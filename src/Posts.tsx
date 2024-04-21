import React from "react";


type PostProps = {
  posts: any;
};
const Posts = ({ posts = [] }: PostProps) => {
  return (
    <div className={"mx-5 border border-blue-800"}>
      {posts?.length > 0 ? (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id} className={"m-3 border border-red-400"}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found for the selected user.unfortunate</p>
      )}
    </div>
  );
};

export default Posts;
