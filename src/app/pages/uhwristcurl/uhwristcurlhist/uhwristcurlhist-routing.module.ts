import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UhwristcurlhistPage } from './uhwristcurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: UhwristcurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UhwristcurlhistPageRoutingModule {}
