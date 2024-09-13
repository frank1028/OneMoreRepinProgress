import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverheadexthistPage } from './overheadexthist.page';

const routes: Routes = [
  {
    path: '',
    component: OverheadexthistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverheadexthistPageRoutingModule {}
