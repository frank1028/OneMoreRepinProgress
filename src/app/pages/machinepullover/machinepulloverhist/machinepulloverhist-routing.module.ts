import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinepulloverhistPage } from './machinepulloverhist.page';

const routes: Routes = [
  {
    path: '',
    component: MachinepulloverhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinepulloverhistPageRoutingModule {}
