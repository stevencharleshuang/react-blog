import React from 'react';
import { Link } from 'react-router-dom';

export default class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      user: this.props.user ||
            this.props.location.state.user ||
            JSON.parse(window.localStorage.getItem('user')) ||
            undefined

    }
  }

  componentWillMount() {
    const url = `/api/entries/users/user/${this.state.user.id}`;
    // console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        // console.log('Success:', (response));
        response.entries
        ? this.setState({ entries: response })
        : null;
      })
      // .catch(error => console.error('Error:', error));
  }

  render() {
    // console.log('Entries state: ', this.state);
    // console.log('Entries props: ', this.props);
    // console.log('Local Storage', window.localStorage)
    const fetchedEntries = this.state.entries;
    const user = this.state.user || undefined;
    let userEntries;
    {
      fetchedEntries !== undefined && userEntries !== undefined && user !== undefined
        ? null
        : userEntries = fetchedEntries.map((entry, i) => {
            return (
              <li key={i}>
                <Link to={
                  {
                    pathname: `/users/user/${entry.id}`,
                    state: { entry, user }
                  }
                }>
                  <strong>{entry.title}</strong>
                  <br />
                  <span>{entry.date_created}</span>
                </Link>
              </li>
            );
          })
    }
    return (
      <div className="entries">
        {
          userEntries !== undefined
          ? userEntries
          : 'No entries to show =('
        }
      </div>
    );
  }
}
