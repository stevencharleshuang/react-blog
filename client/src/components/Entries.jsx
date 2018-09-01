import React from 'react';
import { Link } from 'react-router-dom';

export default class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      user_id: this.props.user_id // ToDo: This is hardcoded, make dynamic
    }
  }

  componentWillMount() {
    const url = `http://localhost:5000/api/entries/users/user/${this.state.user_id}`;
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
          <Link to={{ pathname: `/users/user/${entry.id}`, state: { entry } }}>
            <strong>{entry.title}</strong>
            <br />
            <span>{entry.date_created}</span>
          </Link>
        </li>
      );
    })
    return (
      <div className="entries">
        {userEntries}
      </div>
    );
  }
}
