import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from './submissions.reducer';

export const selectSubmissionsState =
  createFeatureSelector<fromReducer.SubmissionsState>('submissions');

export const selectSubmissions = createSelector(
  selectSubmissionsState,
  (state) => state.submissions
);
