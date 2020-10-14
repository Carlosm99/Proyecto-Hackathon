import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagetoolPage } from './pagetool.page';

const routes: Routes = [
  {
    path: '',
    component: PagetoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagetoolPageRoutingModule {}
