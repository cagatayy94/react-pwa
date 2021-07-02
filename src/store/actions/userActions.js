export const SEND_MESSAGE = "SEND_MESSAGE";

export function sendMessage(message, to){
    return {
        type : SEND_MESSAGE,
        payload : message, to
    }
}