import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OhpressPage } from './ohpress.page';

const routes: Routes = [
  {
    path: '',
    component: OhpressPage
  },
  {
    path: 'ohpresshist',
    loadChildren: () => import('./ohpresshist/ohpresshist.module').then( m => m.OhpresshistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OhpressPageRoutingModule {}
