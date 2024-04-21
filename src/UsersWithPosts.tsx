import React, { useState, useEffect } from "react";
import ClickableUserList from "./ClickableUserList";
import Posts from "./Posts";

const UsersWithPosts = () => {
  const [users, setUsers] = useState(null);
  const [id, setId] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
    
      setUsers(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (id) {
      const fetchPosts = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        const result = await response.json();
        setPosts(result);
      };
      fetchPosts();
    } else{
      setPosts(null);

    }

  }, [id]);

  const handleClick = (userId: any) => {
    setId(id == userId ? null : userId);
  };

  console.log(posts, "ALL POSTS ");

  return (
    <div>
      <h2>Users</h2>
      <ClickableUserList users={users} id={id} onChange={handleClick} />
      <h2>Posts</h2>
      <Posts posts={posts} />
    </div>
  );
};

export { UsersWithPosts };
