import React from 'react';
import { Link } from 'react-router-dom';

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: this.props.location.state.entry
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log('Baleeted!');
    const url = `http://localhost:5000/api/entries/entry/${this.state.entry.id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', (response))
      })
      .catch(error => console.error('Error:', error));
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
          <button>
            Edit Entry
          </button>
        </Link>
        <br />
        <button onClick={this.handleDelete}>Delete Entry</button>
        <br />
        <br />
        <Link to={`/users/${this.props.match.params.username}`}>Back to User Profile</Link>
      </div>
    );
  };
};
