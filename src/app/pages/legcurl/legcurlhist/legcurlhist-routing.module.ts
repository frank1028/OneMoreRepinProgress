import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegcurlhistPage } from './legcurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: LegcurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegcurlhistPageRoutingModule {}
