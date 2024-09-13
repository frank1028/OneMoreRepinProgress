import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InclinedbpressPage } from './inclinedbpress.page';

const routes: Routes = [
  {
    path: '',
    component: InclinedbpressPage
  },  {
    path: 'inclinedbpresshist',
    loadChildren: () => import('./inclinedbpresshist/inclinedbpresshist.module').then( m => m.InclinedbpresshistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InclinedbpressPageRoutingModule {}
