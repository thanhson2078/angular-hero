import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadCrumbs } from '../../interface';
import { ResponseData } from '../../interface/lol-heroes.interface';
import { Navbar } from '../../interface/nav-bar.interface';
import { LolHeroesService } from '../../services/lol-heroes/lol-heroes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navbarItems: Array<Navbar> = [
    { title: 'forms', icon: 'assets/icons/forms.svg' },
    { title: 'customers', icon: 'assets/icons/forms.svg' },
    { title: 'submissions', icon: 'assets/icons/forms.svg' },
    { title: 'history', icon: 'assets/icons/forms.svg' },
    { title: 'reports', icon: 'assets/icons/forms.svg' },
    { title: 'workflow', icon: 'assets/icons/forms.svg' },
  ];

  navBarActions: Array<Navbar> = [
    { icon: 'assets/icons/noti.svg' },
    { icon: 'assets/icons/logout.svg' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
