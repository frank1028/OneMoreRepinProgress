import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PecdeckPage } from './pecdeck.page';

const routes: Routes = [
  {
    path: '',
    component: PecdeckPage
  },  {
    path: 'pecdeckhist',
    loadChildren: () => import('./pecdeckhist/pecdeckhist.module').then( m => m.PecdeckhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PecdeckPageRoutingModule {}
