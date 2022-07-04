import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: HeroesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes = {
      data: [
        {
          id: '123',
          name: 'Yasuo 123',
          skins: [
            {
              id: 'skin-1',
              name: 'Yasuo 123 skin 1',
            },
            {
              id: 'skin-2',
              name: 'Yasuo 123 skin 2',
            },
          ],
        },
        {
          id: '124',
          name: 'Yasuo 124',
          skins: [
            {
              id: 'skin-1',
              name: 'Yasuo 124 skin 1',
            },
            {
              id: 'skin-2',
              name: 'Yasuo 124 skin 2',
            },
          ],
        },
      ],
    };

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    service.getHeroesData().subscribe({
      next: (heroes) => {
        expect(heroes).withContext('expected heroes').toEqual(expectedHeroes);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
