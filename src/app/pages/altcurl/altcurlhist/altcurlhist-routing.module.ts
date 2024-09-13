import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltcurlhistPage } from './altcurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: AltcurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltcurlhistPageRoutingModule {}
