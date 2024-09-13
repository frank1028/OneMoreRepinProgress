import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KctricepsextPage } from './kctricepsext.page';

const routes: Routes = [
  {
    path: '',
    component: KctricepsextPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KctricepsextPageRoutingModule {}
