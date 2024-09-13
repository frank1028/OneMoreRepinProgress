import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnearmrowPage } from './onearmrow.page';

const routes: Routes = [
  {
    path: '',
    component: OnearmrowPage
  },  {
    path: 'onearmrowhist',
    loadChildren: () => import('./onearmrowhist/onearmrowhist.module').then( m => m.OnearmrowhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnearmrowPageRoutingModule {}
