import React from "react";

class LoginForm extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			password: ""
		};
	}

	handleChange = e => this.setState({[e.target.id]: e.target.value})

	handleSubmit = e => {
		e.preventDefault()
		return (this.state.username && this.state.password) && this.props.onSubmit(this.state)
	}

	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.handleSubmit}>
			<div>
				<label>
				Username
				<input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
				</label>
			</div>
			<div>
				<label>
				Password
				<input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
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
