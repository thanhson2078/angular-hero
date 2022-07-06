import { Component, OnInit } from '@angular/core';
import { ResponseData } from '../interface/lol-heroes.interface';
import { LolHeroesService } from '../services/lol-heroes/lol-heroes.service';

@Component({
  selector: 'app-lol-heroes',
  templateUrl: './lol-heroes.component.html',
  styleUrls: ['./lol-heroes.component.scss'],
})
export class LolHeroesComponent implements OnInit {
  charactersData: Array<any> = [];

  navBarData = [
    'tin tức',
    'giới thiệu',
    'esports',
    'hỗ trợ',
    'tải game',
    'nạp thẻ',
  ];

  breadCrumbData = [{ home: 'trang chủ', intro: 'giới thiệu', hero: 'tướng' }];

  heroesTypeData = [
    'tất cả',
    'xạ thủ',
    'đấu sĩ',
    'đỡ đòn',
    'sát thủ',
    'hỗ trợ',
    'pháp sư',
  ];

  constructor(private lolheroesService: LolHeroesService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.lolheroesService.getLolHeroesData().subscribe((data: ResponseData) => {
      this.charactersData = data.characters;
    });
  }
}
