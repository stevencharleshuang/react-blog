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
    fetch('http://localhost:5000/api/hello')
    .then((data) => {
      let resdata = JSON.stringify(data);
      console.log('data: ', resdata);
    })
    .then((parsedData) => {
      this.setState({
        data: parsedData,
      });
      console.log('CompyDidMounty: ', this.state.data);
    })
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
