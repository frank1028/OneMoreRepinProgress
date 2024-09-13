import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UhwristcurlPage } from './uhwristcurl.page';

const routes: Routes = [
  {
    path: '',
    component: UhwristcurlPage
  },  {
    path: 'uhwristcurlhist',
    loadChildren: () => import('./uhwristcurlhist/uhwristcurlhist.module').then( m => m.UhwristcurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UhwristcurlPageRoutingModule {}
