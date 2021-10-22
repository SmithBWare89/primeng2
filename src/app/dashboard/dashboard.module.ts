import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EchelonCardModule } from '../card/echeloncard.module';
import { SelectionModule } from '../selection/selection.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EchelonCardModule,
    SelectionModule 
  ],
  exports: [
  ]
})
export class DashboardModule { }
