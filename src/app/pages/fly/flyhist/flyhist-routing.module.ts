import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlyhistPage } from './flyhist.page';

const routes: Routes = [
  {
    path: '',
    component: FlyhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlyhistPageRoutingModule {}
