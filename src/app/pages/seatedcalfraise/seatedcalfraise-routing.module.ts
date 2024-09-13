import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatedcalfraisePage } from './seatedcalfraise.page';

const routes: Routes = [
  {
    path: '',
    component: SeatedcalfraisePage
  },  {
    path: 'seatedcalfraisehist',
    loadChildren: () => import('./seatedcalfraisehist/seatedcalfraisehist.module').then( m => m.SeatedcalfraisehistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatedcalfraisePageRoutingModule {}
