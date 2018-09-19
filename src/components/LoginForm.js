import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!!this.state.username && !!this.state.password) {
      this.props.onSubmit(this.state)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInputChange} id="password" name="password" type="password" />
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
