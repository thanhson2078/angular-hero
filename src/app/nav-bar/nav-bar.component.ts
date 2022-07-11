import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadCrumbs } from '../interface';
import { ResponseData } from '../interface/lol-heroes.interface';
import { Navbar } from '../interface/nav-bar.interface';
import { LolHeroesService } from '../services/lol-heroes/lol-heroes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navbarData: Array<Navbar> = [];
  breadCrumbs: Array<BreadCrumbs> = [];
  isShowingLolBanner = true;

  constructor(private lolheroesService: LolHeroesService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    
  }

  getCharacters() {
    this.lolheroesService.getLolHeroesData().subscribe((data: ResponseData) => {
      this.navbarData = data.navBar;
      this.breadCrumbs = data.breadCrumbs;
    });
  }
}
