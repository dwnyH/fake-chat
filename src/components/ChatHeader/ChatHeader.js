import React from 'react';
import { Link } from 'react-router-dom';
import './ChatHeader.scss'

function ChatHeader(props) {
    const {location} = props;

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

export default ChatHeader;