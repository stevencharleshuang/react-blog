import React        from 'react';
import { Redirect, Link }     from 'react-router-dom';
import TokenService from '../services/TokenService';
import UserService  from '../services/UserService';
import Logo         from '..//images/logo.png';

export default function Nav(props) {
    // console.log('Nav state: ', props);
    // console.log('Nav props:', props);
    const user = JSON.parse(window.localStorage.getItem('user'));
    // console.log({user})
    return (
      <nav>
        <ul>
          <Link to="/"><li><img src={Logo} alt="ive-bin" className="logo" /></li></Link>
          <Link to="/users"><li>UsersDirectory</li></Link>
          {
            props.authenticated === true
              ? <div className="nav-auth-options">
                  <Link to=
                    {
                      {
                        pathname: `/user/${user.id}`,
                        state: { user }
                      }
                    }>
                    <li>
                      Profile
                    </li>
                  </Link>
                  <li>
                    <button onClick={props.handleLogOut} data-id="logout">
                      Log Out
                    </button>
                  </li>
                </div>
              : <div className="nav-auth-options">
                  <Link to=
                    {
                      {
                        pathname: '/login',
                        state: props.authenticated
                      }
                    }
                  >
                    <li>
                      Log In
                    </li>
                  </Link>
                  <Link to="/register">
                  <li>Register</li></Link>
                </div>
          }
        </ul>
      </nav>
    );
};
