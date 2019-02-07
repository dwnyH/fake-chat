import React, { Component } from 'react';
import './ChatInput.scss';
import PropTypes from 'prop-types';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.sendButtonClick = this.sendButtonClick.bind(this);
    }

    sendButtonClick() {
        const {onInput, chatRoomInfo} = this.props;
        const now = new Date().toISOString();
        const inputInfo = {
            now,
            chatRoomInfo,
            data: this.textInput.current.value
        }

        debugger;
        onInput(inputInfo);
    }

    render() {
        return (
            <div className="inputContainer">
                <input type="text" className="messageInput" placeholder="Type something to send..." ref={this.textInput} />
                <button className="sendButton" onClick={this.sendButtonClick}>보내기</button>
            </div>
        );
    }
}

export default ChatInput;