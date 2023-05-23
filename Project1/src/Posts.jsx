import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(`There was an error retrieving the data: ${error}`);
      });
  }, []);

  return (
    <div>
  {posts.map(post => (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p> {/* Displaying brief excerpt */}
      {/* Rest of the post data */}
    </div>
  ))}
</div>
  );
}

export default Posts;