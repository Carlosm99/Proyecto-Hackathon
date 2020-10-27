import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoshomePageRoutingModule } from './fotoshome-routing.module';

import { FotoshomePage } from './fotoshome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoshomePageRoutingModule
  ],
  declarations: [FotoshomePage]
})
export class FotoshomePageModule {}
