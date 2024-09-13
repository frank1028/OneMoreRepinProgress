import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlthammercurlPage } from './althammercurl.page';

const routes: Routes = [
  {
    path: '',
    component: AlthammercurlPage
  },  {
    path: 'althammercurlhist',
    loadChildren: () => import('./althammercurlhist/althammercurlhist.module').then( m => m.AlthammercurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlthammercurlPageRoutingModule {}
