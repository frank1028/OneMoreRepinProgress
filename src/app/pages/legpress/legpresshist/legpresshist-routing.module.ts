import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegpresshistPage } from './legpresshist.page';

const routes: Routes = [
  {
    path: '',
    component: LegpresshistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegpresshistPageRoutingModule {}
