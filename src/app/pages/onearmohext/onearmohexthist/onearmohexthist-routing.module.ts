import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnearmohexthistPage } from './onearmohexthist.page';

const routes: Routes = [
  {
    path: '',
    component: OnearmohexthistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnearmohexthistPageRoutingModule {}
