
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthorForm.css'; 

const AuthorForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/authors', { name });
      navigate('/authors');
    } catch (error) {
      console.error('Error creating author:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="author-form">
      <h2>Add a new Author</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AuthorForm;
