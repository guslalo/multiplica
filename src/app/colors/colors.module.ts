//Core angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Routing
import { ColorsRoutingModule } from './colors-routing.module';

//components
import { ColorsComponent } from './colors/colors.component';
import { ModalsComponent } from '../shared/modals/modals.component';

//moduls
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    ColorsComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule,
    ColorsRoutingModule,
    HttpClientModule,
    ClipboardModule
  ]
})

export class ColorsModule { }
