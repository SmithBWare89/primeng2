import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// PrimeNG Module
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    TagModule,
    ImageModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
