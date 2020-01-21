import {createReducer, on} from "@ngrx/store";
import {MessageState} from "./app.state";
import {addMessage, clearMessages} from "./message.actions";

const initialMessageState: MessageState = {
    messages: []
};

const addMessageHandler = on(addMessage, (state: MessageState, {message}) => {
    const newMessages = [...state.messages, message];
    return {...state, messages: newMessages}
});

const clearMessagesHandler = on(clearMessages, (state: MessageState) => ({...state, messages: []}));

export const messageReducer = createReducer(initialMessageState, addMessageHandler, clearMessagesHandler);
