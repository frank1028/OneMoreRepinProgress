import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosegripbphistPage } from './closegripbphist.page';

const routes: Routes = [
  {
    path: '',
    component: ClosegripbphistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosegripbphistPageRoutingModule {}
