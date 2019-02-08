import React from 'react';
import './ChatList.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatListDetails from '../ChatListDetails/ChatListDetails';
import PropTypes from 'prop-types';

const propTypes = {
    chats: PropTypes.array,
    location: PropTypes.object
};

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

ChatList.propTypes = propTypes;
export default ChatList;
