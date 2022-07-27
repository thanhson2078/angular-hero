import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

import {SkinDetailComponent} from './skin-detail/skin-detail.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {LolHeroesComponent} from './lol-heroes/lol-heroes.component';
import {LayoutModule} from './layout/layout.module';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment'; // Angular CLI environment
import {StoreModule, ActionReducer, MetaReducer} from '@ngrx/store';
import {ROOT_REDUCERS} from './store/reducer';
import {HeroEffects} from './store/hero/hero.effect';
import { EffectsModule } from '@ngrx/effects';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SkinDetailComponent,
    HeroDetailComponent,
    LolHeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    StoreModule.forRoot(ROOT_REDUCERS, {metaReducers}),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
        autoPause: true,
    }),
    EffectsModule.forRoot([HeroEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
