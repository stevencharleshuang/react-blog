import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav (props) {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/user/:username"><li>User Private Profile</li></Link>
        <Link to="/login"><li>Log In</li></Link>
        <Link to="/register"><li>Register</li></Link>
      </ul>
    </nav>
  );
};
