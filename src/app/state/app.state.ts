import {Hero} from "../hero";
import {heroReducer} from "./hero.reducer";
import {messageReducer} from "./message.reducer";

export interface HeroState {
    heroes: Hero[]
}

export interface MessageState {
    messages: string[]
}

export interface AppState {
    hero: HeroState,
    message: MessageState,
}

export const appReducer = {
    hero: heroReducer,
    message: messageReducer
};
