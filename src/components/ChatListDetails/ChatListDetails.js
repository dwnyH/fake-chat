import React from 'react';
import './ChatListDetails.scss';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import MessageConvert from '../MessageConvert';

const propTypes = {
    chats: PropTypes.array
};

function ChatListDetails(props) {
    const {chats} = props;
    const chatLists = chats.map(chat => (
        <div className="chatList" key={chat.id}>
            <Link to={{ pathname: `/chats/${chat.memberId.display_name}`, state: {member: chat.memberId.display_name, chatRoomInfo: chat.id} }}>
                <img src={chat.memberId.profile_image} alt="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiu5eSvx6TgAhXMT7wKHa__ByEQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Ftr%2Fbo%25C5%259F-profil-resmi-gizemli-adam-avatar-973460%2F&psig=AOvVaw2P8OjfBVhmbT0mEdJxBJeY&ust=1549454630606600" />
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
