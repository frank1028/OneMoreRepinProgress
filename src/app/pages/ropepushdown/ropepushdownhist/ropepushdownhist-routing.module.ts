import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RopepushdownhistPage } from './ropepushdownhist.page';

const routes: Routes = [
  {
    path: '',
    component: RopepushdownhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RopepushdownhistPageRoutingModule {}
