import React from 'react';
import './ChatListDetails.scss';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import MessageConvert from '../MessageConvert';
import altImage from '../../assets/noprofile.png';

const propTypes = {
    chats: PropTypes.array
};

function ChatListDetails(props) {
    const {chats} = props;
    const chatLists = chats.map(chat => (
        <div className="chatList" key={chat.id}>
            <Link to={{ pathname: `/chats/${chat.memberId.display_name}`, state: {member: chat.memberId.display_name, chatRoomInfo: chat.id} }}>
                <img src={chat.memberId.profile_image} alt={altImage} />
                <div className="lastMessage_createdAt">
                    {moment(chat.lastMessageId.created_at).subtract(10, 'days').calendar() === moment().subtract(10, 'days').calendar()
                        ? moment(chat.lastMessageId.created_at).format('h:mm')
                        : moment(chat.lastMessageId.created_at).fromNow()
                    }
                </div>
                <div className="chatName">
                    {chat.memberId.display_name}
                </div>
                <div className="lastMessage">
                    <MessageConvert message={chat.lastMessageId.message} />
                </div>
            </Link>
        </div>
    ));

    return (
            <div className="chatLists">
                {chats.length
                    ? chatLists
                    : null
                }
            </div>
    );
}

ChatListDetails.propTypes = propTypes;
export default ChatListDetails;
