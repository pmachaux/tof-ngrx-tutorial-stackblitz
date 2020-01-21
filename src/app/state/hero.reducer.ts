import {createReducer, on} from "@ngrx/store";
import {HeroState} from "./app.state";
import {setHeroes} from "./hero.action";

const initialHeroState: HeroState = {
    heroes: []
};


const setHeroesHandler = on(setHeroes, (state: HeroState, action) => ({...state, heroes: action.heroes}));

export const heroReducer = createReducer(initialHeroState, setHeroesHandler);
