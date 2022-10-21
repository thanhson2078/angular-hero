import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [MainLayoutComponent, NavBarComponent],
  imports: [CommonModule, RouterModule],
  exports:[
    MainLayoutComponent
  ]
})
export class LayoutModule {}
