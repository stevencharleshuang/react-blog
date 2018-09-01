import React from 'react';
import { Link } from 'react-router-dom';

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: this.props.location.state.entry
    }
  }
  render() {
    // console.log(this.props)
    const entry = this.props.location.state.entry
    return (
      <div>
        <h1>Title: {entry.title}</h1>
        <h2>Date: {entry.date_created}</h2>
        <span>Location: {entry.location}</span>
        <p>{entry.content}</p>

        <Link to={
          {
            pathname:`/users/user/entry/${entry.id}`,
            state: { entry }
          }
        }>
          Edit Entry
        </Link>
        <br />
        <Link to={`/`}>Delete Entry</Link>
        <br />
        <Link to={`/users/${this.props.match.params.username}`}>Back to User Profile</Link>
      </div>
    );
  };
};
