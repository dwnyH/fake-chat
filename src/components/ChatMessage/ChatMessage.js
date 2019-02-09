import React, { Component } from 'react';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatInput from '../ChatInput/ChatInput';
import './ChatMessage.scss';
import MessageConvert from '../MessageConvert';
import altImage from '../../assets/noprofile.png';

const propTypes = {
  location: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onInput: PropTypes.func.isRequired,
  chats: PropTypes.array.isRequired,
};

class ChatMessage extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  componentDidUpdate() {
    this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight;
  }

  render() {
    const {
      location,
      messages,
      onInput,
      chats,
    } = this.props;
    let matchedMessages;
    let messageInfo;
    let messageContent;

    if (location.state.chatRoomInfo && messages) {
      chats.forEach((chat) => {
        if (chat.id === location.state.chatRoomInfo) {
          matchedMessages = chat.messages;
        }
      });

      messageInfo = matchedMessages.map((messageId) => {
        let mappedMessage;
        messages.forEach((message) => {
          if (messageId === message.id) {
            mappedMessage = message;
          }
        });
        return mappedMessage;
      });

      messageContent = messageInfo.map((message, idx) => (
        <React.Fragment key={message.id}>
          {idx === 0 || message.created_at.substring(0, 10) !== messageInfo[idx - 1].created_at.substring(0, 10)
            ? (
              <div className="chatDate">
                {moment(message.created_at).format('MMMM DD YYYY')}
              </div>)
            : null
          }
          <div className={`${message.status} chat`}>
            <img src={message.sent_by} alt={altImage} />
            <div className="messageBox">
              <div className="message">
                <MessageConvert message={message.message} />
              </div>
            </div>
            <div className="createdAt">{message.created_at.substring(11, 16)}</div>
          </div>
        </React.Fragment>
      ));
    }

    return (
      <React.Fragment>
        <ChatHeader location={location} member={location.state.member} />
        <div className="chatContainer" ref={this.scrollRef}>
          {messageContent}
        </div>
        <ChatInput onInput={onInput} chatRoomInfo={location.state.chatRoomInfo} />
      </React.Fragment>
    );
  }
}

ChatMessage.propTypes = propTypes;
export default ChatMessage;
