import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VbarpulldownPage } from './vbarpulldown.page';

const routes: Routes = [
  {
    path: '',
    component: VbarpulldownPage
  },  {
    path: 'vbarpulldownhist',
    loadChildren: () => import('./vbarpulldownhist/vbarpulldownhist.module').then( m => m.VbarpulldownhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VbarpulldownPageRoutingModule {}
