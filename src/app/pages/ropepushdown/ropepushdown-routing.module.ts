import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RopepushdownPage } from './ropepushdown.page';

const routes: Routes = [
  {
    path: '',
    component: RopepushdownPage
  },  {
    path: 'ropepushdownhist',
    loadChildren: () => import('./ropepushdownhist/ropepushdownhist.module').then( m => m.RopepushdownhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RopepushdownPageRoutingModule {}
