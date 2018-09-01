import React from 'react';

export default class UsersDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentWillMount() {
    const url = 'http://localhost:5000/api/users';
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
        this.setState({ users: response })
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="users-directory">
        <h1>Hello Users Directory, Dave</h1>
      </div>
    );
  }

}

