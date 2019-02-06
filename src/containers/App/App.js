import React, { Component } from 'react';
import './App.scss';
import ChatList from '../../components/ChatList/ChatList';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import {Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { get } from 'lodash';
import * as actions from '../../actions';

class App extends Component {
  componentDidMount() {
    debugger;
    this.props.requestChatInfos();
  }

  render() {
    debugger;
    const {chats, users, messages} = this.props;
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path="/" render={props => (<ChatList chats={chats} />)} />
            <Route exact path="/chats/:chatRoom" render={props => (<ChatMessage {...props} messages={messages} />)} />
          </ React.Fragment>
        </ Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const chats = state.chats.chats.chatOrder.map(id => state.chats.chats.chatInfo[id]);
  chats.sort((a, b) =>
    (b.lastMessageTime < a.lastMessageTime) ? -1 : ((b.lastMessageTime > a.lastMessageTime) ? 1 : 0))
  .forEach(chat => {
    chat.lastMessageId = state.chats.messages[chat.lastMessageId];
    chat.memberId = state.chats.users[chat.memberId];
  });
  debugger;
  let messages;
  if (Object.keys(state.chats.messages).length) {
    messages = Object.values(state.chats.messages);
    messages.forEach(message => {
      message.sent_by = state.chats.users[message.sent_by].profile_image
    });
  }

  return {
    chats,
    messages
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestChatInfos: async() => {
    debugger;
    const chatDataRequest = await fetch('http://localhost:3000/chatData.json');
    const chatDataResponse = await chatDataRequest.json();

    dispatch(actions.showList(chatDataResponse));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
