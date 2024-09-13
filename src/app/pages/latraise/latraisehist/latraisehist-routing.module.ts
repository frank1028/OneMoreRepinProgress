import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatraisehistPage } from './latraisehist.page';

const routes: Routes = [
  {
    path: '',
    component: LatraisehistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatraisehistPageRoutingModule {}
