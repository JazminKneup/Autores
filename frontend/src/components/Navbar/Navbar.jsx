
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/authors/new" className="nav-link">Add an Author</Link>
      
    </nav>
  );
};

export default Navbar;


