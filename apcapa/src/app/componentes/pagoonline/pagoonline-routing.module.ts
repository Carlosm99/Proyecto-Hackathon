import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoonlinePage } from './pagoonline.page';

const routes: Routes = [
  {
    path: '',
    component: PagoonlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoonlinePageRoutingModule {}
