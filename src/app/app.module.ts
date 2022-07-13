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
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SkinDetailComponent,
    HeroDetailComponent,
    LolHeroesComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
