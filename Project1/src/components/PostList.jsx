import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // Number of posts to display per page

  useEffect(() => {
    // Fetch posts from an API or any data source
    const fetchPosts = async () => {
      // Fetch logic goes here
      // For simplicity, let's assume the fetched data is an array of posts
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Get current posts based on current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div>
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (item, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default PostList;