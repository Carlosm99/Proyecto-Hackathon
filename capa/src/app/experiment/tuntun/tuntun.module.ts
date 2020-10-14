import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuntunPageRoutingModule } from './tuntun-routing.module';

import { TuntunPage } from './tuntun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuntunPageRoutingModule
  ],
  declarations: [TuntunPage]
})
export class TuntunPageModule {}
