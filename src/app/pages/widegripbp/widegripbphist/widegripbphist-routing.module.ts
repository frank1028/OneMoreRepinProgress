import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidegripbphistPage } from './widegripbphist.page';

const routes: Routes = [
  {
    path: '',
    component: WidegripbphistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidegripbphistPageRoutingModule {}
