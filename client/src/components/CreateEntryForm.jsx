import React from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

export default class CreateEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_created: moment().format('YYYYMMDD'),
      location: '',
      title: '',
      content: '',
      user_id: this.props.user.id,
      redirect: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCreateEntry = this.handleCreateEntry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleCreateEntry(e) {
    e.preventDefault();
    console.log('Creating entry with:', this.state);
    this.handleSubmit(this.state);
  }

  handleSubmit(formData) {
    const url = '/api/entries';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', (response));
        this.setState((prevState) => ({
          location: '',
          title: '',
          content: '',
          redirect: !prevState.redirect,
        }));
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    if (this.state.redirect) {
      return (
        !this.state.redirect
        ? null
        : <Redirect to= {
            {
              pathname: `/entry_success`,
              state: this.state.user_id
            }
          } />
      );
    }
    // console.log('CreateEntryForm props: ', this.props);
    // console.log(this.state);
    return (
      <div className="create-entry-form">
        <h1>Post Something</h1>
        <form>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="location"
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="title"
            onChange={this.handleOnChange}
          />
          <br />
          <textarea
            type="text"
            id="content"
            name="content"
            placeholder="content"
            onChange={this.handleOnChange}
          />
          <br />
          <button onClick={this.handleCreateEntry} data-id="create-entry">Create Entry</button>
        </form>
      </div>
    );
  }
}
