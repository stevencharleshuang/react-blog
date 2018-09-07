import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatedEntrySuccess() {
  return (
    <div className="created-entry-success">
      <h1>You Logged Out!</h1>
      <Link to="/login">Log in again</Link>
    </div>
  );
}
