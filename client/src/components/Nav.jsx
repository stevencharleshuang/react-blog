import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav (props) {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/users"><li>Users Directory</li></Link>
      </ul>
    </nav>
  );
};
