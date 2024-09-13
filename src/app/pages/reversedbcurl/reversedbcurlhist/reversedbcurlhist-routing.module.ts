import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReversedbcurlhistPage } from './reversedbcurlhist.page';

const routes: Routes = [
  {
    path: '',
    component: ReversedbcurlhistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReversedbcurlhistPageRoutingModule {}
