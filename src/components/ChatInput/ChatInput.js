import React, { Component } from 'react';
import './ChatInput.scss';
import PropTypes from 'prop-types';

class ChatInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="inputContainer">
                <input type="text" className="messageInput" placeholder="Type something to send..." />
                <button className="sendButton">보내기</button>
            </div>
        );
    }
}

export default ChatInput;