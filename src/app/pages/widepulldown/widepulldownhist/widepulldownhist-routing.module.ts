import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidepulldownhistPage } from './widepulldownhist.page';

const routes: Routes = [
  {
    path: '',
    component: WidepulldownhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidepulldownhistPageRoutingModule {}
