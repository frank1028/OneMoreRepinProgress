import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReversedbcurlPage } from './reversedbcurl.page';

const routes: Routes = [
  {
    path: '',
    component: ReversedbcurlPage
  },  {
    path: 'reversedbcurlhist',
    loadChildren: () => import('./reversedbcurlhist/reversedbcurlhist.module').then( m => m.ReversedbcurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReversedbcurlPageRoutingModule {}
