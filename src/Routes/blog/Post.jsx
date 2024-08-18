import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Post.css'

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
        if (response.ok) {
          const { content } = await response.json();
          setContent(content);
        } else {
          const { error } = await response.json();
          setError(error);
        }
      } catch (err) {
        setError('Error fetching post');
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <div>
      <div className='overlay-image'></div>
      <div className="post-container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Post;