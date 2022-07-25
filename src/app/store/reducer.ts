import {ActionReducerMap, Action} from '@ngrx/store';
import {InjectionToken} from '@angular/core';

import * as fromHero from './hero/hero.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
  heroes: fromHero.HeroState

}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    router: routerReducer,
    heroes: fromHero.heroesReducer
  }),
});


