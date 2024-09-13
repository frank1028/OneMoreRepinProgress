import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbuprightrowhistPage } from './dbuprightrowhist.page';

const routes: Routes = [
  {
    path: '',
    component: DbuprightrowhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbuprightrowhistPageRoutingModule {}
