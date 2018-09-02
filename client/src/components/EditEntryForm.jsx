import React from 'react';
import { Link } from 'react-router-dom';

export default class EditEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.state.entry.id,
      date_created: this.props.location.state.entry.date_created,
      location: this.props.location.state.entry.location,
      title: this.props.location.state.entry.title,
      content: this.props.location.state.entry.content,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditEntry = this.handleEditEntry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleEditEntry(e) {
    e.preventDefault();
    console.log('Creating entry with:', this.state);
    this.handleSubmit(this.state);
  }

  handleSubmit(formData) {
    const url = `http://localhost:5000/api/entries/entry/${this.state.id}`;
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(formData, this.state.id),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', (response))
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    console.log('EditEntryForm props:', this.props);
    console.log('state: ', this.state);
    const entry = this.props.location.state.entry
    return(
      <div className="edit-entry-form">
        <h1>Edit Entry Form</h1>
        <form>
          <input
            type="text"
            id="location"
            name="location"
            placeholder={entry.location}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="title"
            name="title"
            placeholder={entry.title}
            onChange={this.handleOnChange}
          />
          <br />
          <textarea
            type="text"
            id="content"
            name="content"
            placeholder={entry.content}
            onChange={this.handleOnChange}
          />
          <br />
          <button onClick={this.handleEditEntry} data-id="edit-entry">Edit Entry</button>
        </form>
        <br />
        <Link to={`/users/user/entry/${entry.id}`}>Back to Entry</Link>
      </div>
    );
  }
}
