import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

// Custom Pipe
import { WorkoutTimePipe } from '../pipes/workout-time.pipe';

// PrimeNG Module
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    CardComponent,
    WorkoutTimePipe
  ],
  imports: [
    CommonModule,
    CardModule,
    TagModule
  ],
  exports: [
    CardModule,
    TagModule,
    CardComponent
  ]
})
export class EchelonCardModule { }
