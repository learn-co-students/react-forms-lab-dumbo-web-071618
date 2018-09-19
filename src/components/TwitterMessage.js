import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charsLeft: this.props.maxChars,
      value: ''
    };
  }

  handleChange = (event) =>{
    this.setState((prevState) => {
      return {value: event.target.value, charsLeft: prevState.charsLeft - 1}
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.value} type="text" />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
