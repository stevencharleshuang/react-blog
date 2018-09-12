import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TokenService from '../services/TokenService';
import UserService from '../services/UserService';

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: this.props.location.state.entry,
      authenticated: false,
      redirect: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    // console.log('Baleeted!');
    const url = `/api/entries/entry/${this.state.entry.id}`;
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
        this.setState((prevState) => ({
          redirect: !prevState.redirect
        }))
      })
      .catch(error => console.error('Error:', error));
  }

  componentWillMount() {
    // console.log('Entry >>> compyWillMounty this.props...author_id ', this.state.entry.user_id)
    // console.log('Entry >>> compyWillMounty UserService.read() ', UserService.read())
    if (TokenService.read() !== undefined
        && parseInt(UserService.read())
          === this.props.location.state.entry.user_id) {
      // console.log('>>>>> User is authorized');
      this.setState((prevState) => ({
        authenticated: !prevState.authenticated
      }));
    }
  }

  render() {
    // console.log('Entry Props', this.props)
    // console.log('Entry State', this.state);
    const entry = this.props.location.state.entry
    // console.log('Entry entry:', entry);
    const user = this.props.location.state.user
    if (this.state.redirect) {
      // console.log('Entry render(), redirect triggered')
      return (
        <Redirect to={`/user/${user.id}`} />
      );
    }
    return (
      <div className="entry">
        <h1>Title: {entry.title}</h1>
        <h2>Date: {entry.date_created}</h2>
        <h3>Location: {entry.location}</h3>
        <br />
        <p>{entry.content}</p>

        {
          !this.state.authenticated
          && parseInt(window.localStorage.getItem('userID')) !== entry.user_id
            ? null
            : <div className="entry-user-options">
                <Link to={
                  {
                    pathname:`/users/user/entry/${entry.id}`,
                    state: { entry, user }
                  }
                }>
                  <button>
                    Edit Entry
                  </button>
                </Link>
                <br />
                  <button onClick={this.handleDelete}>
                    Delete Entry
                  </button>
              </div>
        }

        <br />
        <Link to={
          {
            pathname: `/users/${user.id}`,
            state: { user }
          }
        }>
          Back to User Profile
        </Link>
      </div>
    );
  };
};
