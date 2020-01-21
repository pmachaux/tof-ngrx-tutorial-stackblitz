import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState, MessageState} from "./app.state";

const messageStateSelector = createFeatureSelector<AppState, MessageState>('message');
export const selectMessages = createSelector(messageStateSelector, (state: MessageState): string[] => state.messages);
