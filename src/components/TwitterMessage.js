import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textInput: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      textInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.textInput} type="text" onChange={this.handleChange}/>
        <p>Characters left: {this.props.maxChars - this.state.textInput.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
