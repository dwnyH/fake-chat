import { CHAT_TYPE_SEND, SHOWLIST, SHOWCHATS } from '../actions/ActionTypes';

export function chatTypeSend(data) {
    return {
        type: CHAT_TYPE_SEND,
        data
    }
}

export function showList(data) {
    return {
        type: SHOWLIST,
        data
    }
}

export function showChats(data) {
    return {
        type: SHOWCHATS,
        data
    }
}
