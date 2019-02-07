import { CHAT_TYPE_SEND, SHOWLIST } from '../actions/ActionTypes';
import { cloneDeep } from 'lodash';

const initialState = {
    chats: {chatOrder: [], chatInfo: {}},
    messages: {messagesOrder: [], messagesInfo: {}},
    users: {usersOrder: [], usersInfo: {}}
}

export default function setChatLists(state = initialState, action) {
    const copiedState = cloneDeep(state);
    const {chats, messages, users} = copiedState;

    switch(action.type) {
        case CHAT_TYPE_SEND:
            const newId = Math.max(...messages.messagesOrder) + 1;
            messages.messagesOrder.push(newId);
            messages.messagesInfo[newId] = {
                id: newId,
                created_at: action.data.now,
                message: action.data.data,
                sent_by: 1,
                status: 'send'
            };

            chats.chatInfo[action.data.chatRoomInfo].messages.push(newId);
            chats.chatInfo[action.data.chatRoomInfo].lastMessageId = newId;
            chats.chatInfo[action.data.chatRoomInfo].lastMessageTime = action.data.now;

            return copiedState;

        case SHOWLIST:
            chats.chatOrder = action.data.chats.allIds;
            chats.chatInfo = action.data.chats.byIds;
            messages.messagesInfo = action.data.chatMessage.byIds;
            messages.messagesOrder = action.data.chatMessage.allIds;
            users.usersInfo = action.data.users.byIds;
            users.usersOrder = action.data.users.allIds;

            return copiedState;

        default:
            return state;
    }
}
