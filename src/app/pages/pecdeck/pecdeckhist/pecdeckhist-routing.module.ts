import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PecdeckhistPage } from './pecdeckhist.page';

const routes: Routes = [
  {
    path: '',
    component: PecdeckhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PecdeckhistPageRoutingModule {}
