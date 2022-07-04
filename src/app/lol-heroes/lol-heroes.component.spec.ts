import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LolHeroesService } from '../services/lol-heroes/lol-heroes.service';

import { LolHeroesComponent } from './lol-heroes.component';

describe('LolHeroesComponent', () => {
  let component: LolHeroesComponent;
  let fixture: ComponentFixture<LolHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolHeroesComponent ],
      providers: [
        LolHeroesService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LolHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
