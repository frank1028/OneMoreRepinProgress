import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatedrowhistPage } from './seatedrowhist.page';

const routes: Routes = [
  {
    path: '',
    component: SeatedrowhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatedrowhistPageRoutingModule {}
