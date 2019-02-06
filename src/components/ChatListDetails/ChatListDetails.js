import React, { Component } from 'react';
import './ChatListDetails.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ChatListDetails extends Component {
    render() {
        debugger;
        const {chats} = this.props
        const chatLists = chats.map(chat => (
            <div className="chatList" key={chat.id}>
                <img src={chat.memberId.profile_image} alt="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiu5eSvx6TgAhXMT7wKHa__ByEQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Ftr%2Fbo%25C5%259F-profil-resmi-gizemli-adam-avatar-973460%2F&psig=AOvVaw2P8OjfBVhmbT0mEdJxBJeY&ust=1549454630606600" />
                <div className="lastMessage_createdAt">
                {
                    chat.lastMessageId.created_at.substring(0,10) === new Date().toISOString().substring(0,10)
                    ? chat.lastMessageId.created_at.substring(11, 16)
                    : new Date(chat.lastMessageId.created_at).toUTCString().split(',')[0]
                }
                </div>
                <div className="chatName">
                    <Link to={{ pathname: `/chats/${chat.memberId.display_name}`, state: {messages: chat.messages} }}>
                        {chat.memberId.display_name}
                    </Link>
                </div>
                <div className="lastMessage">{chat.lastMessageId.message}</div>
            </div>
        ));

        return (
                <div className="chatLists">
                   {chats.length
                   ? chatLists
                   : null}
                </div>
        );
    }
}

export default ChatListDetails;