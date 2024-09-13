import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InclinecurlhistPage } from './inclinecurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: InclinecurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InclinecurlhistPageRoutingModule {}
