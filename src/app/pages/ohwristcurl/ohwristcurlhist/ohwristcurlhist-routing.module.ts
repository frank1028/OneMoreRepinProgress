import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OhwristcurlhistPage } from './ohwristcurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: OhwristcurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OhwristcurlhistPageRoutingModule {}
