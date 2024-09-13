import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TricepspushdownPage } from './tricepspushdown.page';

const routes: Routes = [
  {
    path: '',
    component: TricepspushdownPage
  },  {
    path: 'tricepspushdownhist',
    loadChildren: () => import('./tricepspushdownhist/tricepspushdownhist.module').then( m => m.TricepspushdownhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TricepspushdownPageRoutingModule {}
