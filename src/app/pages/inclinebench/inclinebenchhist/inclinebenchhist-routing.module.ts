import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InclinebenchhistPage } from './inclinebenchhist.page';

const routes: Routes = [
  {
    path: '',
    component: InclinebenchhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InclinebenchhistPageRoutingModule {}
