import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbbenchhistPage } from './dbbenchhist.page';

const routes: Routes = [
  {
    path: '',
    component: DbbenchhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbbenchhistPageRoutingModule {}
