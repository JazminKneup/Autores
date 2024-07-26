
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AuthorList.css'; 

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await axios.get('http://localhost:8000/api/authors');
      setAuthors(response.data);
    };
    fetchAuthors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/authors/${id}`);
      setAuthors(authors.filter((author) => author._id !== id));
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  return (
    <div className="author-list">
      <h2>We have quotes by:</h2>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <button
                  className="edit"
                  onClick={() => navigate(`/authors/${author._id}/edit`)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(author._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
