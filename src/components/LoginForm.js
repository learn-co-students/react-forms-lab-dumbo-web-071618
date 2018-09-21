import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  inputValues = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  submitFormValues = (event) => {
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
    else {
      return console.log("sorry you need to enter a username AND a password")
    }
  }

  render() {
    console.log("render", this.state)
    return (
      <form onSubmit={this.submitFormValues}>
        <div>
          <label>
            Username
            <input onChange={this.inputValues} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.inputValues} id="password" name="password" type="password" value={this.state.password}/>
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
