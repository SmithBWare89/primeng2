import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';

import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    ToastModule
  ]
})
export class NotificationModule { }
