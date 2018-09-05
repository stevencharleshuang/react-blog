import React, { Component }    from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav                     from './components/Nav';
import LoginForm               from './components/LoginForm';
import RegisterForm            from './components/RegisterForm';
import Hero                    from './components/Hero';
import UsersDirectory          from './components/UsersDirectory';
import Entries                 from './components/Entries';
import Entry                   from './components/Entry';
import EditEntryForm           from './components/EditEntryForm';
import EditUserForm            from './components/EditUserForm';
import ErrorPage               from './components/ErrorPage';
import UserProfile             from './components/UserProfile';
import TokenService            from './services/TokenService';
import UserService             from './services/UserService';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('App compyWillUpdy');
    console.log('>>>>>> App compyWillUpdy nextProps: ', nextProps, 'nextState:', nextState);
    TokenService.read() !== null && this.state.authenticated !== !!TokenService.read()
      ? this.setState((prevState) => ({
          authenticated: true
        }))
      : null
  }

  render() {
    console.log('>>> App state: ', this.state);
    console.log('>>> App props: ', this.props);

    return (
      <div className="App">
        <Nav authenticated={this.state.authenticated} />
        <h1>Welcome to React Blog, Dave</h1>
        <br />
        <Link to="/users">UsersDirectory</Link>
        <br />
        <Switch>
          <Route path="/users/user/entry/:edit" component={EditEntryForm} />
          <Route path="/users/user/edit/:edit" component={EditUserForm} />
          <Route path="/users/:username/:entry" component={Entry} />
          <Route path="/users/:username" component={Entries} />
          <Route path="/user/:id" component={UserProfile} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/users" component={UsersDirectory} />
          <Route exact path="/" component={Hero} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
