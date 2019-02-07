import React, { Component } from 'react';
import './App.scss';
import ChatList from '../../components/ChatList/ChatList';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import {Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash';
import { BrowserRouter as Router } from 'react-router-dom';
import { get } from 'lodash';
import * as actions from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestChatInfos();
  }

  render() {
    console.log('참고해!', this.props.chats);
    const {chats, messages, sendMessage} = this.props;
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path="/" render={props => (<ChatList {...props} chats={chats} />)} />
            <Route exact path="/chats/:chatRoom" render={props => (<ChatMessage {...props} messages={messages} onInput={sendMessage} chats={chats} />)} />
          </ React.Fragment>
        </ Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const copiedState = cloneDeep(state);
  let messages;
  //const {chats, messages, users} = state.chats;

  const chats = copiedState.chats.chats.chatOrder.map(id => copiedState.chats.chats.chatInfo[id]);


  chats.sort((a, b) =>
    (b.lastMessageTime < a.lastMessageTime) ? -1 : ((b.lastMessageTime > a.lastMessageTime) ? 1 : 0))
    .forEach(chat => {
      chat.lastMessageId = copiedState.chats.messages.messagesInfo[chat.lastMessageId];
      chat.memberId = copiedState.chats.users.usersInfo[chat.memberId];
    });

  if (Object.keys(copiedState.chats.messages.messagesInfo).length) {
    messages = Object.values(copiedState.chats.messages.messagesInfo);
    messages.forEach(message => {
      message.sent_by = copiedState.chats.users.usersInfo[message.sent_by].profile_image
    });
  }

  return {
    chats,
    messages
  }
};

const mapDispatchToProps = (dispatch) => ({
  requestChatInfos: async() => {
    const chatDataRequest = await fetch('http://localhost:3000/chatData.json');
    const chatDataResponse = await chatDataRequest.json();

    dispatch(actions.showList(chatDataResponse));
  },
  sendMessage : (input) => {
    dispatch(actions.chatSend(input));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
