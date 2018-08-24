import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
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
        <h1>Welcome to React Blog, Dave</h1>
        <LoginForm authenticated={this.state.authenticated} />
        <br />
        <RegisterForm />
      </div>
    );
  }
}

export default App;
