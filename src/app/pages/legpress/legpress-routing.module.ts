import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegpressPage } from './legpress.page';

const routes: Routes = [
  {
    path: '',
    component: LegpressPage
  },
  {
    path: 'legpresshist',
    loadChildren: () => import('./legpresshist/legpresshist.module').then( m => m.LegpresshistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegpressPageRoutingModule {}
