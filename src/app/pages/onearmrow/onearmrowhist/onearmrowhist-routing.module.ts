import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnearmrowhistPage } from './onearmrowhist.page';

const routes: Routes = [
  {
    path: '',
    component: OnearmrowhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnearmrowhistPageRoutingModule {}
