import { CHAT_TYPE_SEND, SHOWLIST, SHOWCHATS } from '../actions/ActionTypes';
import { cloneDeep } from 'lodash';

const initialState = {
    chats: {chatOrder: [], chatInfo: {}},
    messages: {},
    users: {}
}

export default function setChatLists(state = initialState, action) {
    const copiedState = cloneDeep(initialState);

    switch(action.type) {
        case CHAT_TYPE_SEND:
            return copiedState;

        case SHOWLIST:
            copiedState.chats.chatOrder = action.data.chats.allIds;
            copiedState.chats.chatInfo = action.data.chats.byIds;
            copiedState.messages = action.data.chatMessage.byIds;
            copiedState.users = action.data.users.byIds;
            return copiedState;

        default:
            return state;
    }
}
