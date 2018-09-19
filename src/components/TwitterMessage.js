import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.inputText}/>
        <p>Word Count: {this.props.maxChars - this.state.inputText.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
