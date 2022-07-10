import { Component, OnInit } from '@angular/core';
import {
  ResponseData,
  BreadCrumbs,
  HeroesType,
  LolHero,
} from '../interface/lol-heroes.interface';
import { Navbar } from '../interface/nav-bar.interface';
import { LolHeroesService } from '../services/lol-heroes/lol-heroes.service';

@Component({
  selector: 'app-lol-heroes',
  templateUrl: './lol-heroes.component.html',
  styleUrls: ['./lol-heroes.component.scss'],
})
export class LolHeroesComponent implements OnInit {
  characters: Array<LolHero> = [];
  navbarData: Array<Navbar> = [];
  heroesCategories: Array<HeroesType> = [];
  breadCrumbs: Array<BreadCrumbs> = [];

  isShowingAllHeroTypes = false;

  constructor(private lolheroesService: LolHeroesService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.lolheroesService.getLolHeroesData().subscribe((data: ResponseData) => {
      this.characters = data.characters;
      this.navbarData = data.navBar;
      this.heroesCategories = data.heroesCategories;
      this.breadCrumbs = data.breadCrumbs;
    });
  }
}
