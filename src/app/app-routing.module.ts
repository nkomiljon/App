import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./link/link.module').then(m => m.LinkModule)
  },
  {
    path: 'gener/:generId',
    loadChildren: () => import('./gener/gener.module').then(m => m.GenerModule)
  },
  {
    path: 'about/:movieId',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
