import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltfrontraisehistPageRoutingModule } from './altfrontraisehist-routing.module';

import { AltfrontraisehistPage } from './altfrontraisehist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltfrontraisehistPageRoutingModule
  ],
  declarations: [AltfrontraisehistPage]
})
export class AltfrontraisehistPageModule {}
