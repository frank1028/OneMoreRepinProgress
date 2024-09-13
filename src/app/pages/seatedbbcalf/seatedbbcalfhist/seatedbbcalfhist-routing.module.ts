import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatedbbcalfhistPage } from './seatedbbcalfhist.page';

const routes: Routes = [
  {
    path: '',
    component: SeatedbbcalfhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatedbbcalfhistPageRoutingModule {}
