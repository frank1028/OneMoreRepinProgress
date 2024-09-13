import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OhwristcurlPage } from './ohwristcurl.page';

const routes: Routes = [
  {
    path: '',
    component: OhwristcurlPage
  },  {
    path: 'ohwristcurlhist',
    loadChildren: () => import('./ohwristcurlhist/ohwristcurlhist.module').then( m => m.OhwristcurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OhwristcurlPageRoutingModule {}
