import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

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
      console.log('data', data);
      this.heroesData = data.data;
    });
  }
}
