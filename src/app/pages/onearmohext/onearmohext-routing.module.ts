import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnearmohextPage } from './onearmohext.page';

const routes: Routes = [
  {
    path: '',
    component: OnearmohextPage
  },  {
    path: 'onearmohexthist',
    loadChildren: () => import('./onearmohexthist/onearmohexthist.module').then( m => m.OnearmohexthistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnearmohextPageRoutingModule {}
