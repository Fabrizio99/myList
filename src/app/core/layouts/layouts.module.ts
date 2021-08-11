import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MaterialModule } from '../../material/material.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';



@NgModule({
  declarations: [  
    AuthLayoutComponent, HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class LayoutsModule { }
