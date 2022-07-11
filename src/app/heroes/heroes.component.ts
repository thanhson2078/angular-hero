import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroesData: Array<any> = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroesData().subscribe((data: any) => {
      this.heroesData = data.data;
    });
  }
}
