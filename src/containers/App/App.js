import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import { cloneDeep } from 'lodash';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import ChatList from '../../components/ChatList/ChatList';
import ChatMessage from '../../components/ChatMessage/ChatMessage';

const propTypes = {
  chats: PropTypes.array,
  messages: PropTypes.array,
  sendMessage: PropTypes.func,
};

class App extends Component {
  componentDidMount() {
    const { requestChatInfos } = this.props;
    requestChatInfos();
  }

  render() {
    const { chats, messages, sendMessage } = this.props;
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path="/" render={props => (<ChatList {...props} chats={chats} />)} />
            <Route exact path="/chats/:chatRoom" render={props => (<ChatMessage {...props} messages={messages} onInput={sendMessage} chats={chats} />)} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const copiedState = cloneDeep(state);
  const { chats, messages, users } = copiedState.chats;
  const chatsInArray = chats.chatOrder.map(id => copiedState.chats.chats.chatInfo[id]);
  let messagesInArray;

  chatsInArray.sort((a, b) =>
    (b.lastMessageTime < a.lastMessageTime) ? -1 : ((b.lastMessageTime > a.lastMessageTime) ? 1 : 0))
    .forEach((chat) => {
      chat.lastMessageId = messages.messagesInfo[chat.lastMessageId];
      chat.memberId = users.usersInfo[chat.memberId];
    });

  if (Object.keys(messages.messagesInfo).length) {
    messagesInArray = Object.values(messages.messagesInfo);
    messagesInArray.forEach((message) => {
      message.sent_by = users.usersInfo[message.sent_by].profile_image;
    });
  }

  return {
    chats: chatsInArray,
    messages: messagesInArray,
  };
};

const mapDispatchToProps = dispatch => ({
  async requestChatInfos() {
    const chatDataRequest = await fetch('http://localhost:3000/chatData.json');
    const chatDataResponse = await chatDataRequest.json();

    dispatch(actions.showList(chatDataResponse));
  },
  sendMessage(input) {
    dispatch(actions.chatSend(input));
  },
});

App.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(App);
