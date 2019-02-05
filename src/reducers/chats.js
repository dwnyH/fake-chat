import { CHAT_TYPE_SEND, SHOWLIST, SHOWCHATS } from '../actions/ActionTypes';

const initialState = {
    message: {},
    users: {}
}

export default function setChatLists(state = initialState, action) {
    const copiedState = Object.assign({}, state);

    switch(action.type) {
        case CHAT_TYPE_SEND:
            return copiedState;

        case SHOWLIST:
            return copiedState;

        default:
            return state;
    }
}
