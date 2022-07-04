import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import {of} from 'rxjs';
import { LolHeroesService } from './lol-heroes.service';

describe('LolHeroesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: LolHeroesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes = {
      characters: [
        {
          img: 'assets/img/Aatrox_0.jpg',
          name: 'Aatrox',
        },
        {
          img: 'assets/img/Ahri_0.jpg',
          name: 'Ahri',
        },
      ],
    };

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    service.getLolHeroesData().subscribe({
      next: (heroes) => {
        expect(heroes).withContext('expected heroes').toEqual(expectedHeroes);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
