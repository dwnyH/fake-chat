import React, { Component } from 'react';
import './ChatList.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatListDetails from '../ChatListDetails/ChatListDetails';
import PropTypes from 'prop-types';

function ChatList(props) {
    const {chats, location} = props;

    return (
        <React.Fragment>
            <ChatHeader location={location} />
            <div className="chatListContainer">
                <div className="newMessageBox">
                    <div className="newMessage">
                        + New message
                    </div>
                </div>
                <ChatListDetails chats={chats}/>
            </div>
        </React.Fragment>
    );
}

export default ChatList;