import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BentarmpulloverPage } from './bentarmpullover.page';

const routes: Routes = [
  {
    path: '',
    component: BentarmpulloverPage
  },  {
    path: 'bentarmpulloverhist',
    loadChildren: () => import('./bentarmpulloverhist/bentarmpulloverhist.module').then( m => m.BentarmpulloverhistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BentarmpulloverPageRoutingModule {}
