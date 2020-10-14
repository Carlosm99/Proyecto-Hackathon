import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TustusPageRoutingModule } from './tustus-routing.module';

import { TustusPage } from './tustus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TustusPageRoutingModule
  ],
  declarations: [TustusPage]
})
export class TustusPageModule {}
