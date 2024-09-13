import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinepulloverPage } from './machinepullover.page';

const routes: Routes = [
  {
    path: '',
    component: MachinepulloverPage
  },  {
    path: 'machinepulloverhist',
    loadChildren: () => import('./machinepulloverhist/machinepulloverhist.module').then( m => m.MachinepulloverhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinepulloverPageRoutingModule {}
