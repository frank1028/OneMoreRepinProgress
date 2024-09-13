import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreachercurlhistPage } from './preachercurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: PreachercurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreachercurlhistPageRoutingModule {}
