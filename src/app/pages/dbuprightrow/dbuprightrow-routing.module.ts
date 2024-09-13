import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbuprightrowPage } from './dbuprightrow.page';

const routes: Routes = [
  {
    path: '',
    component: DbuprightrowPage
  },  {
    path: 'dbuprightrowhist',
    loadChildren: () => import('./dbuprightrowhist/dbuprightrowhist.module').then( m => m.DbuprightrowhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbuprightrowPageRoutingModule {}
