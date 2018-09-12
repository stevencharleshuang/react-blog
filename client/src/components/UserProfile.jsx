import React           from 'react';
import { Link }        from 'react-router-dom';
import CreateEntryForm from './CreateEntryForm';
import EditUserForm    from './EditUserForm';
import Entries         from './Entries';
import TokenService    from '../services/TokenService';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user
            || this.props.user,
      authenticated: false,
      authorized: false,
    }
  }

  componentWillMount() {
    if (window.localStorage.getItem('authToken')) {
      this.setState((prevState) => ({
        authenticated: !prevState.authenticated
      }));
    }
    if (this.state.authenticated === false && this.state.user.id !== parseInt(window.localStorage.getItem('userID'))) {
      this.setState((prevState) => ({
        authorized: false
      }));
    } else {
      this.setState((prevState) => ({
        authorized: true
      }));
    }
  }

  render() {
    // console.log('UserProfile state: ', this.state);
    // console.log('UserProfile props: ', this.props);
    const user = this.state.user;
    // console.log('UserProfile user', user);
    // console.log('UserProfile user.id', user.id);
    return(
      <div className="user-profile">
        <div className="user-info">
          <h1>{user.username}</h1>
          <br />
          <img src={user.avatar_url} />
          <br />
          {
            !this.state.authorized
              ? null
              : <Link to={
                  {
                    pathname:`/users/user/edit/${ user.id }`,
                    state: { user }
                  }
                }>
                  <button>
                  Edit User
                  </button>
                </Link>
          }
        </div>
        <div className="user-entries">
          {
            !this.state.authorized
              ? null
              : <div className="user-profile-private">
                  <CreateEntryForm user={ user } />
                </div>
          }
          <br />
          <h2>Where IveBin</h2>
          <Entries user={ user } />
          <br />
        </div>
        {/* Render Void
        */}
      </div>
    );
  }
}
