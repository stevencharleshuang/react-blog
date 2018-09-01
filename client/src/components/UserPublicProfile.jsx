import React from 'react';
import { Link } from 'react-router-dom';

export default class UserPublicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    }
  }

  componentWillMount() {
    const url = `http://localhost:5000/api/entries/users/${this.props.match.params.username}`;
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', (response));
        this.setState({ entries: response })
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    const fetchedEntries = this.state.entries;
    const userEntries = fetchedEntries.map((entry, i) => {
      return (
        <li key={i}>
          <strong>{entry.title}</strong>
          <br />
          <span>{entry.date_created}</span>
        </li>
      );
    })
    return (
      <div>
        <h1>Username: {this.props.match.params.username}</h1>
        <ul>
          {userEntries}
        </ul>
        <Link to="/users">Back to Users Directory</Link>
      </div>
    );
  }
};
