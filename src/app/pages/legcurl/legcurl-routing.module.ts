import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegcurlPage } from './legcurl.page';

const routes: Routes = [
  {
    path: '',
    component: LegcurlPage
  },  {
    path: 'legcurlhist',
    loadChildren: () => import('./legcurlhist/legcurlhist.module').then( m => m.LegcurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegcurlPageRoutingModule {}
