import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      length: props.maxChars
    };
  }

  inputChange = (event) => {
    this.setState({
      message: event.target.value,
      length: this.state.length - 1
    })
    // this.setState((prevState)=> {
    //   return {
    //     message: event.target.value,
    //     length: prevState.length - prevState.message.length
    //   }
    // })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.inputChange}
        />
        <p>{this.state.length}</p>
      </div>
    );
  }


}

export default TwitterMessage;
