import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    MenuComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
