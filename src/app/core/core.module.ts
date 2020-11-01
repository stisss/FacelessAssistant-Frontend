import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DialogCloseComponent } from './dialogs/dialog-close/dialog-close.component';

@NgModule({
  declarations: [NavbarComponent, DialogCloseComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
