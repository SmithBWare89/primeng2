import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';

import {MenuModule} from 'primeng/menu';
import { ButtonModule } from 'primeng/button'


@NgModule({
  declarations: [
    MenuComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MenuModule,
    ButtonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
