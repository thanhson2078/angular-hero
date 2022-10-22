import { Injectable } from '@angular/core';

import { of, throwError } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';

import { SubmissionsService } from 'src/app/services/submissions.service';

import * as SubmissionsActions from './submissions.action';
import { Submission } from 'src/app/models/submissions.model';

@Injectable()
export class SubmissionsEffects {
  getSubmissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubmissionsActions.getSubmissions),
      exhaustMap(() =>
        this.submissionsService.getSubmissions().pipe(
          map((res: { data: Array<Submission> }) =>
            SubmissionsActions.getSubmissionsSuccess({
              submissions: res.data,
            })
          ),
          catchError((error) =>
            throwError(() =>
              of(SubmissionsActions.getSubmissionsFail({ error }))
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private submissionsService: SubmissionsService
  ) {}
}
