import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatraisePage } from './latraise.page';

const routes: Routes = [
  {
    path: '',
    component: LatraisePage
  },  {
    path: 'latraisehist',
    loadChildren: () => import('./latraisehist/latraisehist.module').then( m => m.LatraisehistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatraisePageRoutingModule {}
