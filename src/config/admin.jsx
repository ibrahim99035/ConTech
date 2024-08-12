import React, { useState, useEffect } from 'react';
import './admin.css';

import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

import Quema from '/Images/Icons/TinyQuemaLogo.png'

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      fetchPosts();
    }
  }, [token]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://companysa.onrender.com/posts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setPosts(data.reverse());
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://companysa.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setToken(data.token);
      localStorage.setItem('token', data.token);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://companysa.onrender.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Error creating post');
      }

      setTitle('');
      setContent('');
      fetchPosts(); // Refresh the posts
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleUpdatePost = async (id, newTitle, newContent) => {
    try {
      const response = await fetch(`https://companysa.onrender.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });

      if (!response.ok) {
        throw new Error('Error updating post');
      }

      fetchPosts(); // Refresh the posts
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const response = await fetch(`https://companysa.onrender.com/posts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error deleting post');
      }

      fetchPosts(); // Refresh the posts
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  if (!token) {
    return (
      <div>
        <div id='QuemaLogo'>
          <img src={Quema} alt="Quema Logo" />
        </div>
        <div id='loginForm'>
          <h2>قم بتسجيل الدخول</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'جارٍ التسجيل...' : 'سجل'}
            </button>
          </form>
        </div>
        <div id='QuemaLogo'>
          <img src={Quema} alt="Quema Logo" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div id='QuemaLogo'>
        <img src={Quema} alt="Quema Logo" />
      </div>
      <button onClick={handleLogout}>Logout</button>
      <div id='postCreationForm'>
        <h2>أنشئ منشور جديد</h2>
        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            placeholder="العنوان"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="المحتوى"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'جارٍ النشر...' : 'نشر'}
          </button>
        </form>

        <h2>المنشورات المحفوظة</h2>
        {posts.map((post) => (
          <div key={post.id} id='postsFetchedAdmin'>
            <div onClick={() => handleDeletePost(post.id)} id='deleteIcon'><IoIosRemoveCircle /></div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {/* <button onClick={() => handleUpdatePost(post.id, post.title, post.content)}><MdEdit /></button> */}
          </div>
        ))}
      </div>
      <div id='QuemaLogo'>
        <img src={Quema} alt="Quema Logo" />
      </div>
    </div>
  );
};

export default Admin;