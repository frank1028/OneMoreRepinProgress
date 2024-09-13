import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbtricepsextPage } from './dbtricepsext.page';

const routes: Routes = [
  {
    path: '',
    component: DbtricepsextPage
  },  {
    path: 'dbtricepsexthist',
    loadChildren: () => import('./dbtricepsexthist/dbtricepsexthist.module').then( m => m.DbtricepsexthistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbtricepsextPageRoutingModule {}
