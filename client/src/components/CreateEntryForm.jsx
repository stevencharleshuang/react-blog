import React from 'react';

export default class CreateEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // this.handleOnChange = this.handleOnChange.bind(this);
    // this.handleRegister = this.handleRegister.bind(this);
  }
  render() {
    return (
      <form className="create-entry-form">
        Hello from the create entry form, Dave
      </form>
    );
  }
}
