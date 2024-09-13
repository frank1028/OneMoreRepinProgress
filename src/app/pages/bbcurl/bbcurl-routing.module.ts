import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbcurlPage } from './bbcurl.page';

const routes: Routes = [
  {
    path: '',
    component: BbcurlPage
  },
  {
    path: 'bbcurlhist',
    loadChildren: () => import('./bbcurlhist/bbcurlhist.module').then( m => m.BbcurlhistPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BbcurlPageRoutingModule {}
