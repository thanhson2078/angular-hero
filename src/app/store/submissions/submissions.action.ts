import {createAction, props} from '@ngrx/store';
import { Submission } from 'src/app/models/submissions.model';

export const getSubmissions = createAction('[Submissions] Get Submissions');

export const getSubmissionsSuccess = createAction('[Submissions] Get Submissions Success',
  props<{ submissions: Array<Submission> }>()
)

export const getSubmissionsFail = createAction('[Submissions] Get Submissions Fail',
  props<{ error: any }>()
)
