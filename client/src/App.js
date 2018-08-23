import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
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
      </div>
    );
  }
}

export default App;
