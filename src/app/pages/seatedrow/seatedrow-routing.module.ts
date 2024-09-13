import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatedrowPage } from './seatedrow.page';

const routes: Routes = [
  {
    path: '',
    component: SeatedrowPage
  },  {
    path: 'seatedrowhist',
    loadChildren: () => import('./seatedrowhist/seatedrowhist.module').then( m => m.SeatedrowhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatedrowPageRoutingModule {}
