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
        const {location} = this.props;

        return (
            <div className="Header">
                {location.pathname !== '/'
                    ? <Link to="/" className="backLink"> 뒤로 </Link>
                    : null
                }
                <div className="headerText">
                    {location.pathname !== '/'
                        ? location.state.member
                        : 'CHAT'
                    }
                </div>
            </div>
        );
    }
}

export default ChatHeader;