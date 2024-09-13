import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenchpresshistPage } from './benchpresshist.page';

const routes: Routes = [
  {
    path: '',
    component: BenchpresshistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchpresshistPageRoutingModule {}
