import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleInput = (event) => {

    this.setState({
        content: event.target.value
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.content}
          onChange={this.handleInput}
        />
        <label>{this.props.maxChars - (this.state.content).length} characters left</label>
      </div>
    );
  }
}

export default TwitterMessage;
