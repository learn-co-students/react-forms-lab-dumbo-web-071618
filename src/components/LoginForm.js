import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state)
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleOnSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleOnChange}  value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} />
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
