import React        from 'react';
import { Redirect, Link }     from 'react-router-dom';
import TokenService from '../services/TokenService';
import UserService  from '../services/UserService';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      authenticated: this.props.authenticated,
      redirect: false,
    }
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    // console.log(e.target.data);
    TokenService.destroy();
    UserService.destroy();
    this.setState((prevState) => ({
      authenticated: !prevState.authenticated,
      redirect: !prevState.redirect,
    }));
  }

  componentWillMount() {
    // console.log('Nav compyWillMounty TokenService.read()', TokenService.read());
    if (TokenService.read() !== null) {
      // console.log('>>>>> User is authorized');
      this.setState((prevState) => ({
        authenticated: !prevState.authenticated
      }));
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('Nav compyWillRecProps', nextProps);
    // if (TokenService.read() !== null) {
    //   // console.log('>>>>> User is authorized');
    //   this.setState((prevState) => ({
    //     authenticated: true
    //   }));
    // }
    // nextProps = this.props.authenticated;
    // // console.log('Nav compyWillUpdy nextProps:', nextProps);
    this.state.authenticated !== nextProps.authenticated
    ? this.setState((prevState) => ({
        authenticated: nextProps.authenticated
      }))
    : null
  }


  render() {
    // console.log('Nav state: ', this.state);
    // console.log('Nav props:', this.props);
    const userID = window.localStorage.getItem('userID');
    // console.log(userID)
    if (this.state.redirect) {
      return (
        !this.state.redirect
          ? null
          : <Redirect to='/logged_out' />
      );
    }
    return (
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          {
            this.state.authenticated === true
              ? <div className="nav-auth-options">
                  <Link to=
                    {
                      {
                        pathname: `/user/${userID}`,
                        state: this.state.authenticated
                      }
                    }>
                    <li>
                      User Private Profile
                    </li>
                  </Link>
                  <li>
                    <button onClick={this.handleLogOut} data-id="logout">
                      Log Out
                    </button>
                  </li>
                </div>
              : <div className="nav-auth-options">
                  <Link to=
                    {
                      {
                        pathname: '/login',
                        state: this.state.authenticated
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
  }
};
