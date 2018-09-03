import React, { Component }        from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav                         from './components/Nav';
import LoginForm                   from './components/LoginForm';
import RegisterForm                from './components/RegisterForm';
import Hero                        from './components/Hero';
import UsersDirectory              from './components/UsersDirectory';
import UserPrivateProfile          from './components/UserPrivateProfile';
import UserPublicProfile           from './components/UserPublicProfile';
import Entry                       from './components/Entry';
import EditEntryForm               from './components/EditEntryForm';
import ErrorPage                   from './components/ErrorPage';
import UserProfile                 from './components/UserProfile';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Welcome to React Blog, Dave</h1>
        <br />
        <Link to="/users">UsersDirectory</Link>
        <br />
        <Switch>
          <Route path="/users/user/entry/:edit" component={EditEntryForm} />
          <Route path="/users/:username/:entry" component={Entry} />
          <Route path="/users/:username" component={UserPublicProfile} />
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
