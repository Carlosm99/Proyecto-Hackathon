import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tuntun',
    loadChildren: () => import('./experiment/tuntun/tuntun.module').then( m => m.TuntunPageModule)
  },
  {
    path: 'pagetool',
    loadChildren: () => import('./tool/pagetool/pagetool.module').then( m => m.PagetoolPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./car/cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'inside',
    loadChildren: () => import('./nothing/inside/inside.module').then( m => m.InsidePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
