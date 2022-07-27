import { Component, OnInit } from '@angular/core';

import { BreadCrumbs } from '../../interface';
import { Navbar } from '../../interface/nav-bar.interface';
import { ResponseData } from '../../interface/lol-heroes.interface';

import { LolHeroesService } from '../../services/lol-heroes/lol-heroes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navbarData: Array<Navbar> = [];
  breadCrumbs: Array<BreadCrumbs> = [];
  isShowingLolBanner = true;

  constructor(private lolHeroesService: LolHeroesService) {}

  ngOnInit(): void {}

  getCharacters() {
    this.lolHeroesService.getLolHeroesData().subscribe((data: ResponseData) => {
      this.navbarData = data.navBar;
      this.breadCrumbs = data.breadCrumbs;
    });
  }
}
