import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav (props) {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/users"><li>Users Directory</li></Link>
        <Link to="/user/:username"><li>User Private Profile</li></Link>
      </ul>
    </nav>
  );
};
