import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidegripbpPage } from './widegripbp.page';

const routes: Routes = [
  {
    path: '',
    component: WidegripbpPage
  },  {
    path: 'widegripbphist',
    loadChildren: () => import('./widegripbphist/widegripbphist.module').then( m => m.WidegripbphistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidegripbpPageRoutingModule {}
