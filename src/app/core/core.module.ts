import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CommonModule
  ]
})
export class CoreModule { }
