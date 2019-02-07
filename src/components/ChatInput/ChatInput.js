import React, { Component } from 'react';
import './ChatInput.scss';
import * as moment from 'moment';
import PropTypes from 'prop-types';

const propTypes = {
    onInput: PropTypes.func,
    chatRoomInfo: PropTypes.number
};

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.sendButtonClick = this.sendButtonClick.bind(this);
    }

    sendButtonClick() {
        const {onInput, chatRoomInfo} = this.props;
        const now = moment().format();
        const inputInfo = {
            now,
            chatRoomInfo,
            data: this.inputRef.current.value
        }

        debugger;
        onInput(inputInfo);
    }

    render() {
        return (
            <div className="inputContainer">
                <input type="text" className="messageInput" placeholder="Type something to send..." ref={this.inputRef} />
                <button className="sendButton" onClick={this.sendButtonClick}>보내기</button>
            </div>
        );
    }
}

ChatInput.propTypes = propTypes;
export default ChatInput;
