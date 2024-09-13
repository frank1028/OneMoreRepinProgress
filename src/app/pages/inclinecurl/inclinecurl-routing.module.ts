import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InclinecurlPage } from './inclinecurl.page';

const routes: Routes = [
  {
    path: '',
    component: InclinecurlPage
  },  {
    path: 'inclinecurlhist',
    loadChildren: () => import('./inclinecurlhist/inclinecurlhist.module').then( m => m.InclinecurlhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InclinecurlPageRoutingModule {}
