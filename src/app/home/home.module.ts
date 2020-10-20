import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
