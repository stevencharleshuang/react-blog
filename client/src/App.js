import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React Blog, Dave</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;
