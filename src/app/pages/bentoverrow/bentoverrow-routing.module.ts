import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BentoverrowPage } from './bentoverrow.page';

const routes: Routes = [
  {
    path: '',
    component: BentoverrowPage
  },  {
    path: 'bentoverrowhist',
    loadChildren: () => import('./bentoverrowhist/bentoverrowhist.module').then( m => m.BentoverrowhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BentoverrowPageRoutingModule {}
