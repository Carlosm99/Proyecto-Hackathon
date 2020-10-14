import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuntunPage } from './tuntun.page';

const routes: Routes = [
  {
    path: '',
    component: TuntunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuntunPageRoutingModule {}
