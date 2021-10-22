import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

// Custom Pipe
import { WorkoutTimePipe } from '../pipes/workout-time.pipe';

// PrimeNG Module
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    CardComponent,
    WorkoutTimePipe
  ],
  imports: [
    CommonModule,
    CardModule,
    TagModule,
    ToastModule
  ],
  exports: [
    CardModule,
    TagModule,
    CardComponent
  ]
})
export class EchelonCardModule { }
