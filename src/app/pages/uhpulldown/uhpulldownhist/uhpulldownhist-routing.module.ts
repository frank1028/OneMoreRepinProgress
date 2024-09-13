import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UhpulldownhistPage } from './uhpulldownhist.page';

const routes: Routes = [
  {
    path: '',
    component: UhpulldownhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UhpulldownhistPageRoutingModule {}
