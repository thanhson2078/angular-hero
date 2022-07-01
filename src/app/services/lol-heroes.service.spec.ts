import { TestBed } from '@angular/core/testing';

import { LolHeroesService } from './lol-heroes.service';

describe('LolHeroesService', () => {
  let service: LolHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
