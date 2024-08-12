import React, { useState, useEffect } from 'react';
import './PostsDisplay.css'; // Import the CSS file for styling

const PostsDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://companysa.onrender.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.reverse());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`post-card ${index === 0 ? 'first-card' : ''}`} // Add first-card class to the first post
        >
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsDisplay;