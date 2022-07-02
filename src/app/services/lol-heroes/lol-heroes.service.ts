import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LolHeroesService {
  constructor(private http: HttpClient) {}

  getLolHeroesData() {
    return this.http.get('./assets/heroes/lol-heroes.json');
  }
}
