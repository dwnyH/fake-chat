import { CHAT_TYPE_SEND, SHOWLIST } from '../actions/ActionTypes';

export function chatSend(data) {
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
