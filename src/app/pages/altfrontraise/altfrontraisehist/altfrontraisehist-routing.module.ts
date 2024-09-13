import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltfrontraisehistPage } from './altfrontraisehist.page';

const routes: Routes = [
  {
    path: '',
    component: AltfrontraisehistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltfrontraisehistPageRoutingModule {}
