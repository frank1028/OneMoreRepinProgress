import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeateddbpressPage } from './seateddbpress.page';

const routes: Routes = [
  {
    path: '',
    component: SeateddbpressPage
  },  {
    path: 'seateddbpresshist',
    loadChildren: () => import('./seateddbpresshist/seateddbpresshist.module').then( m => m.SeateddbpresshistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeateddbpressPageRoutingModule {}
