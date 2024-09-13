import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OhpresshistPage } from './ohpresshist.page';

const routes: Routes = [
  {
    path: '',
    component: OhpresshistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OhpresshistPageRoutingModule {}
