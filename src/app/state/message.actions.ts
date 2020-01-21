import {createAction, props} from "@ngrx/store";

export const addMessage = createAction('[MESSAGE] add message', props<{message: string}>());
export const clearMessages = createAction('[MESSAGE] clearMessages');
