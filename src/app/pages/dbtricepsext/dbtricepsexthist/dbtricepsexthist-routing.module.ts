import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbtricepsexthistPage } from './dbtricepsexthist.page';

const routes: Routes = [
  {
    path: '',
    component: DbtricepsexthistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbtricepsexthistPageRoutingModule {}
