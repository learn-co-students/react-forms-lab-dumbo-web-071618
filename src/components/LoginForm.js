import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '' ,
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({username:event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password:event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(event);
    if (this.state.username !== '' && this.state.password !== ''){
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange} value={this.state.password} />
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
