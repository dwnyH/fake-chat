import React, { Component } from 'react';
// import './ChatMessage.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
// import './ChatMessage.scss'
import PropTypes from 'prop-types';

class ChatMessage extends Component {

    render() {
        return (
            <React.Fragment>
                <ChatHeader />
                <div className="chatContainer"></div>
                <div className="inputContainer">
                    <input type="text" className="messageInput" placeholder="Type something to send..." />
                    <button className="sendButton">보내기</button>
                </div>
            </React.Fragment>
        )
    }
}

export default ChatMessage;