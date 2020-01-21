import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState, HeroState} from "./app.state";

const heroSelector = createFeatureSelector<AppState, HeroState>('hero');

export const selectHeroes = createSelector(heroSelector, (state: HeroState) => state.heroes);
