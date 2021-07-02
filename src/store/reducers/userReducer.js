import { SEND_MESSAGE } from "../actions/userActions";
import { messages } from "../initialValues/messages"

const initialState = {
    messages:messages
}

export default function userReducer(state = initialState, {type,payload}){
    switch (type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages:[...state.messages, "asdadasd"]
            }
        default:
            return state;
    }
}