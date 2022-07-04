import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { LolHeroesService } from './lol-heroes.service';

describe('LolHeroesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: LolHeroesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LolHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
