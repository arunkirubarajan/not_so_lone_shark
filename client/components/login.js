import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return { username: '' };
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.username);

    Meteor.loginWithPassword(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange= {this.handleUsernameChange}
        />

        <input
          type="text"
          placeholder="password"
          onChange= {this.handlePasswordChange}
        />

        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}