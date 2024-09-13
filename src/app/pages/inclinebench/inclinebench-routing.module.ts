import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InclinebenchPage } from './inclinebench.page';

const routes: Routes = [
  {
    path: '',
    component: InclinebenchPage
  },  {
    path: 'inclinebenchhist',
    loadChildren: () => import('./inclinebenchhist/inclinebenchhist.module').then( m => m.InclinebenchhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InclinebenchPageRoutingModule {}
