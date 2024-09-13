import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbcurlhistPage } from './bbcurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: BbcurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BbcurlhistPageRoutingModule {}
