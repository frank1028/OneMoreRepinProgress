import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegpresscalfhistPage } from './legpresscalfhist.page';

const routes: Routes = [
  {
    path: '',
    component: LegpresscalfhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegpresscalfhistPageRoutingModule {}
