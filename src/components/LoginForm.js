import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: ''
    };
  }

  handleUsername = (event) => {
    this.setState({
      userName: event.target.value
    }, () => {})
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    }, () => {})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.state.userName && this.state.password ?
        this.props.onSubmit(this.state.userName, this.state.password) :
        console.log("You must fill both fields.")

  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.userName}
              onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
