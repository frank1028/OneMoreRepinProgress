import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KctricepsexthistPage } from './kctricepsexthist.page';

const routes: Routes = [
  {
    path: '',
    component: KctricepsexthistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KctricepsexthistPageRoutingModule {}
