import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreachercurlPage } from './preachercurl.page';

const routes: Routes = [
  {
    path: '',
    component: PreachercurlPage
  },  {
    path: 'preachercurlhist',
    loadChildren: () => import('./preachercurlhist/preachercurlhist.module').then( m => m.PreachercurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreachercurlPageRoutingModule {}
