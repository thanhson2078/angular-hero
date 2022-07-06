import { Component, OnInit } from '@angular/core';
import { LolHero, ResponseData } from '../interface/lol-heroes.interface';
import { LolHeroesService } from '../services/lol-heroes/lol-heroes.service';

@Component({
  selector: 'app-lol-heroes',
  templateUrl: './lol-heroes.component.html',
  styleUrls: ['./lol-heroes.component.scss'],
})
export class LolHeroesComponent implements OnInit {
  charactersData: Array<any> = [];

  navBarData = [
    'TIN TỨC',
    'GIỚI THIỆU',
    'ESPORTS',
    'HỖ TRỢ',
    'TẢI GAME',
    'NẠP THẺ',
  ];

  breadCrumbData = [{ home: 'Trang Chủ', intro: 'Giới Thiệu', hero: 'Tướng' }];

  heroesTypeData = [
    'Xạ Thủ',
    'Đấu Sĩ',
    'Đỡ Đòn',
    'Sát Thủ',
    'Hỗ Trợ',
    'Pháp Sư',
  ];

  allHeroesTypeData = [{ all: 'Tất Cả' }];

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
