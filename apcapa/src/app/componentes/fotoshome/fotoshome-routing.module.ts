import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoshomePage } from './fotoshome.page';

const routes: Routes = [
  {
    path: '',
    component: FotoshomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoshomePageRoutingModule {}
