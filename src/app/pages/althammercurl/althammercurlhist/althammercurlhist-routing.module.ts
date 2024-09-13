import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlthammercurlhistPage } from './althammercurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: AlthammercurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlthammercurlhistPageRoutingModule {}
