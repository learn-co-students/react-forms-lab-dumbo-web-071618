import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleOnChange} type="text" value={this.state.value} maxLength={this.props.maxChars}/>
        <span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
