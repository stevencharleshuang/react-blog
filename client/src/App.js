import React, { Component }        from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CreatedEntrySuccess         from './components/CreatedEntrySuccess';
import EditEntryForm               from './components/EditEntryForm';
import EditUserForm                from './components/EditUserForm';
import Entries                     from './components/Entries';
import Entry                       from './components/Entry';
import ErrorPage                   from './components/ErrorPage';
import Hero                        from './components/Hero';
import LoggedOut                   from './components/LoggedOut';
import LoginForm                   from './components/LoginForm';
import Nav                         from './components/Nav';
import RegisterForm                from './components/RegisterForm';
import UsersDirectory              from './components/UsersDirectory';
import UserProfile                 from './components/UserProfile';
import TokenService                from './services/TokenService';
import UserService                 from './services/UserService';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      logOutRedirect: false,
    }
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    // console.log('handleLogOut hit in App.jsx');
    TokenService.destroy();
    UserService.destroy();
    this.setState((prevState) => ({
      authenticated: !prevState.authenticated,
      logOutRedirect: !prevState.redirect,
    }));
  }

  checkAuth() {
    // console.log('App checkAuth() hit! TokenService.read()', TokenService.read());
    TokenService.read() !== null && this.state.authenticated !== true
    ? this.setState((prevState) => ({
      authenticated: !prevState.authenticated
      }))
    : null;
  }

  componentWillReceiveProps(nextProps) {
    console.log('>>> App compyWillRecProps: ', nextProps);
  }

  componentWillUpdate() {
    // this.checkAuth();
  }

  render() {
    this.checkAuth();
    // console.log('>>> App state: ', this.state);
    // console.log('>>> App props: ', this.props);
    // if (this.state.logOutRedirect) {
    //   return (
    //     !this.state.logOutRedirect
    //       ? null
    //       : <Redirect to='/user/logged_out' />
    //   );
    // }
    return (
      <div className="App">
        <Nav
          authenticated={this.state.authenticated}
          handleLogOut={this.handleLogOut}
          checkAuth={this.checkAuth}
        />
        <h1>Welcome to React Blog, Dave</h1>
        <br />
        <Switch>
          <Route path="/users/user/entry/:edit" component={EditEntryForm} />
          <Route path="/users/user/edit/:edit" component={EditUserForm} />
          <Route path="/users/:username/:entry" component={Entry} />
          <Route path="/users/:username" component={Entries} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/entry_success" component={CreatedEntrySuccess} />
          <Route path="/user/logged_out" component={LoggedOut} />
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
