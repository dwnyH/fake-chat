import React, { Component } from 'react';
import './App.scss';
import ChatList from '../../components/ChatList/ChatList';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import {Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import { get } from 'lodash';
import * as actions from '../../actions';

class App extends Component {
  componentDidMount() {
    this.props.requestChatInfos();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ChatList}/>
        <Route exact path="/chats/:chatRoom" component={ChatMessage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('새로운state',state)
  // const chats = state.chats.chats.allIds.map(id => state.chats.chats.byIds.id );
  // return {
  //   chats: state.chats.chats,
  //   users: state.chats.users.byIds,
  //   message: state.chats.message
  // }
}

const mapDispatchToProps = (dispatch) => ({
  requestChatInfos: async() => {
    const chatDataRequest = await fetch('./chatData.json');
    const chatDataResponse = await chatDataRequest.json();

    dispatch(actions.showList(chatDataResponse));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
