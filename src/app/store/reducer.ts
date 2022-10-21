import {ActionReducerMap, Action} from '@ngrx/store';
import {InjectionToken} from '@angular/core';

import {routerReducer, RouterReducerState} from '@ngrx/router-store';

import * as fromSubmissions from './submissions/submissions.reducer';

export interface AppState {
  router: RouterReducerState;
  submissions: fromSubmissions.SubmissionsState

}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    router: routerReducer,
    submissions: fromSubmissions.submissionsReducer
  }),
});


