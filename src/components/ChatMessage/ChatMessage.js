import React, { Component } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatInput from '../ChatInput/ChatInput';
import './ChatMessage.scss'
import PropTypes from 'prop-types';

class ChatMessage extends Component {

    render() {
        debugger;
        const {location, messages} = this.props;
        let messageInfo;
        let messageContent;

        if (location.state.messages && messages) {
            messageInfo = location.state.messages.map((messageId) => {
                let mappedMessage;
                messages.forEach((message) => {
                    if (messageId === message.id) {
                        mappedMessage = message;
                    }
                })
                return mappedMessage;
            });

            messageContent = messageInfo.map((message, idx) => (
                <React.Fragment key={message.id}>
                    {idx===0 || message.created_at.substring(0, 10) !== messageInfo[idx - 1].created_at.substring(0,10)
                        ? <div className="chatDate"> {new Date(message.created_at).toUTCString().substring(0, 16)}</div>
                        : null}
                    <div className={`${message.status} chat`}>
                        <img src={message.sent_by} alt="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiu5eSvx6TgAhXMT7wKHa__ByEQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Ftr%2Fbo%25C5%259F-profil-resmi-gizemli-adam-avatar-973460%2F&psig=AOvVaw2P8OjfBVhmbT0mEdJxBJeY&ust=1549454630606600"/>
                        <div className="messageBox">
                            <div className="message">{message.message}</div>
                        </div>
                        <div className="createdAt">{message.created_at.substring(11, 16)}</div>
                    </div>
                </React.Fragment>
            ));
        }

        return (
            <React.Fragment>
                <ChatHeader />
                <div className="chatContainer">
                    {messageContent}
                </div>
                <ChatInput />
            </React.Fragment>
        );
    }
}

export default ChatMessage;