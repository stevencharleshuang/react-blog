import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';
import UserService from '../services/UserService';

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: this.props.location.state.entry,
      authenticated: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    // console.log('Baleeted!');
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
        // console.log('Success:', (response))
      })
      .catch(error => console.error('Error:', error));
  }

  componentWillMount() {
    // console.log('Entry >>> compyWillMounty this.props...author_id ', this.state.entry.user_id)
    // console.log('Entry >>> compyWillMounty UserService.read() ', UserService.read())
    if (TokenService.read() !== undefined && parseInt(UserService.read()) === this.props.location.state.entry.user_id) {
      // console.log('>>>>> User is authorized');
      this.setState((prevState) => ({
        authenticated: !prevState.authenticated
      }));
    }
  }

  render() {
    // console.log('Entry Props', this.props)
    const entry = this.props.location.state.entry
    return (
      <div>
        <h1>Title: {entry.title}</h1>
        <h2>Date: {entry.date_created}</h2>
        <span>Location: {entry.location}</span>
        <p>{entry.content}</p>
        {
          !this.state.authenticated
            ? null
            : <div className="entry-user-options">
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
              </div>
        }

        <br />
        <Link to={`/user/${entry.user_id}`}>Back to User Profile</Link>
      </div>
    );
  };
};
