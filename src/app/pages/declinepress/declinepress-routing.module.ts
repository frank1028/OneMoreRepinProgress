import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclinepressPage } from './declinepress.page';

const routes: Routes = [
  {
    path: '',
    component: DeclinepressPage
  },  {
    path: 'declinepresshist',
    loadChildren: () => import('./declinepresshist/declinepresshist.module').then( m => m.DeclinepresshistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclinepressPageRoutingModule {}
