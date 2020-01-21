import {createReducer} from "@ngrx/store";
import {MessageState} from "./app.state";

const initialMessageState: MessageState = {
    messages: []
};

export const messageReducer = createReducer(initialMessageState);
