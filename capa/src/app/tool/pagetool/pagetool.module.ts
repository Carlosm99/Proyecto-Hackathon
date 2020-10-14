import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagetoolPageRoutingModule } from './pagetool-routing.module';

import { PagetoolPage } from './pagetool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagetoolPageRoutingModule
  ],
  declarations: [PagetoolPage]
})
export class PagetoolPageModule {}
