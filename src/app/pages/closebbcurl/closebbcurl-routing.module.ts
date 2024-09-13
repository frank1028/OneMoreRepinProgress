import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosebbcurlPage } from './closebbcurl.page';

const routes: Routes = [
  {
    path: '',
    component: ClosebbcurlPage
  },  {
    path: 'closebbcurlhist',
    loadChildren: () => import('./closebbcurlhist/closebbcurlhist.module').then( m => m.ClosebbcurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosebbcurlPageRoutingModule {}
