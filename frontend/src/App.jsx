
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AuthorList from './components/AuthorList/AuthorList';
import AuthorForm from './components/AuthorForm/AuthorForm';
import EditAuthorForm from './components/EditAuthorForm/EditAuthorForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthorList />} /> {/* Página de inicio */}
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/new" element={<AuthorForm />} />
        <Route path="/authors/:id/edit" element={<EditAuthorForm />} />
      </Routes>
    </Router>
  );
};

export default App;


