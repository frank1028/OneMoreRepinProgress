import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeateddbpresshistPage } from './seateddbpresshist.page';

const routes: Routes = [
  {
    path: '',
    component: SeateddbpresshistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeateddbpresshistPageRoutingModule {}
