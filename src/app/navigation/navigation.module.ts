import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';

import {MatMenuModule} from '@angular/material/menu';

import {MenuModule} from 'primeng/menu';


@NgModule({
  declarations: [
    MenuComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MatMenuModule,
    MenuModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
