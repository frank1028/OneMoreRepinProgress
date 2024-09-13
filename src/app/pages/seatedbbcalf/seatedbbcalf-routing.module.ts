import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatedbbcalfPage } from './seatedbbcalf.page';

const routes: Routes = [
  {
    path: '',
    component: SeatedbbcalfPage
  },  {
    path: 'seatedbbcalfhist',
    loadChildren: () => import('./seatedbbcalfhist/seatedbbcalfhist.module').then( m => m.SeatedbbcalfhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatedbbcalfPageRoutingModule {}
