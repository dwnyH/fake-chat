import React, { Component } from 'react';
// import './ChatList.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import PropTypes from 'prop-types';

class ChatList extends Component {
    render() {
        return (
            <React.Fragment>
                <ChatHeader />
                <div className="chatListContainer">
                    <div className="newMessageBox">
                        <div className="newMessage">
                            + New message
                        </div>
                    </div>
                    <div className="chatList"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default ChatList;