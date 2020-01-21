import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState, HeroState} from "./app.state";
import {Hero} from "../hero";

const heroSelector = createFeatureSelector<AppState, HeroState>('hero');

export const selectHeroes = createSelector(heroSelector, (state: HeroState): Hero[] => state.heroes);
