import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatedlegcurlPage } from './seatedlegcurl.page';

const routes: Routes = [
  {
    path: '',
    component: SeatedlegcurlPage
  },  {
    path: 'seatedlegcurlhist',
    loadChildren: () => import('./seatedlegcurlhist/seatedlegcurlhist.module').then( m => m.SeatedlegcurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatedlegcurlPageRoutingModule {}
