import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav (props) {
  console.log('Nav props:',props);
  const userID = window.localStorage.getItem('userID');
  console.log(userID)
  return (
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to={`/user/${userID}`}><li>User Private Profile</li></Link>
        <Link to="/login"><li>Log In</li></Link>
        <Link to="/register"><li>Register</li></Link>
      </ul>
    </nav>
  );
};
