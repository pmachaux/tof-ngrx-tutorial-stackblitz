import {createReducer, on} from "@ngrx/store";
import {HeroState} from "./app.state";
import {addHero, deleteHero, setHeroes} from "./hero.action";

const initialHeroState: HeroState = {
    heroes: []
};

const setHeroesHandler = on(setHeroes, (state: HeroState, action) => ({...state, heroes: action.heroes}));
const addHeroHandler = on(addHero, (state: HeroState, {hero}) => {
    const newHeroes = [...state.heroes, hero];
    return {...state, heroes: newHeroes}
});
const deleteHeroHandler = on(deleteHero, (state: HeroState, {hero}) => {
    const remainingHeroes = state.heroes.filter(h => h !== hero);
    return {...state, heroes: remainingHeroes}
});

export const heroReducer = createReducer(initialHeroState, setHeroesHandler, addHeroHandler, deleteHeroHandler);
