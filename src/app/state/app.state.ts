import {Hero} from "../hero";
import {heroReducer} from "./hero.reducer";

export interface HeroState {
    heroes: Hero[]
}

export interface AppState {
    hero: HeroState
}

export const appReducer = {
    hero: heroReducer
};
