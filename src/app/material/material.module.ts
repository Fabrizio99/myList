import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



const materialModules = [
  MatToolbarModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...materialModules]
  ],
  exports: materialModules
})
export class MaterialModule { }
