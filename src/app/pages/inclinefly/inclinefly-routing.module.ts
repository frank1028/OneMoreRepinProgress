import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InclineflyPage } from './inclinefly.page';

const routes: Routes = [
  {
    path: '',
    component: InclineflyPage
  },  {
    path: 'inclineflyhist',
    loadChildren: () => import('./inclineflyhist/inclineflyhist.module').then( m => m.InclineflyhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InclineflyPageRoutingModule {}
