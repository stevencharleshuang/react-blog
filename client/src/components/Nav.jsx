import React        from 'react';
import { Link }     from 'react-router-dom';
import TokenService from '../services/TokenService';
import UserService  from '../services/UserService';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      authenticated: this.props.authenticated || false,
    }
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    console.log(e.target.data);
    TokenService.destroy();
    UserService.destroy();
    this.setState({ authenticated: false });
    this.setProps({ authenticated: false });
  }

  componentWillMount() {
    // console.log('Nav compyWillMounty TokenService.read()', TokenService.read());
    if (TokenService.read() !== null) {
      // console.log('>>>>> User is authorized');
      this.setState((prevState) => ({
        authenticated: true
      }));
    }
  }

  componentWillUpdate(nextProps, nextState) {
    nextProps = this.props.authenticated;
    // console.log('Nav compyWillUpdy nextProps:', nextProps);
    this.state.authenticated !== nextProps
    ? this.setState((prevState) => ({
        authenticated: nextProps
      }))
    : null
  }


  render() {
    console.log('Nav state: ', this.state);
    console.log('Nav props:', this.props);
    const userID = window.localStorage.getItem('userID');
    // console.log(userID)
    return (
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to={`/user/${userID}`}><li>User Private Profile</li></Link>
          {
            this.state.authenticated === true
              ? <button onClick={this.handleLogOut} data-id="logout">Log Out</button>
              : <div className="nav-auth-options">
                  <Link to=
                    {
                      {
                        pathname: '/login',
                        state: this.state.authenticated
                      }
                    }>
                      <li>Log In</li>
                    </Link>
                  <Link to="/register"><li>Register</li></Link>
                </div>
          }
        </ul>
      </nav>
    );
  }
};
