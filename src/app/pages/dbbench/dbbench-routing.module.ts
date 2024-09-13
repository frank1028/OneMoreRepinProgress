import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbbenchPage } from './dbbench.page';

const routes: Routes = [
  {
    path: '',
    component: DbbenchPage
  },  {
    path: 'dbbenchhist',
    loadChildren: () => import('./dbbenchhist/dbbenchhist.module').then( m => m.DbbenchhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbbenchPageRoutingModule {}
