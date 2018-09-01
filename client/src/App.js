import React, { Component }        from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav                         from './components/Nav';
import LoginForm                   from './components/LoginForm';
import RegisterForm                from './components/RegisterForm';
import Hero                        from './components/Hero';
import UsersDirectory              from './components/UsersDirectory';
import UserPublicProfile           from './components/UserPublicProfile';
import Entry                       from './components/Entry';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Welcome to React Blog, Dave</h1>
        <LoginForm authenticated={this.state.authenticated} />
        <br />
        <RegisterForm />
        <br />
        <Switch>
          <Route path="/users/:username/:entry" component={Entry} />
          <Route path="/users/:username" component={UserPublicProfile} />
          <Route exact path="/users" component={UsersDirectory} />
          <Route exact path="/" component={Hero} />
        </Switch>
      </div>
    );
  }
}

export default App;
