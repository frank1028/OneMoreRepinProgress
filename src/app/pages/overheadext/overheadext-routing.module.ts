import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverheadextPage } from './overheadext.page';

const routes: Routes = [
  {
    path: '',
    component: OverheadextPage
  },  {
    path: 'overheadexthist',
    loadChildren: () => import('./overheadexthist/overheadexthist.module').then( m => m.OverheadexthistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverheadextPageRoutingModule {}
