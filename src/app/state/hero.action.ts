import {createAction, props} from "@ngrx/store";
import {Hero} from "../hero";

export const setHeroes = createAction('[HERO] set heroes', props<{heroes: Hero[]}>());
export const addHero = createAction('[HERO] add hero', props<{hero: Hero}>());
export const deleteHero = createAction('[HERO] delete hero', props<{hero: Hero}>());
