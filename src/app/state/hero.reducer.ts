import {createReducer} from "@ngrx/store";
import {HeroState} from "./app.state";

const initialHeroState: HeroState = {
    heroes: []
};

export const heroReducer = createReducer(initialHeroState);
