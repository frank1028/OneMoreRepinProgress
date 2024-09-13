import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclinepresshistPage } from './declinepresshist.page';

const routes: Routes = [
  {
    path: '',
    component: DeclinepresshistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclinepresshistPageRoutingModule {}
