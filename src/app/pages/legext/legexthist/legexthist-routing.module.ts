import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegexthistPage } from './legexthist.page';

const routes: Routes = [
  {
    path: '',
    component: LegexthistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegexthistPageRoutingModule {}
