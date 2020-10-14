import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TustusPage } from './tustus.page';

const routes: Routes = [
  {
    path: '',
    component: TustusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TustusPageRoutingModule {}
