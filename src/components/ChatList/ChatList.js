import React from 'react';
import './ChatList.scss';
import PropTypes from 'prop-types';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatListDetails from '../ChatListDetails/ChatListDetails';

const propTypes = {
  chats: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

function ChatList(props) {
  const { chats, location } = props;

  return (
    <React.Fragment>
      <ChatHeader location={location} />
      <div className="chatListContainer">
        <div className="newMessageBox">
          <div className="newMessage"> + New message </div>
        </div>
        <ChatListDetails chats={chats} />
      </div>
    </React.Fragment>
  );
}

ChatList.propTypes = propTypes;
export default ChatList;
