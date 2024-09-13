import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UhpulldownPage } from './uhpulldown.page';

const routes: Routes = [
  {
    path: '',
    component: UhpulldownPage
  },  {
    path: 'uhpulldownhist',
    loadChildren: () => import('./uhpulldownhist/uhpulldownhist.module').then( m => m.UhpulldownhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UhpulldownPageRoutingModule {}
