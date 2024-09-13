import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VbarpulldownhistPage } from './vbarpulldownhist.page';

const routes: Routes = [
  {
    path: '',
    component: VbarpulldownhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VbarpulldownhistPageRoutingModule {}
