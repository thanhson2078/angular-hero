import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LolHeroesService } from '../services/lol-heroes/lol-heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor(private lolheroesService: LolHeroesService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    console.log('this.route.snapshot', this.route.snapshot);
  }


}
