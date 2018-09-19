import React from "react";

class TwitterMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageContent: "",
            charLeft: this.props.maxChars
        };
    }

    handleChange = (event) => {
        this.setState({ 
                messageContent: event.target.value,
                charLeft: this.state.charLeft - 1
        })
    }

    render() {
        return (
            <div>
                <strong>Your message:</strong>
                <p>{this.state.charLeft}</p>
                <input type="text" value={this.state.messageContent} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default TwitterMessage;
