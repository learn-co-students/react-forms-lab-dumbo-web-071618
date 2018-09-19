import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    },
    () => console.log(this.state))
    
  }

  handleSubmit = (e,username,password) => {
    e.preventDefault()
    if (username && password) this.props.onSubmit(username,password)
  }

  render() {
    return (
      <form onSubmit={ (e) => this.handleSubmit(e,this.state.username,this.state.password) }>
        <div>
          <label>
            Username
            <input value={this.state.username}
              onChange={this.handleChange}
            id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
          </label>
            <input value={this.state.password} 
            onChange={this.handleChange}
            id="password" name="password" type="password" />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
