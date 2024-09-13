import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltfrontraisePageRoutingModule } from './altfrontraise-routing.module';

import { AltfrontraisePage } from './altfrontraise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltfrontraisePageRoutingModule
  ],
  declarations: [AltfrontraisePage]
})
export class AltfrontraisePageModule {}
