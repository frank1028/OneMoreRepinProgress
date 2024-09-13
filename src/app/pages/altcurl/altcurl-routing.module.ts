import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltcurlPage } from './altcurl.page';

const routes: Routes = [
  {
    path: '',
    component: AltcurlPage
  },  {
    path: 'altcurlhist',
    loadChildren: () => import('./altcurlhist/altcurlhist.module').then( m => m.AltcurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltcurlPageRoutingModule {}
