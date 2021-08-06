import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputFormComponent } from './components/input-form/input-form.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    InputFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    InputFormComponent
  ]
})
export class SharedModule { }
