import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

// PrimeNG Module
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    CardComponent
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
