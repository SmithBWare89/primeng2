import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';

import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class SelectionModule { }
