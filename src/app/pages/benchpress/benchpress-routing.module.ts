import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenchpressPage } from './benchpress.page';

const routes: Routes = [
  {
    path: '',
    component: BenchpressPage
  },  {
    path: 'benchpresshist',
    loadChildren: () => import('./benchpresshist/benchpresshist.module').then( m => m.BenchpresshistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchpressPageRoutingModule {}
