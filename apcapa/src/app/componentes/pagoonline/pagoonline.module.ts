import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoonlinePageRoutingModule } from './pagoonline-routing.module';

import { PagoonlinePage } from './pagoonline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoonlinePageRoutingModule
  ],
  declarations: [PagoonlinePage]
})
export class PagoonlinePageModule {}
