import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ChatHeader.scss'

class ChatHeader extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div className="Header">
                <Link to="/" className="backLink"> 뒤로 </Link>
                <div className="headerText">CHAT</div>
            </div>
        );
    }
}

export default ChatHeader;