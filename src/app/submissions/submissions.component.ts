import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { SubmissionsStatusEnum } from '../enum/submissions.enum';
import { AppState } from '../store/reducer';
import { getSubmissions } from '../store/submissions/submissions.action';
import { selectSubmissions } from '../store/submissions/submissions.selector';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent implements OnInit {
  submissions$ = this.store.pipe(select(selectSubmissions));

  SubmissionsStatusEnum = SubmissionsStatusEnum;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getSubmissions());
  }

  ngOnInit(): void {}
}
