import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch post
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(`There was an error retrieving the post: ${error}`);
      });

    // Fetch comments
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(`There was an error retrieving the comments: ${error}`);
      });
  }, [id]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      {comments.map(comment => (
        <div key={comment.id}>
          <h4>{comment.name} (email: {comment.email})</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default SinglePost;