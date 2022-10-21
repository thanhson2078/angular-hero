import { Component, OnInit } from '@angular/core';

import { Navbar } from '../../interface/nav-bar.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navbarItems: Array<Navbar> = [
    { title: 'forms', icon: 'assets/icons/forms.svg' },
    { title: 'customers', icon: 'assets/icons/customers.svg' },
    { title: 'submissions', icon: 'assets/icons/submission.svg' },
    { title: 'history', icon: 'assets/icons/history.svg' },
    { title: 'reports', icon: 'assets/icons/report.svg' },
    { title: 'workflow', icon: 'assets/icons/workflow.svg' },
  ];

  navBarActions: Array<Navbar> = [
    { icon: 'assets/icons/noti.svg' },
    { icon: 'assets/icons/logout.svg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
