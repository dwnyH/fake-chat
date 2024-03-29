import React, { Component } from 'react';
import './ChatInput.scss';
import { debounce } from 'lodash';
import * as moment from 'moment';

import PropTypes from 'prop-types';

const propTypes = {
  onInput: PropTypes.func.isRequired,
  chatRoomInfo: PropTypes.number.isRequired,
};

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.debouncedKeyPress = debounce(this.debouncedKeyPress.bind(this), 300);
    this.enterKeyPress = this.enterKeyPress.bind(this);
    this.inputRef = React.createRef();
    this.sendButtonClick = this.sendButtonClick.bind(this);
  }

  debouncedKeyPress(key) {
    if (key === 'Enter') {
      this.sendButtonClick();
    }
  }

  enterKeyPress(ev) {
    this.debouncedKeyPress(ev.key);
  }

  sendButtonClick() {
    const { onInput, chatRoomInfo } = this.props;
    const now = moment().format();
    const inputInfo = {
      now,
      chatRoomInfo,
      data: this.inputRef.current.value,
    };

    onInput(inputInfo);
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <div className="inputContainer">
        <input type="text" className="messageInput" placeholder="Type something to send..." onKeyPress={this.enterKeyPress} ref={this.inputRef} />
        <button className="sendButton" onClick={this.sendButtonClick} type="button">보내기</button>
      </div>
    );
  }
}

ChatInput.propTypes = propTypes;
export default ChatInput;
