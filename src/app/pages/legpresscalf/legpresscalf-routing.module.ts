import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegpresscalfPage } from './legpresscalf.page';

const routes: Routes = [
  {
    path: '',
    component: LegpresscalfPage
  },  {
    path: 'legpresscalfhist',
    loadChildren: () => import('./legpresscalfhist/legpresscalfhist.module').then( m => m.LegpresscalfhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegpresscalfPageRoutingModule {}
