import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		value: ""
	};
  }

  handleChange = (e) => this.setState({value: e.target.value})

  render() {
	  console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} maxLength={this.props.maxChars} />
		<span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
