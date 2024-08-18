import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostList.css'; // Updated CSS for card styling

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);
  
  const cleanContent = (htmlContent) => {
    // Create a temporary DOM element to use its parsing capabilities
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    // Extract text content up to the first image tag
    let textContent = '';
    
    // Traverse child nodes to build the text content
    const traverseNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        textContent += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'img') {
        return; // Stop processing when an image tag is encountered
      }
      
      // Recursively process child nodes
      for (let child of node.childNodes) {
        traverseNodes(child);
        if (textContent.length > 150) break; // Stop if text exceeds 150 characters
      }
    };
    
    traverseNodes(doc.body);
  
    // Limit the content to a certain number of characters for preview
    return textContent.length > 150 ? textContent.substring(0, 150) + "..." : textContent;
  };
  
  return (
    <div>
        <div className='overlay-image'></div>
        <div className="post-list">
            <h1>Blog Posts</h1>
            <div className="card-container">
                {posts.map((post) => (
                    <div key={post.slug} className="post-card">
                        <Link to={`/post/${post.slug}`}>
                        <h2>{post.title}</h2>
                        </Link>
                        <div className="post-content">
                        {cleanContent(post.content)}
                        </div>
                        <Link to={`/post/${post.slug}`} className="read-more">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default PostList;
