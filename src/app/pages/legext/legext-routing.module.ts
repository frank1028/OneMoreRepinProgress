import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegextPage } from './legext.page';

const routes: Routes = [
  {
    path: '',
    component: LegextPage
  },  {
    path: 'legexthist',
    loadChildren: () => import('./legexthist/legexthist.module').then( m => m.LegexthistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegextPageRoutingModule {}
