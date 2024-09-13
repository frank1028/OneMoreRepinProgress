import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TricepspushdownhistPage } from './tricepspushdownhist.page';

const routes: Routes = [
  {
    path: '',
    component: TricepspushdownhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TricepspushdownhistPageRoutingModule {}
