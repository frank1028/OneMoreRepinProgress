import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThighlistPage } from './thighlist.page';

const routes: Routes = [
  {
    path: '',
    component: ThighlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThighlistPageRoutingModule {}
