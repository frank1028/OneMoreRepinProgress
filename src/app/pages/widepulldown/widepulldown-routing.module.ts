import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidepulldownPage } from './widepulldown.page';

const routes: Routes = [
  {
    path: '',
    component: WidepulldownPage
  },  {
    path: 'widepulldownhist',
    loadChildren: () => import('./widepulldownhist/widepulldownhist.module').then( m => m.WidepulldownhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidepulldownPageRoutingModule {}
