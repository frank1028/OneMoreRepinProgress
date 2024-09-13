import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltfrontraisePage } from './altfrontraise.page';

const routes: Routes = [
  {
    path: '',
    component: AltfrontraisePage
  },  {
    path: 'altfrontraisehist',
    loadChildren: () => import('./altfrontraisehist/altfrontraisehist.module').then( m => m.AltfrontraisehistPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltfrontraisePageRoutingModule {}
