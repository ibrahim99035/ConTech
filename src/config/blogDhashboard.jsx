// frontend/src/components/Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import RichTextEditor from '../components/RichTextEditor'
import './blogDhashboard.css';
import Logo from '/Images/Icons/CT png w-04.png'
import CTLogo from '/Images/Icons/CT png.png'

const BlogDashboard = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !slug || !content) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, slug, content }),
      });

      if (response.ok) {
        setSuccess('Post created successfully!');
        setError('');
        setTitle('');
        setSlug('');
        setContent('');
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (err) {
      setError('Error creating post');
    }
  };

  return (
    <div>
        <div className='overlay-image'></div>
        <div id='BlogLogo'>
            <img
                src= {Logo}
                alt="Buidings Grafity"
                className="hero-image"
                id='HeroBuilding'
                loading="lazy" 
            />
        </div>
        <div className='blog-form'>
            <h1>Create a New Blog Post</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                <div>
                <label>Slug:</label>
                <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                />
                </div>
                <div>
                <label>Content:</label>
                <RichTextEditor
                    value={content}
                    onChange={setContent}
                />
                </div>
                <button type="submit">Create Blog Post</button>
            </form>
            <div id='CTLogoBlogFormDiv'>
                <img
                    src= {CTLogo}
                    alt="Buidings Grafity"
                    id="CTLogoBlogForm"
                    loading="lazy" 
                />
            </div>            
        </div>
    </div>
  );
};

export default BlogDashboard;