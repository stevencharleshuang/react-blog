import React        from 'react';
import { Link }     from 'react-router-dom';
import TokenService from '../services/TokenService';
import UserService  from '../services/UserService';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      authenticated: false,
    }
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    console.log(e.target.data);
    TokenService.destroy();
    UserService.destroy();
    this.setState({ authenticated: false });
  }

  render() {
    console.log('Nav props:', this.props);
    const userID = window.localStorage.getItem('userID');
    console.log(userID)
    return (
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to={`/user/${userID}`}><li>User Private Profile</li></Link>
          {
            this.state.authenticated
              ? <button onClick={this.handleLogOut} data-id="logout">Log Out</button>
              : <div className="nav-auth-options">
                  <Link to="/login"><li>Log In</li></Link>
                  <Link to="/register"><li>Register</li></Link>
                </div>
          }
        </ul>
      </nav>
    );
  }
};
