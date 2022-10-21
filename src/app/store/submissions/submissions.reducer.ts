import { createReducer, on } from '@ngrx/store';
import { Submission } from 'src/app/models/submissions.model';

import * as SubmissionsActions from './submissions.action';

export interface SubmissionsState {
  submissions: Array<Submission>;
  isLoading: boolean;
}

export const initialState: SubmissionsState = {
  submissions: [],
  isLoading: false,
};

export const submissionsReducer = createReducer(
  initialState,

  on(SubmissionsActions.getSubmissions, (state) => {
    return { ...state };
  }),

  on(SubmissionsActions.getSubmissionsSuccess, (state, action) => {
    return {
      ...state,
      submissions: action.submissions,
    };
  }),

  on(SubmissionsActions.getSubmissionsFail, (state) => {
    return { ...state };
  })
);
